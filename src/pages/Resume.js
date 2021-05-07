import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../assets/resume/codingResume.pdf';

function Resume() {

    return (
        <div className="col s12 m10 l10 offset-m2 offset-l2 container-fluid">
            <div className="row">
                <div className="col s12 m6 l6">
                    <Document
                        file={resume}>
                        <Page pageNumber={1} />
                    </Document>
                </div>
                <br></br>
                <div className="col s12 m5 l5 offset-m1 offset-l1">
                    <div className="header">
                        Click the button below to download my resume.
                        <a href={resume} download="Resume" class="waves-effect waves-light btn yellow darken-3">Download Resume</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Resume;