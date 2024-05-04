import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { getDummyData, getData } from '../services/api';
import Item from './Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyPagination from './MyPagination';

export default function Listing() {
    const limit = 10
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(100);

    let offset = currentPage * limit - limit;
    let pages = Math.ceil(total / limit);

    useEffect(() => {
        getData(limit, offset)
            .then(body => {
                setTotal(body['total']);
                setItems(body['data']);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });


    }, [currentPage]);

    //////////
    return (<>
        <div>
            <h1 className='text-success'>Listing</h1>
            {/*  TODO: filtering and sorting */}
        </div>
        <Row>
            <MyPagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Row>
        <Row >
            {/* <Col> */}

            <ListGroup className='row justify-content-around'>
                {items.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </ListGroup>
            {/* </Col> */}
            {/* <ColclassName='border'> */}
            {/* TODO: display details and playback of selected item, component here?
                need to default select first item in list on initial load */}
            {/* </Col> */}
        </Row>
    </>);
}