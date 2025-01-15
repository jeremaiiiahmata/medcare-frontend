import {useState} from 'react'
import { jwtDecode } from 'jwt-decode';
import useAxios from '../../utils/useAxios';

const CreatePatientForm = () => {

const api = useAxios()


const getDoctorIdFromToken = async (token) => {
    const decodedToken = jwtDecode(token); // Decode the JWT token
    return decodedToken.user_id; // Assuming the token contains a field `user_id`
};

const [patient, setPatient] = useState({
    first_name: "",
    last_name: "",
    blood_type: "",
    email: "",
    contact_number: "",
    address: "",
    age: "",
    weight: "",
    gender: "",
    id_number: "",
    allergies: "",
});

const createPatient = async () => {

    console.log(`Sending patient data : ${patient}`)

    try {
        // Use the Axios instance to make the POST request
        const response = await api.post("/create-patient", patient);

        console.log("Patient created successfully:", response.data);
        return { status: "success", data: response.data };
    } catch (error) {
        console.error("Error creating patient:", error.response?.data || error.message);
        return { status: "error", message: error.response?.data || "Server connection failed" };
    }
};

const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({
        ...prevPatient,
        [name]: value,
    }));
};

const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await createPatient();

    if (response.status === "success") {
        alert("Patient created successfully!");
    } else {
        alert("Failed to create patient: " + response.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
        <h3 className="text-center mb-4">Create Patient</h3>

        <div className="mb-3">
            <label htmlFor="first_name" className="form-label">First Name</label>
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

        <div className="mb-3">
            <label htmlFor="last_name" className="form-label">Last Name</label>
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

        <div className="mb-3">
            <label htmlFor="blood_type" className="form-label">Blood Type</label>
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

        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
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

        <div className="mb-3">
            <label htmlFor="contact_number" className="form-label">Contact Number</label>
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

        <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
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

        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
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

        <div className="mb-3">
            <label htmlFor="weight" className="form-label">Weight (kg)</label>
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

        <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
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

        <div className="mb-3">
            <label htmlFor="id_number" className="form-label">ID Number</label>
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

        <div className="mb-3">
            <label htmlFor="allergies" className="form-label">Allergies</label>
            <textarea
                name="allergies"
                id="allergies"
                placeholder="Enter Allergies"
                className="form-control"
                value={patient.allergies}
                onChange={handleChange}
            ></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary w-100">
            Create Patient
        </button>
    </form>
    );
 };


export default CreatePatientForm