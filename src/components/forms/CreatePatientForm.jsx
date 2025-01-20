import { useState } from 'react'; // Importing useState hook to manage component state
import { jwtDecode } from 'jwt-decode'; // Importing jwtDecode to decode JWT tokens if needed
import useAxios from '../../utils/useAxios'; // Custom Axios instance for API requests
import { Link } from 'react-router-dom'; // Importing Link for navigation between pages

const CreatePatientForm = () => {
  const api = useAxios(); // Axios instance for making authenticated API calls
  const token = localStorage.getItem("authTokens"); //gets the token 

  if (token) { //if there is the token, decode the toke.
    const decode = jwtDecode(token) //decodes of the token to get the credentials
    var user_id = decode.user_id // id of the current user (doctor's id)
  }

  // Initializing the state for patient information
  const [patient, setPatient] = useState({
    doctor: user_id,
    first_name: "", // Patient's first name
    last_name: "", // Patient's last name
    blood_type: "", // Patient's blood type
    email: "", // Patient's email address
    contact_number: "", // Patient's contact number
    address: "", // Patient's residential address
    age: "", // Patient's age
    weight: "", // Patient's weight in kilograms
    gender: "", // Patient's gender
    id_number: "", // Patient's ID number
    allergies: "", // Any allergies the patient has
  });

  // Function to create a new patient by sending data to the backend
  const createPatient = async () => {
    console.log(`Sending patient data:`, patient); // Logging patient data to console for debugging

    try {
      // Sending POST request to "/create-patient" endpoint with patient data
      const response = await api.post("/create-patient", patient);

      // Logging success message and server response
      console.log("Patient created successfully:", response.data);
      return { status: "success", data: response.data }; // Returning success status and response data
    } catch (error) {
      // Logging error message if the request fails
      console.error(
        "Error creating patient:",
        error.response?.data || error.message
      );
      return {
        status: "error",
        message: error.response?.data || "Server connection failed",
      }; // Returning error status and message
    }
  };

  // Function to handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Extracting name and value from input
    setPatient((prevPatient) => ({
      ...prevPatient, // Preserving existing state
      [name]: value, // Updating the field corresponding to `name`
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Preventing default form submission behavior

    const response = await createPatient(); // Calling createPatient function to send data

    // Displaying appropriate messages based on response status
    if (response.status === "success") {
      alert("Patient created successfully!"); // Alerting user of success
    } else {
      alert("Failed to create patient: " + response.message); // Alerting user of error
    }
  };

  // Rendering the form
  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
      <h3 className="text-center mb-4">Create Patient</h3>

      {/* Input field for patient's first name */}
      <div className="mb-3">
        <label htmlFor="first_name" className="form-label">
          First Name
        </label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="Enter First Name"
          className="form-control"
          value={patient.first_name}
          onChange={handleChange}
        />
      </div>

      {/* Input field for patient's last name */}
      <div className="mb-3">
        <label htmlFor="last_name" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Enter Last Name"
          className="form-control"
          value={patient.last_name}
          onChange={handleChange}
        />
      </div>

      {/* Input field for patient's blood type */}
      <div className="mb-3">
        <label htmlFor="blood_type" className="form-label">
          Blood Type
        </label>
        <input
          type="text"
          name="blood_type"
          id="blood_type"
          placeholder="Enter Blood Type"
          className="form-control"
          value={patient.blood_type}
          onChange={handleChange}
        />
      </div>

      {/* Input field for patient's email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          className="form-control"
          value={patient.email}
          onChange={handleChange}
        />
      </div>

      {/* Input field for patient's contact number */}
      <div className="mb-3">
        <label htmlFor="contact_number" className="form-label">
          Contact Number
        </label>
        <input
          type="text"
          name="contact_number"
          id="contact_number"
          placeholder="Enter Contact Number"
          className="form-control"
          value={patient.contact_number}
          onChange={handleChange}
        />
      </div>

      {/* Input field for patient's address */}
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Enter Address"
          className="form-control"
          value={patient.address}
          onChange={handleChange}
        />
      </div>

      {/* Input field for patient's age */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter Age"
          className="form-control"
          value={patient.age}
          onChange={handleChange}
        />
      </div>

      {/* Input field for patient's weight */}
      <div className="mb-3">
        <label htmlFor="weight" className="form-label">
          Weight (kg)
        </label>
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Enter Weight"
          className="form-control"
          value={patient.weight}
          onChange={handleChange}
        />
      </div>

      {/* Dropdown for patient's gender */}
      <div className="mb-3">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <select
          name="gender"
          id="gender"
          className="form-select"
          value={patient.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Input field for patient's ID number */}
      <div className="mb-3">
        <label htmlFor="id_number" className="form-label">
          ID Number
        </label>
        <input
          type="text"
          name="id_number"
          id="id_number"
          placeholder="Enter ID Number"
          className="form-control"
          value={patient.id_number}
          onChange={handleChange}
        />
      </div>

      {/* Textarea for patient's allergies */}
      <div className="mb-3">
        <label htmlFor="allergies" className="form-label">
          Allergies
        </label>
        <textarea
          name="allergies"
          id="allergies"
          placeholder="Enter Allergies"
          className="form-control"
          value={patient.allergies}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Buttons for "Create Patient" and "Go Back" */}
      <div className="col-md-12 d-flex justify-content-center align-items-center">
        <Link to="/dashboard">
          <button type="button" className="btn btn-danger mx-2">
            Go back
          </button>
        </Link>
        <button type="submit" className="btn btn-primary mx-2">
          Create Patient
        </button>
      </div>
    </form>
  );
};

export default CreatePatientForm;
