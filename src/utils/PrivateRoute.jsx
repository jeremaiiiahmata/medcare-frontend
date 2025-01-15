import { Route, Redirect } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"

//checks if the user is present. if present, pass all the props to child components. if not, redirect to login page

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return <Route {...rest}> { !user ? <Redirect to="/login"/> : children} </Route> 
}

export default PrivateRoute