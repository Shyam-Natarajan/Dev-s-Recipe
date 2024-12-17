import React from 'react'

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-base-100 mb-10 sm:mb-0">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Dev's Recipe - A Recipe Search App... </p> 
                <p>Designed & Developed by <a href='https://www.linkedin.com/in/shyam-natarajan/' target='blank' className='font-black'>Shyam N</a></p>
            </aside>
        </footer>
    )
}

export default Footer;