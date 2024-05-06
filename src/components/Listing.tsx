import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { getData, getDummyData } from '../services/api';
import Item from './Item';

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
        {loading ? (<Button variant="success" disabled className='mx-0 my-2'>
            <Spinner
                className='me-2'
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>) : (
            <Row>
                <ListGroup className='mx-0 row justify-content-around'>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        items.map((item, index) => (
                            <Item key={index} item={item} />
                        ))
                    )}
                </ListGroup>
            </Row>
        )}
    </>);
}

export default Listing;