import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { getYamahaListings } from '../services/api';
import Item from './Item';
import Search from './Search';

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
        <div>
            <h1 className='text-success'>Listing</h1>
            {/*  TODO: filtering and sorting */}
        </div>
        <ListGroup className='row justify-content-around'>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </ListGroup>
    </>);
}