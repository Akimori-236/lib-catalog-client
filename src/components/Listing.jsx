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

    return (<>
        <h1 className='text-danger'>Listing</h1>
        <div className='row justify-content-around'>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    </>);
}