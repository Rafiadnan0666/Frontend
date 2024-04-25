import React, { useState } from "react";
import "bulma/css/bulma.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };
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
                <h3 className="title has-text-light mb-5">Login</h3>

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
                  <button
                    type="submit"
                    className="button is-primary is-fullwidth"
                  >
                    Login
                  </button>
                </div>
                <div className="field">
                  <p>
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary">
                      Register
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

export default Login;
