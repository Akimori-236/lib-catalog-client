import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const PopupPanel = (props: any) => {
    const breakpoint = 'sm-down'
    const [fullscreen, setFullscreen] = useState("md-down");
    const [show, setShow] = useState(false);

    function handleShow(breakpoint: any) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    return (
        <>
            <Button className="me-2 mb-2" onClick={() => handleShow(breakpoint)}>
                {props.name}
            </Button>

            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
        </>
    );
}

export default PopupPanel;