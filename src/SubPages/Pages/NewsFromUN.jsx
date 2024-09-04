import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { BsEye, BsDownload } from "react-icons/bs";
import { ApiUrl } from "../../Api/ApiUrl";

function NewsFromUN() {
    const [pdfLinks, setPdfLinks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${ApiUrl}/get/Newsletter`)
            .then((response) => {
                const allPdfLinks = response.data.data;

                const currentYearPdfLinks = allPdfLinks.filter(item => {
                    const dateParts = item.eventdate.split('-');
                    const eventDate = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
                    return item.category_name === "U.N NGO" && eventDate.getFullYear() === new Date().getFullYear();
                });

                setPdfLinks(currentYearPdfLinks);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (pdfLinks.length > 0) {
        pdfLinks.sort((a, b) => new Date(b.eventdate) - new Date(a.eventdate));
    }

    return (
        <>
            {loading ? (
                <div className="text-center mt-5"><b>Loading...</b></div>
            ) : (
                <div className="container subpage">
                    <h3 className="text-black text-center entry-title">NEWS FROM THE LORETO U.N NGO</h3>
                    <Table striped bordered hover responsive className="custom-table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>View</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pdfLinks.length > 0 ? (
                                pdfLinks.map((pdf, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{pdf.title}</td>
                                        <td>{pdf.eventdate}</td>
                                        <td className="text-center">
                                            <a href={pdf.file_url} target="_blank" rel="noopener noreferrer">
                                                <BsEye size={20} />
                                            </a>
                                        </td>
                                        <td className="text-center">
                                            <a href={pdf.file_url} download rel="noopener noreferrer" >
                                                <BsDownload size={20} />
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center font-weight-bold" style={{ fontSize: "16px", fontWeight: "600" }}>
                                        No Data Available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            )}
        </>
    );
}

export default NewsFromUN;
