import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTrainer = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [skill, setSkill] = useState('');
  const [file, setFile] = useState('');
  const [preview, setPreview] = useState('');
  const navigate = useNavigate();
  const [fileURL, setFileURL] = useState('');
  const { id } = useParams();

const loadImage = (e) => {
  const image = e.target.files[0];
  setFile(image);
  setFileURL(URL.createObjectURL(image)); 
};
  const updateTrainer = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('skill', skill);
    formData.append('file', file);

    try {
      await axios.put(`https://api.sukmax.my.id/trainer/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/table-trainer');
    } catch (error) {
      console.log(error);
    }
  };

  const getTrainerById = async () => {
    const response = await axios.get(`https://api.sukmax.my.id/trainer/${id}`);
    setName(response.data.name);
    setAddress(response.data.address);
    setFile(response.data.url);
    setSkill(response.data.skill);
  };

  useEffect(() => {
    getTrainerById();
  }, []);

  return (
    <Layout>
      <h2 className="title">Update Trainer</h2>
      <h3 className="subtitle">Add New Trainer</h3>
      <form onSubmit={updateTrainer}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={name}
              placeholder="Enter trainer's name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Address</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter trainer's address"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Skill</label>
          <div className="control">
            <textarea
              className="textarea"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="Enter trainer's skill"
            />
          </div>
        </div>
        <div className="file">
          <label className="file-label">
            <input
              className="file-input"
              type="file"
              name="resume"
              onChange={loadImage}
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload" />
              </span>
              <span className="file-label">Choose a file…</span>
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

        <div className="field is-grouped mt-5">
          <div className="control">
            <button type="submit" className="button is-link">
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default EditTrainer;