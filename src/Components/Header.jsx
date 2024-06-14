import React from 'react'

const Header = () => {
    return (
        <>
            <div className="phStickyWrap">
                {/* pageHeader */}
                <header id="pageHeader" className="bg-white">
                    <div className="hdTopBar py-2 py-xl-3 bg-dark d-none d-md-block">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-9 col-lgwd-8">
                                    <div className="topNews d-flex align-items-center overflow-hidden">
                                        <div className="cityNewsSlider w-100">
                                            <div className='text-white'>
                                                <i className="icn fa fa-envelope mr-2" /> loreto@info.com
                                                <i className="icn fa fa-phone ml-2" /> +91 - 9874562310
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
                    <div className="hdFixerWrap py-2 py-md-3 py-xl-5 sSticky bg-white">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light p-0">
                                <div className="logo flex-shrink-0 mr-3 mr-xl-8 mr-xlwd-16">
                                    <a href="home.html">
                                        <img src="https://loreto.in/assets/images/home/logo.png" className="img-fluid" alt="egovt" />
                                    </a>
                                </div>
                                <div className="hdNavWrap flex-grow-1 d-flex align-items-center justify-content-end">
                                    <div
                                        className="collapse navbar-collapse pageMainNavCollapse mt-2 mt-md-0"
                                        id="pageMainNavCollapse"
                                    >
                                        <ul className="navbar-nav mainNavigation">
                                            <li className="nav-item dropdown ddohOpener">
                                                <a
                                                    className="nav-link"
                                                    href="/"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item dropdown ddohOpener">
                                                <a
                                                    className="nav-link dropdown-toggle dropIcn"
                                                    href="/"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    About Us
                                                </a>
                                                <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                                                    <ul className="list-unstyled mb-0 hdDropdownList">
                                                        <li>
                                                            <a className="dropdown-item" href="history.html">
                                                                History
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="becomeVolunteer.html"
                                                            >
                                                                Become Volunteer
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="donateNow.html">
                                                                Donate Now
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="about.html">
                                                                About
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="faq.html">
                                                                FAQ
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="coming-soon.html">
                                                                Coming Soon
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-submenu">
                                                            <a
                                                                href="/"
                                                                className="dropdown-item dropdown-toggle dropIcn"
                                                                role="button"
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                Causes
                                                            </a>
                                                            <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                                                                <ul className="list-unstyled mb-0 hdDropdownList">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="causesList.html"
                                                                        >
                                                                            Causes List
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="causeSingle.html"
                                                                        >
                                                                            Causes Detail
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="causesAllItemsLoaded.html"
                                                                        >
                                                                            Causes AllitemsLoaded
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="causesGridFourColumn.html"
                                                                        >
                                                                            Causes Four Grid
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="causesGridThreeColumn.html"
                                                                        >
                                                                            Causes Three Grid
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="causesGridSidebar.html"
                                                                        >
                                                                            Causes Grid Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown ddohOpener">
                                                <a
                                                    className="nav-link dropdown-toggle dropIcn"
                                                    href="/"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Spirituality & Charism
                                                </a>
                                                <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                                                    <ul className="list-unstyled mb-0 hdDropdownList">
                                                        <li className="dropdown-submenu">
                                                            <a
                                                                href="/"
                                                                className="dropdown-item dropdown-toggle dropIcn"
                                                                role="button"
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                Causes
                                                            </a>
                                                            <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                                                                <ul className="list-unstyled mb-0 hdDropdownList">
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="causesList.html"
                                                                        >
                                                                            Causes List
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="causeSingle.html"
                                                                        >
                                                                            Causes Detail
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="causesAllItemsLoaded.html"
                                                                        >
                                                                            Causes AllitemsLoaded
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="causesGridFourColumn.html"
                                                                        >
                                                                            Causes Four Grid
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="causesGridThreeColumn.html"
                                                                        >
                                                                            Causes Three Grid
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="causesGridSidebar.html"
                                                                        >
                                                                            Causes Grid Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="departmentsSingle.html"
                                                            >
                                                                Departments Detail
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown ddohOpener">
                                                <a
                                                    className="nav-link dropdown-toggle dropIcn"
                                                    href="/"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Mission
                                                </a>
                                                <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                                                    <ul className="list-unstyled mb-0 hdDropdownList">
                                                        <li>
                                                            <a className="dropdown-item" href="eventsList.html">
                                                                Events List
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="eventsGrid.html">
                                                                Events Grid
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="eventsGridSidebar.html"
                                                            >
                                                                Events Grid Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="eventSingle.html">
                                                                Events Detail
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown ddohOpener">
                                                <a
                                                    className="nav-link dropdown-toggle dropIcn"
                                                    href="/"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Loreto Global
                                                </a>
                                                <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                                                    <ul className="list-unstyled mb-0 hdDropdownList">
                                                        <li>
                                                            <a className="dropdown-item" href="newsClassic.html">
                                                                News Classic
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="newsGridLarge.html">
                                                                News Grid Large
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="newsGridSmall.html">
                                                                News Grid Small
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="newsGridSidebar.html"
                                                            >
                                                                News Grid Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="newsSingle.html">
                                                                News single
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown ddohOpener">
                                                <a
                                                    className="nav-link dropdown-toggle dropIcn"
                                                    href="/"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Newsletter
                                                </a>
                                                <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                                                    <ul className="list-unstyled mb-0 hdDropdownList">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="portfolioClassic.html"
                                                            >
                                                                Portfolio Classic
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="portfolioModern.html"
                                                            >
                                                                Portfolio Modern
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="portfolioOverlay.html"
                                                            >
                                                                Portfolio Overlay
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="portfolioSingle-1.html"
                                                            >
                                                                Portfolio detail 1
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="portfolioSingle-2.html"
                                                            >
                                                                Portfolio detail 2
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="portfolioSingle-3.html"
                                                            >
                                                                Portfolio detail 3
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown ddohOpener">
                                                <a
                                                    className="nav-link dropdown-toggle dropIcn"
                                                    href="/"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    JPIC
                                                </a>
                                                <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                                                    <ul className="list-unstyled mb-0 hdDropdownList">
                                                        <li>
                                                            <a className="dropdown-item" href="contact-1.html">
                                                                Contact 1
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="contact-2.html">
                                                                Contact 2
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown ddohOpener">
                                                <a
                                                    className="nav-link dropdown-toggle dropIcn"
                                                    href="/"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Be Involved
                                                </a>
                                                <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                                                    <ul className="list-unstyled mb-0 hdDropdownList">
                                                        <li>
                                                            <a className="dropdown-item" href="contact-1.html">
                                                                Contact 1
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="contact-2.html">
                                                                Contact 2
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="hdRighterWrap d-flex align-items-center justify-content-end">
                                    <a
                                        href="contact-1.html"
                                        className="btn btn-outline-secondary bdrWidthAlter ml-3 ml-xl-6 btnHd d-none d-lg-block text-capitalize position-relative border-0 p-0"
                                        data-hover="Contact Us"
                                    >
                                        <span className="d-block btnText">Contact Us</span>
                                    </a>
                                    <button
                                        className="navbar-toggler pgNavOpener ml-2 bdrWidthAlter position-relative"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#pageMainNavCollapse"
                                        aria-controls="pageMainNavCollapse"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>

        </>
    )
}

export default Header
