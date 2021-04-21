import React from 'react';
import GertenHomesImg from '../assets/images/gerten-homes-screenshot.png';
import ProMeasureImg from '../assets/images/promeasureScreenShot.png';
import RunBuddyImg from '../assets/images/run-BuddyScreenShot.png';
import WhateverWorksImg from '../assets/images/WhateverWorks2.0.png';
import BookSearchImg from '../assets/images/BookSearchScreenShot.png';
import DeepThoughtsImg from '../assets/images/DeepThoughtsScreenShot.png';

function Portfolio() {
    return (
        <div>
            <div>
                <a href="https://sheltered-garden-15985.herokuapp.com/">
                    Book Search
                    <img src={BookSearchImg}></img>
                </a>
            </div>
            <div>
                <a href="https://whatever-works-2.herokuapp.com/">
                    Whatever Works 2.0
                    <img src={WhateverWorksImg} alt="Screenshot of Whatever Works 2.0"></img>
                </a>
            </div>
            <div>
                <a href="https://nathan-potts41.github.io/run-buddy/">
                    Run Buddy
                    <img src={RunBuddyImg} alt="Screenshot of Run Buddy"></img>
                </a>
            </div>
            <div>
                <a href="https://minnesotanyst.github.io/pm-beta/index.html">
                    Pro Measure
                    <img src={ProMeasureImg} alt="Screenshot of Promeasure"></img>
                </a>
            </div>
            <div>
                <a href="https://thawing-sierra-78607.herokuapp.com/">
                    Deep Thoughts
                    <img src={DeepThoughtsImg}></img>
                </a>
            </div>
            <div>
                <a href="https://gertenhomes.herokuapp.com/">
                    Gerten Homes Realty
                    <img src={GertenHomesImg} alt="Screenshot of Gerten Homes Realty"></img>
                </a>
            </div>
        </div>
    )
}

export default Portfolio;