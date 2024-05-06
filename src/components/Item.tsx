import { useEffect, useState } from 'react';
import { Badge, ListGroup } from 'react-bootstrap';

const Item = (props: any) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <ListGroup.Item
            action
            onClick={handleShow}
            className="d-flex justify-content-between align-items-start">
            <a className="text-decoration-none text-reset ms-2 me-auto">
                {props.item.title ? <h6>{props.item.title}</h6> : null}
                {/* <br /> */}
                {/* <div>{props.item.publisher}</div> */}
            </a>

            <div className='ms-auto me-2'>
                {props.item.price ? <Badge pill bg="danger" className='my-2'>{props.item.price}</Badge> : null}
                <br />
                {/* <a href={props.item.link} className='btn btn-primary my-2'>Shop</a> */}
            </div>
        </ListGroup.Item>
    );
}

export default Item;