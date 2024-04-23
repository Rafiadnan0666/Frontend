import React, { useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTrainer = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [skill, setSkill] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveTrainers = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://api.sukmax.my.id/trainer",
        {
          name: name,
          address: address,
          skill: skill,
          file: file,
        },
        // agar bisa upload file
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // redirect ke /table-trainer",
      navigate("/table-trainers",);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <h2 className="title">trainers",</h2>
      <h3 className="subtitle">Add New trainers",</h3>
      <form onSubmit={saveTrainers}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Masukkan nama trainers"onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label">Trainer ID</label>
          <div className="control">
            <input className="input" type="text" onChange={(e) => setAddress(e.target.value)} placeholder="Masukkan trainer id" />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea className="textarea" onChange={(e) => setSkill(e.target.value)}></textarea>
          </div>
        </div>
        <div class="file">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" onChange={loadImage} />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> Choose a file… </span>
            </span>
          </label>
        </div>
        {preview ? (
          <figure className="image is-128x128 mb-5">
            <img src={preview} alt="preview-img" />
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

export default AddTrainer;