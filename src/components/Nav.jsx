import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import NavItem from './NavItem';

export default function Navbar(props) {
    const links = [{
        name: "test", link: "/test"
    }, {
        name: "test2", link: "/test2"
    }]
    return (
        <nav className="navbar navbar-expand-xl">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li><DarkModeToggle /></li>
                        {links.map((link, index) => {
                            return <NavItem key={index} name={link.name} link={link.link} />
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}