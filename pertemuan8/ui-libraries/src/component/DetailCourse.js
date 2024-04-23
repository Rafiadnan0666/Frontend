import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  const fetchCourse = async () => {
    try {
      const response = await axios.get(`https://api.sukmax.my.id/course/${id}`);
      setCourse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <section className="section mt-5">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <img src={course.url} alt={course.name} />
          </div>
          <div className="column">
            <div className="content">
              <div className="title is-4">{course.name}</div>
              <div className="subtitle is-6">{course.desc}</div>
              <p>{course.desc}</p>
              <p>Stock</p>
              <button className="button is-primary w-100">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCourse;
