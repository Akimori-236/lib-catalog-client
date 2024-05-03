import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function Search() {

    function handleSubmit(event) {
        event.preventDefault();
        // TODO: search api call to server
    }


    return (
        <Row>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Search"
                    className=""
                >
                    <Form.Control type="text" placeholder="" />
                </FloatingLabel>
                <Button variant="outline-success" type="submit">Search</Button>
            </Form>
        </Row>
    )
}