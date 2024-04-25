import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Layout from '../Layout';

const TableCourse = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(5);
  
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

  const indexOfLastCourse = currentPage * coursePerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`https://api.sukmax.my.id/course/${id}`);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  }

  return (
    <Layout>
      <h2 className="title">Courses</h2>
      <Link to="/course/add" className="button is-primary my-2">Add New</Link>
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
          {currentCourses.map((course, index) => (
            <tr key={course.id}>
              <td>{index + 1}</td>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td><img src={course.url} alt="" width={300}/></td>
              <td>
                <Link to={`course/edit/${course.id}`} className='button is-primary'>Edit</Link>
                <button onClick={() => {
                  if (window.confirm(`Are you sure you want to delete the course ${course.name}?`)) {
                    deleteCourse(course.id);
                  }
                }} className="button is-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <PaginationItem>
          <PaginationLink first onClick={() => paginate(1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous onClick={() => paginate(currentPage - 1)} />
        </PaginationItem>
        {[...Array(Math.ceil(courses.length / coursePerPage)).keys()].map(number => (
          <PaginationItem key={number + 1} active={number + 1 === currentPage}>
            <PaginationLink onClick={() => paginate(number + 1)}>
              {number + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink next onClick={() => paginate(currentPage + 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last onClick={() => paginate(Math.ceil(courses.length / coursePerPage))} />
        </PaginationItem>
      </Pagination>
    </Layout>
  );
};

export default TableCourse;
