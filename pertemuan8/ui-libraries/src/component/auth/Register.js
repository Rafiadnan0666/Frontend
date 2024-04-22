import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/logo.jpg";

const Register = () => {
  return (
    <section className="hero is-fullheight is-fullwidth has-background-grey-light">
      <section className="hero is-medium is-info">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <form className="box">
                <div className="field">
                  <Link to="/">
                    <img src={logo} alt="Logo" width={100} />
                  </Link>
                </div>
                <h3 className="title has-text-light mb-5">Register</h3>

                <div className="field">
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Enter Email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="field">
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="*******"
                    required
                    autoComplete="current-password"
                  />
                </div>
                <div className="field">
                  <label htmlFor="password" className="label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="*******"
                    required
                    autoComplete="current-password"
                  />
                </div>
                <div hidden className="field">
                  <label htmlFor="role" className="label">
                    Role
                  </label>
                  <input
                    type="hidden"
                    name="role"
                    className="input"
                    placeholder="Enter Role"
                    required
                  />
                </div>
                <div className="field">
                  <button
                    type="submit"
                    className="button is-primary is-fullwidth"
                  >
                    Register
                  </button>
                </div>
                <div className="field">
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Register;
