import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { BsEye, BsDownload } from 'react-icons/bs';
import '../css/ProvinceNewsLetter.css';
import { ReligioUrl } from '../../Api/ApiUrl';

const ProvinceNewsLetter = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ReligioUrl}/newsletter/province/1`);
                setData(response?.data?.data);
                setLoading(false);
            } catch (error) {
                console.log('Error fetching Data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const getMonthName = (monthNumber) => {
        return monthNames[monthNumber - 1];
    };

    return (
        <div className="custom-table-container mt-5">
            <h3 className="text-center">PROVINCE NEWSLETTER</h3>
            <Table striped bordered hover className="custom-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>NewsLetter Title</th>
                        <th>Theme</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>View</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="7" className="text-center" style={{ fontWeight: "bold" }}>
                                Loading...
                            </td>
                        </tr>
                    ) : (
                        data?.length > 0 ? (
                            data?.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td title={item?.name}>{item?.name}</td>
                                    <td title={item?.theme}>{item?.theme}</td>
                                    <td title={getMonthName(item?.month)}>{getMonthName(item?.month)}</td>
                                    <td title={item?.year}>{item?.year}</td>
                                    <td>
                                        <a href={item?.upload} target="_blank" rel="noopener noreferrer">
                                            <BsEye className="custom-icon view-icon" />
                                            <span className="icon-label" title="View PDF">View</span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href={item?.upload} download>
                                            <BsDownload className="custom-icon download-icon" />
                                            <span className="icon-label" title="Download PDF">Download</span>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className='text-center' style={{ fontWeight: "bold" }}>No Data Available</td>
                            </tr>
                        )
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default ProvinceNewsLetter;
