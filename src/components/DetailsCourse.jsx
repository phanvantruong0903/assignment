import { useState } from "react";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function DetailCourse(props) {
    const {id, title, desc, number_of_weeks, Start_date} = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow}>
                Details
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Details </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>ID: {id}</p>
                    <p>Title: {title}</p>
                    <p>Description: {desc}</p>
                    <p>Number of week: {number_of_weeks}</p>
                    <p>Start date: {Start_date}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DetailCourse;

