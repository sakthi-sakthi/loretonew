import React from 'react';
import { useLocation } from 'react-router-dom';
import { ApiUrl } from '../../Api/ApiUrl';
import useCachedData from '../../useCachedData';

function Whoweare() {
    const location = useLocation();
    const url = location.pathname;

    const path = {
        '/aboutus': 1,
        '/institute-team': 2,
        '/province-team': 3,
        '/history': 4,
        '/loreto-india': 5,
        '/loreto-foundation-india': 6,
        '/archive': 7,
        "/spiritual": 8,
        "/mary-ward-spiritual": 9,
        "/ignation-spiritual": 10,
        "/education": 11,
        "/social-ministry": 12,
        "/spiritual-ministry": 13,
        "/loreto-global": 14,
        "/mary-ward-international": 15,
        "/lay-associates": 16,
        "/useful-links": 17,
        "/jpic": 18,
        '/become-loreto-sister':20 ,
        "/pioneers": 22,
    };
    const pageId = path[url] ? path[url] : url;

    const { data, loading } = useCachedData(`${ApiUrl}/get/Pages/${pageId}`, pageId);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <b>Loading...</b>
            </div>
        );
    }

    const filteredData = data?.filter((item) => item.id === pageId);

    return (
        <>
            <div className="container subpage">
                <div className="row">
                    <div className="col-lg-12">
                        {filteredData?.map((item) => (
                            <div key={item?.id}>
                                <h4 className="sub-page-title">{item?.title}</h4>
                                <div
                                    style={{ textAlign: 'justify', color: "black" }}
                                    dangerouslySetInnerHTML={{
                                        __html: `${item?.content}`,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Whoweare;