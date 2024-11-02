'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { login } from '../../../features/auth/authSlice';

function AuthModal({ showModal, handleCloseAuthModal }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth); // Get auth state from Redux store
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();

    // Dispatch login thunk from Redux with form data (email and password)
    dispatch(login({ email: formData.email, password: formData.password }))
      .unwrap()
      .then(() => {
        handleCloseAuthModal(); // Close modal on successful login
        router.push('/'); // Redirect to the protected route after login
      })
      .catch((err) => {
        alert(err); // Display error message if login fails
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseAuthModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100" disabled={status === 'loading'}>
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </Button>
          {status === 'failed' && <p className="text-danger mt-3">{error}</p>} {/* Show error if login fails */}
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AuthModal;
