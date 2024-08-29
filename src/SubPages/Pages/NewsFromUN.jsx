import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ApiUrl } from "../../Api/ApiUrl";

function NewsFromUN() {
    const [pdfLinks, setPdfLinks] = useState([]);
    const [mainAccordionOpen, setMainAccordionOpen] = useState(true);
    const [subAccordionOpen, setSubAccordionOpen] = useState({});
    const [loading, setLoading] = useState(true);
    const handleMainAccordionClick = () => {
        setMainAccordionOpen((prevState) => !prevState);
        setSubAccordionOpen((prevState) => ({
            ...prevState,
            [new Date().getFullYear()]: !prevState[new Date().getFullYear()],
        }));
    };

    const handleMouseEnter = (event) => {
        event.currentTarget.style.overflowY = "scroll";
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.style.overflowY = "hidden";
    };

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

                setMainAccordionOpen(true);
                setSubAccordionOpen((prevState) => ({
                    ...prevState,
                    [new Date().getFullYear()]: true,
                }));
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
                <div className="container subpage mt-5">
                    <h3 className="text-black entry-title">NEWS FROM THE LORETO U.N NGO</h3>
                    <br />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div
                                    className="col-12 col-lg-12 custom-scrollbar">
                                    <div className="accordion" id="newsletterAccordion">
                                        <div className="accordion-item mb-4">
                                            <h2 className="accordion-header" onClick={handleMainAccordionClick}>
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#allNewsletters"
                                                    aria-expanded={mainAccordionOpen ? "true" : "false"}
                                                    aria-controls="allNewsletters"
                                                    style={{ fontWeight: "bold", backgroundColor: "rgb(128 0 0)", color: "#f5c83f" }}>
                                                    News From the Loreto U.N NGO - {new Date().getFullYear()}
                                                </button>
                                            </h2>
                                            <div
                                                id="allNewsletters"
                                                className={`accordion-collapse collapse ${mainAccordionOpen ? "show" : ""}`}
                                                aria-labelledby="allNewsletters"
                                                data-parent="#newsletterAccordion"
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave} style={{ height: "555px", overflowY: "scroll" }}>
                                                <div className="accordion-body">
                                                    {pdfLinks.length > 0 ? (
                                                        pdfLinks
                                                            .reduce((acc, pdf) => {
                                                                const existingMonth = acc.find(
                                                                    (item) => item.month === pdf.month
                                                                );
                                                                if (existingMonth) {
                                                                    existingMonth.pdfs.push(pdf);
                                                                } else {
                                                                    acc.push({ month: pdf.month, pdfs: [pdf] });
                                                                }
                                                                return acc;
                                                            }, [])
                                                            .map((monthGroup, index) => (
                                                                <div key={index}>
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header">
                                                                            <button
                                                                                className="accordion-button"
                                                                                type="button"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target={`#collapse${index}`}
                                                                                aria-expanded={subAccordionOpen[new Date().getFullYear()] ? "true" : "false"}
                                                                                aria-controls={`collapse${index}`}
                                                                                onClick={(event) => {
                                                                                    const clickedElement = event.target;
                                                                                    const isSubAccordion = clickedElement.closest(
                                                                                        ".accordion-collapse"
                                                                                    );

                                                                                    if (!isSubAccordion) {
                                                                                        const mainAccordion = document.getElementById(
                                                                                            "allNewsletters"
                                                                                        );
                                                                                        if (mainAccordion) mainAccordion.classList.remove("show");
                                                                                    }
                                                                                }}
                                                                                style={{ fontWeight: "bold" }}>
                                                                                {new Date().getFullYear()}
                                                                            </button>
                                                                        </h2>
                                                                        <div
                                                                            id={`collapse${index}`}
                                                                            className={`accordion-collapse collapse ${subAccordionOpen[new Date().getFullYear()] ? "show" : ""
                                                                                }`}
                                                                            aria-labelledby={`heading${index}`}
                                                                            data-parent="#newsletterAccordion">
                                                                            <div className="accordion-body">
                                                                                {monthGroup.pdfs.map((pdf, pdfIndex) => (
                                                                                    <div key={pdfIndex}>
                                                                                        <p>
                                                                                            <b>{pdf.title} </b>
                                                                                        </p>
                                                                                        <p>{pdf.eventdate}</p>
                                                                                        <a
                                                                                            href={pdf.file_url}
                                                                                            rel="noopener noreferrer"
                                                                                            className="btn btn-sm"
                                                                                            target="_blank"
                                                                                            style={{
                                                                                                backgroundColor: "#012c6d",
                                                                                                color: "#e0ab08",
                                                                                                textDecoration: "none",
                                                                                            }}>
                                                                                            <FontAwesomeIcon icon={faDownload} /> Download
                                                                                        </a>
                                                                                        <br />
                                                                                        <br />
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                    ) : (
                                                        <p className="text-center font-weight-bold" style={{ fontSize: "16px", fontWeight: "600" }}>
                                                            No Data Available
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
}

export default NewsFromUN;