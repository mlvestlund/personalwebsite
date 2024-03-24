import React from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";

import LinkedInIcon from '.././images/LinkedIn-icon-white.png';
import GitHubIcon from '.././images/GitHub-Icon-white.png';

const Layout = () => {
    return (
        <>
            <header className="header">
                <nav>
                    <a href="/" className="logo">M.V. | .NET-developer</a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
                    <ul className="menu">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/curriculumVitae">Curriculum vitae</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <footer>
                <article className="center-article">
                    <h2>Follow me</h2>
                    <ul className="socials-list">
                        <li><a href="https://www.linkedin.com/"><img src={LinkedInIcon}
                            alt="LinkedIn" /></a></li>
                        <li><a href="https://github.com/"><img src={GitHubIcon}
                            alt="GitHub" /></a></li>
                    </ul>
                </article>
                <article className="center-article">
                    <p>&copy; 2024 Maria Vestlund. All rights reserved.</p>
                </article>
            </footer>
        </>
    );
};

export default Layout;