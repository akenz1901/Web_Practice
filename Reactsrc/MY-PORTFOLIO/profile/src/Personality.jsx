import React from 'react'
import user from './reusableComponent/Header'
import './Personality.css'

const Personality = () => {
    return(
    <div className="main">
        <h3 id ="top-about">
            I'm {user.name} a/an Entrepreneur and Software Engineer.
        </h3>
        <p id="write-up">I specialize in rapidly prototyping software companies and web
        applications. i talk about my journey on <a href="">Twitter</a>, comit code on <a href="">Github</a>, 
        and take shots on <a href="">Dribble</a>.</p>
    </div>
    );
}
export default Personality;