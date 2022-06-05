import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../Resume/nurResume.pdf'

const Navbar = () => {

    const navItems = (
        <>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </>
    )

    return (
        <div class="navbar bg-base-100 text-white">
        <div class="navbar-start">
            <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navItems}
            </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl">
                <Link to='/home'>Assrafuzzaman Nur</Link>
            </a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
            {navItems}
            </ul>
        </div>
        <div class="navbar-end">
            <a href={resume} className="btn text-white btn-primary">Download Resume</a>
        </div>
        </div>
    );
};

export default Navbar;