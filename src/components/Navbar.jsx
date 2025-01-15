import {useContext} from 'react'
import {Link} from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import AuthContext from '../context/AuthContext'

const Navbar = () => {

  //grab the user and logoutUser context
  const {user, logoutUser} = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");

  if (token) {
    const decoded = jwtDecode(token)
    let user_id = decoded.user_id
  }

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-primary">

        <h3 className="mx-3 py-2 px-2 link-secondary">Medcare</h3>

      <div className="col-md-3 text-end mx-5">

      {token === null &&
      <>
        <Link to="/login">
          <button type="button" className="btn btn-primary px-3 mx-1">Log in</button>
        </Link>
        
        <Link to="/register">
          <button type="button" className="btn btn-primary px-3 mx-1">Register</button>
        </Link>
      </>
      } 

      {token !== null &&

          <button type="button" className="btn btn-primary px-3" onClick={logoutUser}>Log out</button>
      
      }
        
      </div>
    </header>
  )
}

export default Navbar