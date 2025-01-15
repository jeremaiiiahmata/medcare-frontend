import React from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import {useState, useContext} from 'react'

const RegisterForm = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidator, setPasswordValidator] = useState("");

  const { registerUser } = useContext(AuthContext)

  console.log(`Email : ${email}`);
  console.log(`Username : ${username}`);
  console.log(`Password : ${password}`);
  console.log(`Confirm Password : ${passwordValidator}`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(email, username, password, passwordValidator)
  }
  

  return (
    <div className="container-fluid vh-100">
    <div className="row h-100">
      
      <div className="col-6 col-md-6 d-flex align-items-center justify-content-center">
        <div className="card shadow p-4 form-primary" style={{ width: "100%", maxWidth: "400px" }}>
          <h3 className="text-center mb-4">Register</h3>
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                onChange={e => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordValidator"
                placeholder="Confirm your password"
                onChange={e => setPasswordValidator(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
            <Link to="/login">
              <p className='my-3 py-1'>Already have an account? Log in here.</p>
            </Link>
          </form>
        </div>
      </div>

      <div className="col-6 col-md-6 p-0">
        <img
          src="../../public/images/placeholder.jpg"
          alt="Description"
          className="img-fluid vh-100 w-100 shadow"
          style={{ objectFit: "cover" }}
        />
      </div>

    </div>
  </div>
  )
}

export default RegisterForm