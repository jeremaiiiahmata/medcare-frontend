import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/user/HomePage'
import LoginPage from './pages/authentication/LoginPage'
import RegisterPage from './pages/authentication/RegisterPage'
import DashBoard from './pages/user/DashBoard'
import CreatePatientForm from './components/forms/CreatePatientForm'
import CreatePreAssessmentForm from './components/forms/CreatePreAssessmentForm'
import CreatePrescriptionForm from './components/forms/CreatePrescriptionForm'

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute component={DashBoard} path="/dashboard" exact />
          <PrivateRoute component={CreatePatientForm} path="/create-patient" exact />
          <PrivateRoute component={CreatePrescriptionForm} path="/create-prescription" exact />
          <PrivateRoute component={CreatePreAssessmentForm} path="/create-preassessment" exact />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={HomePage} path="/" />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
