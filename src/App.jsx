import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashBoard from './pages/DashBoard'
import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute component={DashBoard} path="/dashboard" exact />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={HomePage} path="/" />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
