import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { getYamahaListings } from '../services/api';
import Item from './Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

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
        <Row>
            <Col>
                <Pagination>
                    {/* TODO: pagination */}
                    <Pagination.Prev />
                    <Pagination.Item />
                </Pagination>
                <ListGroup className='row justify-content-around'>
                    {items.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                </ListGroup>
            </Col>
            <Col>
                {/* TODO: display details and playback of selected item, component here?
                need to default select first item in list on initial load */}
            </Col>
        </Row>
    </>);
}