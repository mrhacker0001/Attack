import React from 'react'
import "./Navbar.css"
import logo from "../assets/sabio-logo-for-dark-wt-com.png"
import img from "../assets/flag.png"

function Navbar() {
    return (
        <div className='Navbar'>
            <img src={logo} alt="..." />

            <div className="triple-card">
                <select>
                    <option value="EN"><img src={img} alt="..." />ENG</option>
                    <option value="RU">RUS</option>
                    <option value="UZ">UZB</option>
                </select>
                <button>Log in</button>
                <button>Get funded</button>
            </div>
        </div>
    )
}

export default Navbar