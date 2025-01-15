import React from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import { useState, useContext } from 'react'

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {loginUser} = useContext(AuthContext)

  console.log(email)
  console.log(password)
  const handleSubmit = async (e) => {

    e.preventDefault(); //prevents refreshing the page

    if (email.length > 0 ){
      loginUser(email, password); //call the loginUser, passing email and password
    }

    console.log(`${email}`)
    console.log(`${password}`)
    console.log("Login form submitted.")
  }


  return (
    <div className="container-fluid vh-100">
    <div className="row h-100">
      
      <div className="col-5 col-md-5 p-0">
        <img
          src="../../public/images/placeholder.jpg"
          alt="Description"
          className="img-fluid vh-100 w-100 shadow"
          style={{ objectFit: "cover" }}
        />
      </div>

      
      <div className="col-6 col-md-6 d-flex align-items-center justify-content-center">
        <div className="card shadow p-4 form-primary" style={{ width: "100%", maxWidth: "400px" }}>
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <Link to="/register">
              <p className='my-3 py-1'>Don't have an account? Sign up here.</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoginForm