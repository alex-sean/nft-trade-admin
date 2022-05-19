import React from 'react';

const SideBar = () => {
    return (
        <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
            <div className="sidebar-mobile-toggler text-center">
                <a href="#" className="sidebar-mobile-main-toggle">
                    <i className="icon-arrow-left8"></i>
                </a>
                メニュー
                <a href="#" className="sidebar-mobile-expand">
                    <i className="icon-screen-full"></i>
                    <i className="icon-screen-normal"></i>
                </a>
            </div>
            <div className="sidebar-content">
                <div className="card card-sidebar-mobile">
                    <ul className="nav nav-sidebar" data-nav-type="accordion">
                        <li className="nav-item">
                            <a href="/" className="nav-link active">
                                <i className="fas fa-user"></i>
                                <span>Users</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/tokens" className="nav-link">
                                <i className="fas fa-coins"></i>
                                <span>Tokens</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/posts" className="nav-link">
                                <i class="fas fa-sticky-note"></i>
                                <span>Posts</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/contacts" className="nav-link">
                                <i class="fas fa-envelope"></i>
                                <span>Contacts</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/partners" className="nav-link">
                                <i className="fas fa-users"></i>
                                <span>Partners</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;