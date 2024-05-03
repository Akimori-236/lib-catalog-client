import React from 'react';

export default function Item(props) {
    return (
        <div className='card col-sm-6 col-md-4 col-lg-3 m-3'>
            {/* <td>{props.key}</td> */}
            <h4>{props.item.title}
                <div className='ms-auto'>
                    <span className='badge text-bg-info '>{props.item.price}</span>
                </div>
            </h4>
            {/* <td>{props.item.image}</td> */}
            <div>{props.item.publisher}</div>

            <div className='ms-auto mt-auto mb-2 me-0'>
                <a href={props.item.link} className='btn btn-primary'>Shop</a>
            </div>
        </div>
    );
}