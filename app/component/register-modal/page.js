'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../../../utils/api'; // Import your registerUser function

function RegisterModal({ showRegisterModal, handleCloseRegisterModal }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        language: '',
        country: '',
    });
    const [loading, setLoading] = useState(false); // To show a loading state
    const [error, setError] = useState(''); // To display any error
    const [countryMap, setCountryMap] = useState({}); // Country mapping
    const [details, setDetails] = useState(null); // User location details

    // Fetch all country names and codes
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => {
                const map = {};
                data.forEach(country => {
                    const { cca2, name } = country; // cca2 is the country code
                    map[cca2] = name.common; // Store the common name
                });
                setCountryMap(map); // Save the country map in state
            })
            .catch(err => console.error("Error fetching countries:", err));
    }, []);

    // Fetch user's country based on IP
    useEffect(() => {
        fetch("https://ipinfo.io/json")
            .then(response => response.json())
            .then(data => {
                console.log("Data", data);
                setDetails(data);

                if (data && data.country) {
                    const countryName = countryMap[data.country] || data.country; // Get the full country name
                    setFormData(prev => ({
                        ...prev,
                        country: countryName // Set the country name as default
                    }));
                }
            })
            .catch(err => console.error("Error fetching IP info:", err));
    }, [countryMap]);

    // Handle form changes
    const handleChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Reset any previous error

        try {
            const result = await registerUser(formData); // Call the register API

            if (result && !result.error) {
                // If registration is successful, redirect or show success message
                router.push('/'); // Redirect to a protected route
                handleCloseRegisterModal();
            } else {
                setError(result.error || 'Registration failed');
                console.log("Error", result);
            }
        } catch (error) {
            setError(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={showRegisterModal} onHide={handleCloseRegisterModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <p className="text-danger">{error}</p>} {/* Display any error */}
                <Form onSubmit={handleSubmit}>
                    {/* Username */}
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter username"
                            required
                        />
                    </Form.Group>

                    {/* Email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    {/* Password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            required
                        />
                    </Form.Group>

                    {/* Language */}
                    <Form.Group className="mb-3" controlId="formBasicLanguage">
                        <Form.Label>Preferred Language</Form.Label>
                        <Form.Control
                            type="text"
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            placeholder="Enter language"
                            required
                        />
                    </Form.Group>

                    {/* Country */}
                    <Form.Group className="mb-3" controlId="formBasicCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            name="country"
                            value={formData.country}
                            readOnly // Make the country field readonly
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default RegisterModal;
