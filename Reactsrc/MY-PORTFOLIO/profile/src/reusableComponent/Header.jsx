import React from 'react'
import Love from '../logos/suit-heart.svg'
import './Header.css'
import Button from './Button'

const user = {
    name: 'Akenz Mike'
}
const Header = () => {

    return(
        <div className = "top-header">
            <img id='icon' src= {Love}></img>
            <h2 id='user'>{user.name}</h2>
            <div className="link">
                <a id='at' href="">Article</a>
                <a id='sn' href="">Snippets</a>
                <a id='ab' href="">About</a>
                <a id='co' href=""> <Button Button = "Contact" height="0.9cm" color="white" backgroundColor="#282c34" borderRadius="0.1cm" borderStyle="solid"/></a>
            </div>
        </div>
    );
}
export default Header;