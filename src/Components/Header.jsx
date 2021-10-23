import React from 'react'
import NavBar from './NavBar'
function Header() {
    return (
        <div id="main">
            <NavBar />
            <div className="name">
                <h1><span>Simple Landing Page </span>built using React</h1>
                <p className="details">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro asperiores voluptatem vel sunt qui eius!</p>
                <a href="#" className="cv-btn">Download</a>
            </div>
        </div>
    )
}

export default Header
