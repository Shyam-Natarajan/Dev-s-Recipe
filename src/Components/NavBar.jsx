import { ForkKnife, Heart, Home } from 'lucide-react';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {

    useEffect(() => {
        // On component load, check and apply the theme
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
        const checkbox = document.querySelector('.theme-controller');
        if (checkbox) {
            checkbox.checked = theme === "dark";
        }
    }, []);

    const handleThemeChange = () => {
        const checkbox = document.querySelector('.theme-controller');
        const theme = checkbox.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    return (
        <>
            <div className="navbar shadow-2xl px-7   ">
                <div className="navbar-start w-2/3 sm:w-1/2 ">
                    <img src="../favicon.svg" alt="logo" />
                    <div className="flex flex-col justify-center align-middle">
                        <a className="text-base font-bold md:text-xl ">Dev's Recipe</a>
                        <small className='text-start '>Let him Cook</small>
                    </div>

                </div>
                <div className="navbar-center hidden sm:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/' className=' text-orange-600'>Home</Link></li>
                        <li><Link to='/recipe' className=' text-orange-600'>Recipe</Link></li>
                        <li><Link to='/favourite' className=' text-orange-600'>Favourite</Link></li>
                    </ul>
                </div>
                <div className="navbar-end w-1/3 sm:w-1/2">
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className='theme-controller' onChange={handleThemeChange} />

                        {/* sun icon */}
                        <svg
                            className="swap-on h-10 w-10 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill='#ea580c'>
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-off h-10 w-10"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill='#ea580c'>
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>

                {/* Bottom Navbar */}
                <div className='flex justify-evenly bg-base-100 gap-5 fixed w-screen bottom-0 left-0 z-30 p-2 sm:hidden'>
                    <Link to='/recipe' ><ForkKnife size={"24px"} className='cursor-pointer'  /></Link>
                    <Link to='/' ><Home size={"24px"} className='cursor-pointer'  /></Link>
                    <Link to='/favourite'><Heart size={"24px"} className='cursor-pointer'  /></Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;



