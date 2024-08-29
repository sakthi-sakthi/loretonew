import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiUrl } from '../Api/ApiUrl';

const Services = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${ApiUrl}/get/team/12`)
            .then(response => {
                setTeam(response?.data?.teams);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching Team data:", error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {!loading && team.length > 0 && (
                <section className="meetCouncilBlock noOverlay position-relative pt-3 pt-md-4 pt-lg-6 pt-xl-11 pb-6 pb-lg-10">
                    <div className="container">
                        <header className="headingHead cdTitle mb-7 mb-md-13">
                            <h2 className="fwSemiBold mb-4">Meet Our Members</h2>
                        </header>
                        <div className="row justify-content-center">
                            {team
                                ?.filter(member => member?.status !== 0)
                                ?.map((member, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                        <article className="mccColumn bg-white shadow mb-6 mx-auto mx-sm-0">
                                            <div className="imgHolder position-relative">
                                                <img
                                                    src={member?.media_url}
                                                    className="img-fluid d-block w-100"
                                                    alt={member?.title}
                                                    style={{ height: '330px', objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div className="mcCaptionWrap px-5 pt-2 pb-2 position-relative">
                                                <h3 className="fwMedium h3Small mb-1">{member?.title}</h3>
                                                <h4 className="fwSemiBold fontBase text-secondary">
                                                    {member?.role}
                                                </h4>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Services;
