import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="menu-button"></div>
                <span className="header-title">CONCEPT</span>
                <nav>
                    <ul className="nav-items">
                        <li className="active-link">Dashboard</li>
                        <li>Activities</li>
                        <li>Badges</li>
                        <li>Calendar</li>
                        <li>Connections</li>
                        <li>Devices</li>
                    </ul>
                    {/* <div className="personalDetails">
                        <img className="profilePicture" alt="" />
                        <p className="personName">Tyler Wain</p>
                        <p className="personPosition">UI Designer - Austin, TX</p>
                    </div> */}
                </nav>
            </header>
        )
    }
}
