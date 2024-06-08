import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import CreateUser from './CreateUser'
import DetailCourse from './DetailsCourse'

function CourseList() {
  const [data, setData] = useState([]);
  const [showDetails,setShowDetails] = useState(false)

  const handleDetail = ()=>{
    setShowDetails(true)
  };

  useEffect(() => {
    axios.get('https://666287eb62966e20ef08eb3b.mockapi.io/Course')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu:', error);
      });
  }, []);

  return (
    <div>
      <h1>Danh sách khoá học</h1>
      <CreateUser/>

      <Table striped bordered hover>
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
        </thead>
          <tbody>
          {data.map((course) => (
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.title}</td>
            <td>{course.desc}</td>
            <td><img style={{height:"150px", width:"150px"}} src={course.image}></img></td>
            <td>
              <button className='btn btn-info' onClick={handleDetail}>Details</button>
              {showDetails && <DetailCourse />}
              <button className='btn btn-success mx-1'>Edit</button>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>

      
    </div>
  );
}

export default CourseList;
