import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import Layout from '../Layout';

const TableTrainer = () => {
  const [trainers, setTrainers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('https://api.sukmax.my.id/trainer');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };

    fetchTrainers();
  }, []);

    const deleteTrainer = async (id) => {
    try {
      await axios.delete(`https://api.sukmax.my.id/trainer/${id}`);
      navigate("/")
    } catch (error) {
      console.error('Error deleting Trainer:', error);
    }
  }

  return (
    <Layout>
      <h2 className="title">Trainers</h2>
      <Link to={"/trainer/add"} className="button is-primary my-2">Add New</Link>
      <Table className="table-trainer">
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
          {trainers.map((trainer, index) => (
            <NavLink key={trainer.id} to={`/trainer/${trainer.id}`}>
              <tr>
                <td>{index + 1}</td>
                <td>{trainer.name}</td>
                <td>{trainer.adress}</td>
                <td>{trainer.skill}</td>
                <td><img src={trainer.url} alt="" width={300}/></td>
                <td>
                  <Link to={`/trainer/edit/${trainer.id}`} className='button is-primary' variant="primary">Edit</Link>{" "}
                   <button onClick={() => {
                  if (window.confirm(`Are you sure you want to delete the course ${trainer.name}?`)) {
                    deleteTrainer(trainer.id);
                  }
                }} className="button is-danger">Delete</button>
                </td>
              </tr>
            </NavLink>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
};

export default TableTrainer;