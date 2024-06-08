import React from 'react';
import { Modal } from 'react-bootstrap'; 


const CourseItem = ({ course, onClick }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="course-item" onClick={handleShow}>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{course.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{course.title}</p>
          <p>{course.desc}</p>
          <p>{course.number_of_weeks}</p>
          <p>{course.Start_date}</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CourseItem;