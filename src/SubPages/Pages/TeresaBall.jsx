import React from 'react';
import '../css/maryward.css';

const TeresaBall = () => {
    const pdfPath = '/images/subpages/TB.pdf';

    return (
        <div className="pdf-viewer-container mt-5">
            <div className="pdf-header">
                <h3>TERESA BALL</h3>
            </div>
            <div className="pdf-viewer">
                <iframe
                    title="PDF Viewer"
                    src={process.env.PUBLIC_URL + pdfPath}
                    width="100%"
                    height="500px"
                    frameBorder="0"
                    className='pdfframe'
                />
            </div>
        </div>
    );
};

export default TeresaBall;
