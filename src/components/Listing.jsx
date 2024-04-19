import React, { useState, useEffect } from 'react';
import Item from './Item';
import { getYamahaListings } from '../services/api';

export default function Listing() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        let mounted = true;
        getYamahaListings().then(items => {
            if (mounted) {
                setItems(items)
            }
        })
        return () => mounted = false;
    }, [])

    // TODO: add toggle to switch between table and cards view

    return (<>
        <h1>Listing</h1>
        <table>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </table>
    </>);
}