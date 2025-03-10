import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-1.jpg";
import ProductsDropdown from "../ProductsDropdown/ProductsDropdown";

const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupClosed, setPopupClosed] = useState(false);
    const location = useLocation();

    useEffect(() => {
            setNavState(false);
    }, [location.pathname]);

    const handleNavState = () => setNavState(!navState);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!popupClosed) {
            const timeout = setTimeout(() => {
                setShowPopup(true);
            }, 30000);

            return () => clearTimeout(timeout);
        }
    }, [popupClosed]);

    const handlePopupClose = () => {
        setShowPopup(false);
        setPopupClosed(true);
    };

    const handleHomeClick = (e) => {
        if (location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);
    
    return (
        <>
            <nav className={sticky ? "nav-dark" : ""}>
                <div className="nav-brand">
                    <img src={logo} alt="RS PHARMA MACHINERY Logo" className="logo" />
                    {/* <span className="brand-text">RS PHARMA MACHINERY</span> */}
                </div>

                <ul className={`nav-link ${navState ? "open" : ""}`}>
                    <li>
                        <Link to="/" onClick={handleHomeClick}>
                            Home
                        </Link>
                    </li>
                    <ProductsDropdown />
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/BlogPage">Blog</Link>
                    </li>
                </ul>

                <div className={`menu-icon ${navState ? "open" : ""}`} onClick={handleNavState}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            {showPopup && (
                <div className="blog-popup show">
                    <p>🔥 Don't miss our latest blog updates!</p>
                    <Link to="/BlogPage" className="popup-btn">
                        Read Now
                    </Link>
                    <span className="popup-close" onClick={handlePopupClose}>
                        ✖
                    </span>
                </div>
            )}
        </>
    );
};

export default Navbar;














