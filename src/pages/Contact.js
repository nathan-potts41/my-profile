import React from 'react';

function Contact() {
    return (
        <div className="container">
            <div className="col s12 m10 l10 offset-m2 offset-l2">
                <br></br>
                <br></br>
                <div className="row header">
                    <div className="col s5 m5 l5 center">
                        Name:
                    </div>
                    <div className="col s7 m7 l7">
                        Nathan Potts
                    </div>
                </div>
                <div className="row header">
                    <div className="col s5 m5 l5 center">
                        Phone:
                    </div>
                    <div className="col s7 m7 l7">
                        701.318.7255
                    </div>
                </div>
                <div className="row header">
                    <div className="col s5 m5 l5 center">
                        Email:
                    </div>
                    <div className="col s7 m7 l7">
                        nathan.potts41@gmail.com
                    </div>
                </div>
                <div className="row header">
                    <div className="col s5 m5 l5 center">
                        Github:
                    </div>
                    <div className="col s7 m7 l7">
                        https://github.com/nathan-potts41
                    </div>
                </div>
                <div className="row header">
                    <div className="col s5 m5 l5 center">
                        LinkedIn:
                    </div>
                    <div className="col s7 m7 l7">
                        https://www.linkedin.com/in/nathanjpotts/
                    </div>
                </div>
                <div className="row center header">
                    Please send me a message!
                </div>
            </div>
        </div>
    )
}

export default Contact;