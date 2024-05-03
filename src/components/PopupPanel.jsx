import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

export default function PopupPanel(props) {
    const breakpoint = 'sm-down'
    const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
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