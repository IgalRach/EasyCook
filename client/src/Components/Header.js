import React from "react";



export default function Header() {
    return (
        <header className="header-area">
            {/* Top Header Area */}
            <div className="top-header-area">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-between">
                    </div>
                </div>
            </div>
            {/* Navbar Area */}
            <div className="delicious-main-menu">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">
                        {/* Menu */}
                        <nav className="classy-navbar justify-content-between" id="deliciousNav">
                            {/* Logo */}
                            <a className="nav-brand" href="index.html"><img src="img/core-img/easyCookLogo.png" alt="" /></a>
                            {/* Navbar Toggler */}
                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span /><span /><span /></span>
                            </div>
                            {/* Menu */}
                            <div className="classy-menu">
                                {/* close btn */}
                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                                </div>
                                {/* Nav Start */}
                                <div className="classynav">
                                    <ul>
                                        <li className="active"><a href="index.html">Home</a></li>
                                        <li><a href="receipe-post.html">Receipies</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                    {/* Newsletter Form */}
                                    <div className="search-btn">
                                    <input style={{ border:"none" }} className="navBtn" type="search" name="search" placeholder="Type any keywords..." />
                                        <i className="fa fa-search" type="submit" aria-hidden="true" />
                                    </div>
                                </div>
                                {/* Nav End */}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        );
}




