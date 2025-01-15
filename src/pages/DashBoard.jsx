import {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext';
import useAxios from '../utils/useAxios'
import { jwtDecode } from "jwt-decode"
import Navbar from '../components/Navbar';

const DashBoard = () => {

  const [response, setResponse] = useState("");
  const api = useAxios()
  const token = localStorage.getItem("authTokens"); //gets the token

  if (token) { //if there is the token, decode the toke.
    const decode = jwtDecode(token) //decodes of the token to get the credentials
    var user_id = decode.user_id // id of the current user (logged in)
    var username = decode.username
    var first_name = decode.first_name
    var last_name = decode.last_name
  }

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await api.get("/dashboard")
        setResponse(response.data.response)
      } catch (error) {

        console.log(error);
        setResponse("Something went wrong.")
        
      }
    }

    fetchData();

  }, [])


  return (
    <div>
      <Navbar/>
      <h1>Hi, {username} {user_id}</h1>
      <p>{response}</p>
    </div>
  )
}

export default DashBoard