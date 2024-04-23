import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import Layout from '../Layout';

const TableCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://api.sukmax.my.id/course');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Layout>
      <h2 className="title">Courses</h2>
      <Link to={"/course/add"} className="button is-primary my-2">Add New</Link>
      <Table className="table-course">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <NavLink key={course.id} to={`/course/${course.id}`}>
              <tr>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td><img src={course.url} alt="" width={300}/></td>
                <td>
                  <Button variant="primary">Edit</Button>{" "}
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            </NavLink>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
};

export default TableCourses;