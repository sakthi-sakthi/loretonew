import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useCachedData = (url, pageId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const prevDataRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(`cachedData_${pageId}`);
        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
        }

        const response = await axios.get(url);
        setData(response?.data?.data);
        if (response.data.data.length > 0) {
          localStorage.setItem(`cachedData_${pageId}`, JSON.stringify(response.data.data));
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, pageId]);

  useEffect(() => {
    // Check if data has changed and update localStorage
    if (prevDataRef.current !== data) {
      localStorage.setItem(`cachedData_${pageId}`, JSON.stringify(data));
      prevDataRef.current = data;
    }
  }, [data, pageId]);

  return { data, loading };
};

export default useCachedData;
