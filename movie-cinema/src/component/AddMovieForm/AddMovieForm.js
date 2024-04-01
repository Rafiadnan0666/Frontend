import React, { useState } from "react";
import "./AddMovieForm.css";

const AddMovieForm = ({onAddMovie}) => {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    image: "",
    genre: "",
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({
        ...formData,
        [name]:value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(formData);
  }

  return (
    <div className="container">
      <section class="form">
        <div class="form-left">
          <img
            src="https://picsum.photos/200"
            alt="img-form"
            className="form-image"
          />
        </div>
        <div class="form-right">
          <h1 className="form-title">Add Movie</h1>
          <form onSubmit={handleSubmit}>
            <div class="form-inputgroup">
              <label htmlfor="title" className="form-label">
                Title
              </label>
              <input
                className="form-input"
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
              />
            </div>
            <div class="form-inputgroup">
              <label htmlfor="year" className="form-label">
                Year
              </label>
              <input
                className="form-input"
                type="number"
                name="year"
                id="year"
                onChange={handleChange}
              />
            </div>
            <div class="form-inputgroup">
              <label htmlfor="genre" className="form-label">
                Genre
              </label>
              <select className="form-input" name="genre" onChange={handleChange} id="genre">
                <option value="action">Action</option>
                <option value="horror">Horror</option>
                <option value="drama">Drama</option>
                <option value="romance">Romance</option>
                <option value="comedy">Comedy</option>
              </select>
            </div>
            <div class="form-inputgroup">
              <label htmlfor="poster" className="form-label">
                Image
              </label>
              <input
                className="form-input"
                type="text"
                name="poster"
                id="poster"
                onChange={handleChange}
              />
            </div>
            <button className="form-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
