import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Row,
} from 'reactstrap';

const CoursesCard = () => {
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
    <Row>
      {courses.map((course) => (
        <NavLink
          key={course.id}
          to={`/course/${course.id}`}
          className="col-xs-6 col-sm-4 col-md-3"
        >
          <Card color="light" className="mb-4">
            <CardImg
              top
              width="100%"
              src={course.url}
              alt={course.title}
            />
            <CardBody className="text-center">
              <CardTitle tag="h5">{course.name}</CardTitle>
              <CardText>
                <button color="primary">{course.desc}</button>
              </CardText>
            </CardBody>
          </Card>
        </NavLink>
      ))}
    </Row>
  );
};

export default CoursesCard;