import React from 'react'
import user from './reusableComponent/Header'
import './Personality.css'

const Personality = () => {
    return(
    <div className="main">
        <h3>
            I'm {user.name} a/an Entrepreneur and Software Engineer.
        </h3>
    </div>
    );
}
export default Personality;