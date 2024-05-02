import React from 'react';

export default function Navbar(props) {
    return (
        <li>
            <a className="dropdown-item" href={props.link}>{props.name}</a>
        </li>
    );
}