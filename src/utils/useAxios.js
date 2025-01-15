// Codes that we need to use to perform axios operations
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs'

import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const baseURL = 'http://127.0.0.1:8000/api'

const useAxios = () => {

    const { authTokens, setUser, setAuthTokens } = useContext(AuthContext) //access authTokens, setUser, and setAuthTokens from the AuthContext.jsx

    const axiosInstance = axios.create({
        baseURL,
        headers: {
            Authorization : `Bearer ${authTokens?.access}` //if there is authToken, access is granted.
        }
    }).access

    axiosInstance.interceptors.request.use(async req => {
        const user = jwt_decode(authTokens.access) //gets the user
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1 //gets the expiration date of the access token, checks if the access hasn't expired (less than 1)
    
        if (isExpired) {
            return req
        }

        const response = await axios.post(`${baseURL}/token/refresh/`, {
            refresh: authTokens.refresh //grabs the refresh token
        });

        localStorage.setItem("authToken", JSON.stringify(response.data))
        // localStorage.setItem("authToken", JSON.stringify(response.data))

        setAuthTokens(response.data)
        setUser(jwt_decode(response.data.access))

        req.headers.Authorization = `Bearer ${response.data.access}`

        return req
    })

    return axiosInstance

}

export default useAxios