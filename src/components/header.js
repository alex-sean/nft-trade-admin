import React from 'react';

const Header = () => {
    return (
        <div className="navbar navbar-expand-md navbar-light">
            <div className="navbar-header navbar-dark d-none d-md-flex align-items-md-center">
                <div className="navbar-brand navbar-brand-md">
                    <a href="index.html" className="d-inline-block">
                        <img src="assets/images/logo.png" style={{width: "156px", height: '46px'}} alt=""/>
                    </a>
                </div>
                <div className="navbar-brand navbar-brand-xs">
                    <a href="index.html" className="d-inline-block">
                        <img src="assets/images/logo-icon.png" style={{width: "48", height: '48'}} alt=""/>
                    </a>
                </div>
            </div>
            <div className="d-flex flex-1 d-md-none">
                <div className="navbar-brand mr-auto">
                    <a href="index.html" className="d-inline-block">
                        <img src="assets/images/logo-color.png" style={{width: "156px", height: '46px'}} alt=""/>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
                    <i className="icon-tree5"></i>
                </button>
                <button className="navbar-toggler sidebar-mobile-main-toggle" type="button">
                    <i className="icon-paragraph-justify3"></i>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbar-mobile">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
                            <i className="icon-paragraph-justify3"></i>
                        </a>
                    </li>
                </ul>
                <span className="badge bg-danger ml-md-3 mr-md-auto" style={{display: 'none'}}>Not connected</span>
                <span className="badge bg-success ml-md-3 mr-md-auto">Connected</span>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown dropdown-user">
                        <a href="#" className="navbar-nav-link d-flex align-items-center  dropdown-toggle"
                            data-toggle="dropdown">
                            <i className="fas fa-users-cog mr-1 fa-lg "></i>
                            <span>My Wallet</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" ><i className="icon-link"></i> Connect to wallet</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;