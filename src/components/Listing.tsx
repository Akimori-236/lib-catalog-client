import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { getDummyData, getData } from '../services/api';
import Item from './Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyPagination from './MyPagination';

const Listing = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 10
    const [loading, setLoading] = useState(true);

    let offset = currentPage * limit - limit;
    let pages = Math.ceil(total / limit);

    useEffect(() => {
        setLoading(true);
        getData(limit, offset, (result: any) => {
            console.log(result.data);
            setItems(result.data);
            setTotal(result.total);
            setLoading(false);
        });
    }, [currentPage]);

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
                {loading ? (
                    <div>Loading...</div>
                    // spinner
                ) : (
                    items.map((item, index) => (
                        <Item key={index} item={item} />
                    ))
                )}
            </ListGroup>
            {/* </Col> */}
            {/* <ColclassName='border'> */}
            {/* TODO: display details and playback of selected item, component here?
                need to default select first item in list on initial load */}
            {/* </Col> */}
        </Row>
    </>);
}

export default Listing;