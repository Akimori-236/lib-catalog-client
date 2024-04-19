import React from 'react';

export default function Item(props) {
    return (
        <tr>
            <td>{props.key}</td>
            <td>{props.item.title}</td>
            <td>{props.item.image}</td>
            <td>{props.item.publisher}</td>
            <td>{props.item.price}</td>
            <td>{props.item.link}</td>
        </tr>
    );
}