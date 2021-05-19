import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../assets/resume/ResumeNathanPotts.pdf';

function Resume() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m12 l12">
                    <br></br>
                    <div className="header">
                        Resume Contains: Contact Information, Skills, Projects, and Education
                    </div>
                    <Document
                        file={resume}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={1} 
                        renderAnnotationLayer={false}
                        renderMode="svg"
                        className="circle"
                        />
                    </Document>
                </div>
                <br></br>
                <div>
                    <div className="header">
                        Work Experience:
                    </div>
                    <Document
                        file={resume}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={2} />
                    </Document>
                </div>
                <div className="col s12 m12 l12">
                    <div className="header center">
                        Click the button to download my resume.
                        <a href={resume} download="Resume" className="waves-effect waves-light btn-large yellow darken-3">Download Resume</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Resume;