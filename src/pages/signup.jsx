import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState(''); // New state for password
    const [error, setError] = useState(''); // State for error messages
    const [success, setSuccess] = useState(''); // State for success messages
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const userData = {
            firstName,
            lastName,
            role,
            email,
            phone,
            password // Include password in the data sent
        };

        try {
            const response = await axios.post(`http://localhost:3000/api/signup`, userData); // Adjust URL based on your backend setup
            console.log(response.data);
            setSuccess('Signup successful!'); // Show success message
            setError(''); // Clear any previous errors

            // Reset form fields
            setFirstName('');
            setLastName('');
            setRole('');
            setEmail('');
            setPhone('');
            setPassword('');
            navigate("/login")
        } catch (err) {
            console.error('Error during signup', err);
            setError(err.response?.data?.message || 'Signup failed. Please try again.'); // Show error message
            setSuccess(''); // Clear any previous success messages
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
            <div className="card shadow border-0 animate__animated animate__fadeIn" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center text-primary">Sign Up</h5>
                    {error && <div className="alert alert-danger">{error}</div>} {/* Display error messages */}
                    {success && <div className="alert alert-success">{success}</div>} {/* Display success messages */}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="Enter your first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Enter your last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <select
                                className="form-control"
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            >
                                <option value="">Select your role</option>
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary mt-3 w-100"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-3">
                        <small>
                            Already have an account? <a href="/login" className="text-primary">Login</a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
