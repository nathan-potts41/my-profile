import React, { useEffect } from 'react';
// import { render } from 'react-dom/cjs/react-dom.development';


function Time() {

    const time = (
        <div>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    // render(time, document.getElementById('root'));

    return(
        <div>{time}</div>
    )

}
setInterval(Time, 1000);

export default Time;