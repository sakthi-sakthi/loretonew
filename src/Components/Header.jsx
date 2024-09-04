import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Banner from './Banner';

const Header = ({ menudata }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleMenuClick = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    const handleSubMenuClick = (index) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };

    const location = useLocation();
    const url = location.pathname;

    return (
        <div className="phStickyWrap">
            <header id="pageHeader" className="bg-white">
                <div className="hdTopBar py-2 py-xl-3 bg-dark d-none d-md-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-9 col-lg-8">
                                <div className="topNews d-flex align-items-center overflow-hidden">
                                    <div className="cityNewsSlider w-100">
                                        <div className='text-white'>
                                            <i className="icn fa fa-envelope mr-2" /><a href='mailto:provsecsa@loreto.in' className="social-links">provsecsa@loreto.in</a>
                                            <i className="icn fa fa-phone ml-4 mr-2" /><a href="tel:033-4006 1156" className="social-links">033-4006 1156</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 col-lg-4">
                                <ul className="list-unstyled socialNetworks hdSocialNetworks d-flex justify-content-end flex-wrap mb-0">
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-facebook-square">
                                                <span className="sr-only">Facebook</span>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-twitter">
                                                <span className="sr-only">Twitter</span>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-instagram">
                                                <span className="sr-only">Instagram</span>
                                            </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hdFixerWrap py-2 py-md-3 py-xl-5 sSticky bg-white d-block d-lg-none"></div>
                <Banner />
                <div className="hdFixerWrap py-2 py-md-3 py-xl-5 sSticky bg-white d-none d-md-block">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light p-0">
                            <div className="hdNavWrap flex-grow-1 d-flex align-items-center justify-content-center">
                                <div className="collapse navbar-collapse pageMainNavCollapse mt-2 mt-md-0" id="pageMainNavCollapse">
                                    <ul className="navbar-nav mainNavigation">
                                        {menudata?.map((menuItem, index) => (
                                            <li key={index} className={`nav-item dropdown ${menuItem.children ? 'ddohOpener' : ''}`}>
                                                <Link
                                                    to={menuItem.url}
                                                    className={`nav-link ${menuItem.children ? 'dropdown-toggle dropIcn' : ''}`}
                                                    onClick={() => handleMenuClick(index)}
                                                    aria-expanded={activeMenu === index}
                                                >
                                                    {menuItem.label}
                                                </Link>
                                                {menuItem.children && (
                                                    <Collapse in={activeMenu === index}>
                                                        <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                                                            <ul className="list-unstyled mb-0 hdDropdownList">
                                                                {menuItem.children.map((subItem, subIndex) => (
                                                                    <li key={subIndex} className={`dropdown-submenu ${subItem.subchildren ? 'menu-item-has-children' : ''}`}>
                                                                        <Link
                                                                            to={subItem.url}
                                                                            className="dropdown-item"
                                                                            onClick={() => handleSubMenuClick(subIndex)}
                                                                        >
                                                                            {subItem.label}
                                                                            {subItem.subchildren && (
                                                                                <i className="dropdown-toggle dropIcn"></i>
                                                                            )}
                                                                        </Link>
                                                                        {subItem.subchildren && (
                                                                            <Collapse in={activeSubMenu === subIndex}>
                                                                                <ul className="dropdown-menu hdMainDropdown desktopDropOnHover">
                                                                                    {subItem.subchildren.map((childSubItem, childSubIndex) => (
                                                                                        <li key={childSubIndex} className="menu-item">
                                                                                            <Link to={childSubItem.url} className="dropdown-item">
                                                                                                {childSubItem.label}
                                                                                            </Link>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </Collapse>
                                                                        )}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </Collapse>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <ul className="nav-mobile">
                    <li></li>
                    <li className="menu-container">
                        <input id="menu-toggle" type="checkbox" />
                        <label htmlFor="menu-toggle" className="menu-button">
                            <svg className="icon-open" viewBox="0 0 24 24">
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                            </svg>
                        </label>
                        <ul className="menu-sidebar">
                            {menudata?.map((menuItem, index) => (
                                <li key={index}>
                                    {menuItem.children ? (
                                        <>
                                            <input type="checkbox" id={`sub-menu-${index}`} className="submenu-toggle" />
                                            <label htmlFor={`sub-menu-${index}`} className={`menu-item-label ${menuItem.children.some(child => url.includes(child.url)) ? "activemain" : ""}`}>
                                                {menuItem.label}
                                                <i className="fa fa-angle-down" style={{ marginLeft: "5px" }} />
                                            </label>
                                            <ul className="menu-sub">
                                                <li className="menu-sub-title">
                                                    <label className="submenu-label" htmlFor={`sub-menu-${index}`}>
                                                        Back
                                                    </label>
                                                    <div className="arrow left">‹</div>
                                                </li>
                                                {menuItem.children?.map((subItem, subIndex) => (
                                                    <li key={subIndex} className={`menu-sub-title ${url === subItem.url ? "active" : ""}`}>
                                                        <Link to={subItem.url} className="nav-link">
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link to={menuItem.url} className={`${url === menuItem.url ? "activemain" : ""}`}>
                                            {menuItem.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
        </div>
    );
};

export default Header;
