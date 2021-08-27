import React from 'react'
import Love from '../logos/suit-heart.svg'
import './Header.css'

const user = {
    name: 'Akenz Mike'
}
const Header = () => {

    return(
        <div className = "top-header">
            <img id='icon' src= {Love}></img>
            <h3 id='user'>{user.name}</h3>
            <div className="link">
                <a id='at'>Article</a>
                <a id='sn'>Snippets</a>
                <a id='ab'>About</a>
                <a id='co'> <button className = "btn">Contact</button></a>
            </div>
        </div>
    );
}
export default Header;