import React from 'react';
import GertenHomesImg from '../assets/images/gerten-homes-screenshot.png';
import ProMeasureImg from '../assets/images/promeasureScreenShot.png';
import RunBuddyImg from '../assets/images/run-BuddyScreenShot.png';
import WhateverWorksImg from '../assets/images/WhateverWorks2.0.png';
import BookSearchImg from '../assets/images/BookSearchScreenShot.png';
import DeepThoughtsImg from '../assets/images/DeepThoughtsScreenShot.png';

function Portfolio() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={WhateverWorksImg} className="responsive-img" alt="Screenshot of Whatever Works 2.0"></img>
                            <span className="card-title"><a className="waves-effect waves-light btn-small yellow darken-3" href="https://whatever-works-2.herokuapp.com/">
                                Whatever Works 2.0
                            </a></span>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={BookSearchImg} className="responsive-img" alt="Screenshot of Book Search"></img>
                            <span className="card-title"><a className="waves-effect waves-light btn-small yellow darken-3" href="https://sheltered-garden-15985.herokuapp.com/">
                                Book Search
                            </a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={RunBuddyImg} className="responsive-img" alt="Screenshot of Run Buddy"></img>
                            <span className="card-title"><a className="waves-effect waves-light btn-small yellow darken-3" href="https://nathan-potts41.github.io/run-buddy/">
                                Run Buddy
                            </a></span>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={ProMeasureImg} className="responsive-img" alt="Screenshot of Promeasure"></img>
                            <span className="card-title"><a className="waves-effect waves-light btn-small yellow darken-3" href="https://minnesotanyst.github.io/pm-beta/index.html">
                                Pro Measure
                            </a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={DeepThoughtsImg} className="responsive-img" alt="Screenshot of Deep Thoughts"></img>
                            <span className="card-title"><a className="waves-effect waves-light btn-small yellow darken-3" href="https://thawing-sierra-78607.herokuapp.com/">
                                Deep Thoughts
                            </a></span>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={GertenHomesImg} className="responsive-img" alt="Screenshot of Gerten Homes Realty"></img>
                            <span className="card-title"><a className="waves-effect waves-light btn-small yellow darken-3" href="https://gertenhomes.herokuapp.com/">
                                Gerten Homes Realty
                            </a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;