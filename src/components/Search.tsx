import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function Search() {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // TODO: search api call to server
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className='m-0 p-0'>
                    <Form.Control type="text" placeholder="Search" />
                </Col>
                <Col className='m-0 p-0'>
                    <Button variant="outline-success" type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    )
}