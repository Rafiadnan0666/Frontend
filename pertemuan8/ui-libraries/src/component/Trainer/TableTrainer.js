import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import Layout from '../Layout';

const TableTrainer = () => {
  const [trainers, setTrainers] = useState([]);

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

export default TableTrainer;