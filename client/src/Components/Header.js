import React from "react";
import { Link, useHistory } from "react-router-dom";
import ScriptTag from 'react-script-tag';



export default function Header() {

    const history = useHistory();

    const handleTest = (e) => {
        if (e.key === 'Enter') {
        window.location.reload(false);
        }
    }

    const doSearch = (e) => {
        if (e.target.value === "")
            history.push('/');
        else
         //   history.push('/search?q=recipe/' + e.target.value);
            history.push('/search?q=' + e.target.value);
    }

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
                            <Link className="nav-brand" to="/"><img src="img/core-img/easyCookLogo.png" alt="" /></Link>
                            {/* Menu */}
                            <div className="classy-menu">
                                {/* close btn */}
                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                                </div>
                                {/* Nav Start */}
                                <div className="classynav">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/recipes">Recipes</Link></li>
                                        <li><Link to="/cookingTerms">Cooking Terms</Link></li>
                                        {/* <li><Link to="/categories">Categories</Link></li> */}
                                    </ul>
                                    {/* Newsletter Form */}
                                    <div className="search-btn" style={{ marginLeft: "70px", marginTop: "-20px" }} >
                                        <input style={{ border: "none" }} className="navBtn" type="search" name="search" placeholder="Type any keywords..." onKeyPress={handleTest} onChange={doSearch} />
                                        <i className="fa fa-search" type="submit" aria-hidden="true" />
                                    </div>
                                    <button id="adminBtn" className="btn adminBtn" style={{ backgroundColor: "#40ba37", color: "white", fontweight: "600", textTransform: "uppercase", marginLeft: "8px" }} >Admin</button>
                                </div>
                                {/* Nav End */}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <ScriptTag type="text/javascript" src="../js/admin.js" />
        </header>
    );
}




