import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { BsEye, BsDownload } from 'react-icons/bs';
import '../css/Houseprayer.css';
import { ApiUrl } from '../../Api/ApiUrl';

const HousePrayer = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ApiUrl}/get/Newsletter`);
                setData(response?.data?.data);
                setLoading(false);
            } catch (error) {
                console.log('Error fetching Data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const filteredData = data?.filter(item => item.category_name === 'House of Prayer');

    if (loading) {
        return <div><p><b><center>Loading...</center></b></p></div>;
    }

    const groupedData = {};
    if (filteredData) {
        filteredData.forEach(item => {
            const year = item.title.substring(item.title.lastIndexOf(' ') + 1);
            if (!groupedData[year]) {
                groupedData[year] = [];
            }
            groupedData[year].push(item);
        });
    }

    return (
        <>
            <div className="custom-table-container mt-5">
                {Object.entries(groupedData)?.map(([year, yearData]) => (
                    <React.Fragment key={year}>
                        <h4 className="text-center">{`HOUSE OF PRAYER ${year}`}</h4>
                        <Table striped bordered hover className="custom-table">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>House Prayer Month</th>
                                    <th>View</th>
                                    <th>Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {yearData.length > 0 ? (
                                    yearData.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td dangerouslySetInnerHTML={{ __html: item.content }} />
                                            <td>
                                                <a href={item.file_url} target="_blank" rel="noopener noreferrer">
                                                    <BsEye className="custom-icon view-icon" />
                                                    <span className="icon-label" title="View PDF">View</span>
                                                </a>
                                            </td>
                                            <td>
                                                <a href={item.file_url} download>
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
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default HousePrayer;
