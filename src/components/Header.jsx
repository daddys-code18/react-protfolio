import React from 'react'

const Header = () => {
    return (
        <>
            <nav>
                <NavContent />

            </nav>
        </>
    )
}

const NavContent = () => {
    return (
        <>
            <h2>Pavan Kafare</h2>
            <div>
                <a href="#home">Home</a>
                <a href="#word">Word</a>
                <a href="#timeline">Experience</a>
                <a href="#services">Services</a>
                <a href="#testimonial">Testimonial</a>
                <a href="#contact">Contact</a>
            </div>
            <a href="mailto:pavan.kafare97@gmail.com"><button>Email</button></a>
        </>
    )
}
export default Header
