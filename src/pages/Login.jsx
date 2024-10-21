import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = { email, password };

        try {
            const response = await axios.post('http://localhost:3000/api/login', loginData);
            console.log(response.data);
            setSuccess('Login successful!');
            setError('');

            // Store the token in localStorage
            localStorage.setItem('token', response.data.token);

            // Redirect to the home page
            navigate('/'); // Redirect to the "/" page
        } catch (err) {
            console.error('Error during login:', err);
            setError(err.response?.data?.message || 'Login failed. Please try again.');
            setSuccess('');
        }
    };
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
            <div className="card shadow border-0" style={{ width: '20rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center text-primary">Login</h5>
                    {error && <div className="alert alert-danger">{error}</div>} {/* Display error messages */}
                    {success && <div className="alert alert-success">{success}</div>} {/* Display success messages */}
                    <form onSubmit={handleSubmit}>
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
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mt-3 w-100 hover-effect">Login</button>
                        </div>
                    </form>
                    <div className="text-center mt-3">
                        <small>
                            Don't have an account? <a href="/signup" className="text-primary">Sign up</a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
