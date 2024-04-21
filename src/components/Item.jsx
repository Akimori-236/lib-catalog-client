import React from 'react';

export default function Item(props) {
    return (
            <div className='card col-sm-6 col-md-4 col-lg-3 m-3'>
                {/* <td>{props.key}</td> */}
                <h4>{props.item.title}
                    <span className='badge text-bg-info'>{props.item.price}</span>
                </h4>
                {/* <td>{props.item.image}</td> */}
                <td>{props.item.publisher}</td>

                <a href={props.item.link} className='btn btn-primary'>Shop</a>
            </div>
    );
}