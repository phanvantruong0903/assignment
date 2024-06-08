import { useState } from "react";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function DetailCourse() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Details
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{course.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>ID: {course.id}</p><br></br>
                    <p>Title: {course.title}</p>
                    <p>Description: {course.desc}</p>
                    <p>Number of week: {course.number_of_weeks}</p>
                    <p>Start date: {course.Start_date}</p>
                    <p>Active{course.active}</p>
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

