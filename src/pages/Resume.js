import React from 'react';
import resume from '../assets/resume/codingResume.pdf';

function Resume() {

    return (
        <div className="col s12 m10 l10 offset-m2 offset-l2 container-fluid">
            <div className="row center">
                <div className="col s12 m6 l6">
                    
                </div>
                <br></br>
                <div className="col s12 m5 l5 offset-m1 offset-l1">
                    <div className="header">
                        Click the button below to download my resume.
                        <a class="waves-effect waves-light btn yellow darken-3">Download Resume</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Resume;