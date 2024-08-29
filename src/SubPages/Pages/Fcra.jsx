import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { BsEye, BsDownload } from 'react-icons/bs';
import '../css/Fcra.css';
import { ApiUrl } from '../../Api/ApiUrl';

const Fcra = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ApiUrl}/get/Newsletter`);
                setData(response?.data?.data);
            } catch (error) {
                console.log('Error fetching Data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const filteredData = data
        ?.filter(item => item.category_name === 'FCRA Information')
        ?.sort((a, b) => b.id - a.id);

    if (loading) {
        return <div><p className='mt-5'><b><center>Loading...</center></b></p></div>;
    }

    return (
        <>
            <div className="custom-table-container mt-5">
                <h3 className="text-center">FCRA INFORMATION</h3>
                <Table striped bordered hover className="custom-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>FCRA Title</th>
                            <th>View</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData?.length > 0 ? (
                            filteredData.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td title={item?.title}>{item?.title}</td>
                                    <td>
                                        <a href={item?.file_url} target="_blank" rel="noopener noreferrer">
                                            <BsEye className="custom-icon view-icon" />
                                            <span className="icon-label" title="View PDF">View</span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href={item?.file_url} download>
                                            <BsDownload className="custom-icon download-icon" />
                                            <span className="icon-label" title="Download PDF">Download</span>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className='text-center' style={{ fontWeight: "bold" }}>No Data Available</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Fcra;
