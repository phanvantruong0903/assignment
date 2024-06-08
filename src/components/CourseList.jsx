import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import CreateUser from './CreateUser'
import DetailCourse from './DetailsCourse'
import Delete from './DeleteItem';
import EditCourse from './EditCourse';

function CourseList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://666287eb62966e20ef08eb3b.mockapi.io/Course')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu:', error);
      });
  }, [data]);

  return (
    <div>
      <h1>Danh sách khoá học</h1>
      <CreateUser />

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
              <td><img style={{ height: "150px", width: "150px" }} src={course.image}></img></td>
              <td>
                <DetailCourse
                  id={course.id}
                  title={course.title}
                  desc={course.desc}
                  number_of_weeks={course.number_of_weeks}
                  Start_date={course.Start_date}
                />
                <EditCourse
                  id={course.id}
                  title={course.title}
                  desc={course.desc}
                  number_of_week={course.number_of_weeks}
                  Start_date={course.Start_date}
                />
                <Delete
                  id={course.id}
                  title={course.title}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


    </div>
  );
}

export default CourseList;
