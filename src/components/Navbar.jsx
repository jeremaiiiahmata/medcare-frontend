import {useContext} from 'react'
import {Link} from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import AuthContext from '../context/AuthContext'

const Navbar = () => {

  const [user, logoutUser] = useContext(AuthContext) //grave the user and logoutUser context

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-primary">

        <h3 className="mx-3 py-2 px-2 link-secondary">Medcare</h3>

      <div className="col-md-3 text-end mx-5">

        <Link to="/register">
            <button type="button" className="btn btn-primary px-3">Log out</button>
        </Link>
      </div>
    </header>
  )
}

export default Navbar