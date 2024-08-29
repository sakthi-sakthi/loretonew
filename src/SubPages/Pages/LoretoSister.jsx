import React from 'react';
import '../css/loretosister.css';

const LoretoSister = () => {
    const pptPath = 'https://docs.google.com/presentation/d/e/2PACX-1vTEgOE1s6NzFtiiNrPyzsYexxFI5-iAqYNQPQ3SuoAyfsXaHpCEYSIbxHlkmKsVmA/embed?start=false&loop=false&delayms=3000&slide=id.p1';

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + pptPath;
        link.download = 'Loreto_Sister.ppt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="pdf-viewer-container mt-5">
            <div className="pdf-header">
                <h3>FRIENDS OF MARY WARD</h3>
            </div>
            <div className="pdf-viewer">
                <iframe
                    title="PDF Viewer"
                    src={process.env.PUBLIC_URL + pptPath}
                    width="100%"
                    height="500px"
                    frameBorder="0"
                    className='pdfframe'
                />
                <button className="download-btn" onClick={handleDownload}>
                    Download PPT
                </button>
            </div>
        </div>
    );
};

export default LoretoSister;
