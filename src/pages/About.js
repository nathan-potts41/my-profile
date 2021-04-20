import React from 'react';
import HeadShot from '../assets/images/nathanHeadshotv2.jpg';
import Time from '../components/Time';
import Nav from '../components/Nav';


const About = () => {
    return (
        <div className="container">
            {/* <Time /> */}
            <img src={HeadShot} alt="Headshot of Nathan" />
            <div>
                5'11'', an avid climber, and a passion for warm weather, I am a go getter. I have played many sports (soccer, baseball, basketball) and enjoyed many mainstage productions (Phantom of the Opera, Singin in the Rain),
                but I find real joy in working with a team. Being born in Fargo, North Dakota (Nodak for short) the midwest spirit of hard work and perseverance runs deep in my veins. Having frigid winters and hot summers, I enjoy
                spending the good portion of that time at our family cabin. Some of my likes: Outdoor Adventure, making music, dancing, singing, beer, bonfires; dislikes: complaining, not getting enough sleep, products that are not built to last.
                A friendly guy, I'm always open to listen and have an interesting conversation. If you'd like to hire or ask me a question, head over to the Contact page!
            </div>
        </div>
    );
};

export default About;