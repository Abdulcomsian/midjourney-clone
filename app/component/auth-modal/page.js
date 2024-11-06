'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { login } from '../../../features/auth/authSlice';
import { closeAuthModal } from '../../../features/modalSlice';
import { GoogleLogin } from '@react-oauth/google';
function AuthModal({ showModal, handleCloseAuthModal }) {
  console.log('AuthModal showModal:', showModal);
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth); // Get auth state from Redux store
  const showModalState = useSelector((state) => state.modal.showAuthModal);
  console.log(showModalState, "Modal state");
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleCloseAuthModalState = () => dispatch(closeAuthModal());
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();

    // Dispatch login thunk from Redux with form data (email and password)
    dispatch(login({ email: formData.email, password: formData.password }))
      .unwrap()
      .then(() => {
        handleCloseAuthModalState(); // Close modal on successful login
        router.push('/'); // Redirect to the protected route after login
      })
      .catch((err) => {
        alert(err); // Display error message if login fails
      });
  };

  const handleGoogleLogin = (response) => {
    // Extract token from Google response
    const googleToken = response.credential;
    if (googleToken) {
      dispatch(login({ googleToken })) // Dispatch action to handle Google login with the token
        .unwrap()
        .then(() => {
          handleCloseAuthModalState();
          router.push('/');
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <Modal show={showModalState} onHide={handleCloseAuthModalState} centered >
      <Modal.Header closeButton className='custom-input'>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body className='custom-input'>
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
              className="custom-input"
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
              className="custom-input"
            />
          </Form.Group>
          <div className="d-flex align-items-center justify-content-center py-4">
            <div className="flex-grow-1 border-top" style={{ borderColor: 'gray' }}></div>
            <span className="px-3">Or continue with</span>
            <div className="flex-grow-1 border-top" style={{ borderColor: 'gray' }}></div>
          </div>
          <div className='d-flex gap-3 justify-content-center py-3'>
            {/* <Button className="border btn mb-3 p-2 w-100 bg-transparent text-dark d-flex justify-content-center gap-2 align-items-center fs-14">
              <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" fill='currentColor'>
                <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
              </svg></span>
             
            </Button> */}
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={(error) => {
                alert("Google login failed:", error);
              }}
              useOneTap
              theme="outline"
            />

          </div>
          <Button variant="warning" type="submit" className="w-100" disabled={status === 'loading'}>
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </Button>
          {status === 'failed' && <p className="text-danger mt-3">{error}</p>} {/* Show error if login fails */}
        </Form>

      </Modal.Body>
    </Modal>
  );
}

export default AuthModal;
