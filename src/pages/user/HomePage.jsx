import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const HomePage = () => {
  return (
    <>
    <div className="card shadow p-4 form-primary" style={{ width: "100%", maxWidth: "400px" }}>
      <Link to="/login">
          <button type="button" className="btn btn-primary px-3 mx-1">Log in</button>
        </Link>
            
        <Link to="/register">
          <button type="button" className="btn btn-primary px-3 mx-1">Register</button>
        </Link>
    </div>
    </>
     
  )
}

export default HomePage