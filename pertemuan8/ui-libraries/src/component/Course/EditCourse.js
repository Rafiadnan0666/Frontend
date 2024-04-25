import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCourse = () => {
  const [name, setName] = useState("");
  const [trainerId, setTrainerId] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const [fileURL, setFileURL] = useState(""); 
  const { id } = useParams();
const loadImage = (e) => {
  const image = e.target.files[0];
  setFile(image);
  setFileURL(URL.createObjectURL(image)); 
};


  const updateCourse = async (e) => {
     e.preventDefault();
    try {
      await axios.put(
        `https://api.sukmax.my.id/course/${id}`,
        {
          name: name,
          trainer_id: trainerId,
          desc: desc,
          file: file,
        },
        // agar bisa upload file
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // redirect ke /table-courses
      navigate("/table-courses");
    } catch (error) {
      console.log(error);
    }
  };

  const getCourseById = async () => {
    const response = await axios.get(`https://api.sukmax.my.id/course/${id}`);
    setName(response.data.name);
    setTrainerId(response.data.trainer_id);
    setFile(response.data.url);
    setDesc(response.data.desc);
  };

  useEffect(() => {
    getCourseById();
  }, []);
  return (
    <Layout>
      <h2 className="title">updateCourse</h2>
      <h3 className="subtitle">Add New updateCourse</h3>
      <form onSubmit={updateCourse}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={name}
              placeholder="Masukkan nama course"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Trainer ID</label>
          <div className="control">
            <input
              className="input"
              value={trainerId}
              type="text"
              onChange={(e) => setTrainerId(e.target.value)}
              placeholder="Masukkan trainer id"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            ></textarea>
          </div>
        </div>
        <div class="file">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              name="resume"
              onChange={loadImage}
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> Choose a file… </span>
            </span>
          </label>
        </div>
        {file ? (
          <figure className="image is-128x128 mb-5">
            <img src={file} alt="preview-img" />
          </figure>
        ) : (
          ""
        )}
        <div class="field is-grouped mt-5">
          <div class="control">
            <button type="submit" class="button is-link">
              Submit
            </button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default EditCourse;
