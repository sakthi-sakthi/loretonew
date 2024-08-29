import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

    return (
        <div className="phStickyWrap">
            <header id="pageHeader" className="bg-white">
                <div className="hdTopBar py-2 py-xl-3 bg-dark d-md-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-9 col-lgwd-8">
                                <div className="topNews d-flex align-items-center overflow-hidden">
                                    <div className="cityNewsSlider w-100">
                                        <div className='text-white'>
                                            <i className="icn fa fa-envelope mr-2" /> provsecsa@loreto.in
                                            <i className="icn fa fa-phone ml-4 mr-2" />033-4006 1156
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 col-lgwd-4">
                                <ul className="list-unstyled socialNetworks hdSocialNetworks d-flex justify-content-end flex-wrap mb-0">
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-facebook-square">
                                                <span className="sr-only">facebook</span>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-twitter">
                                                <span className="sr-only">twitter</span>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-instagram">
                                                <span className="sr-only">instagram</span>
                                            </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Banner />
                <div className="hdFixerWrap py-2 py-md-3 py-xl-5 sSticky bg-white">
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
        </div>
    );
};

export default Header;
