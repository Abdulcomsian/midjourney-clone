'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { login } from '../../../features/auth/authSlice';
import { closeAuthModal } from '../../../features/modalSlice';
import { useGoogleLogin } from '@react-oauth/google';
import { registerGoogleUser } from '../../../utils/api';
import { socialLogin } from '../../../features/auth/authSlice';
function AuthModal({ showModal, handleCloseAuthModal }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth); // Get auth state from Redux store
  const showModalState = useSelector((state) => state.modal.showAuthModal);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleCloseAuthModalState = () => dispatch(closeAuthModal());
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const [loading, setLoading] = useState(false); // To show a loading state
  const [country, setCountry] = useState('');

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        const map = {};
        data.forEach(country => {
          const { cca2, name } = country;
          map[cca2] = name.common;
        });
        return map;
      })
      .then(map => {
        // Fetch user's country based on IP
        fetch("https://ipinfo.io/json")
          .then(response => response.json())
          .then(data => {
            if (data && data.country) {
              const countryName = map[data.country] || data.country;
              setCountry(countryName); // Set country display
            }
          })
          .catch(err => console.error("Error fetching IP info:", err));
      })
      .catch(err => console.error("Error fetching countries:", err));
  }, []);

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log("Code response", codeResponse);

      fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${user.access_token}`,
          'Accept': 'application/json',
        },
      })
        .then((response) => response.json()) // Parse the JSON response
        .then(async (data) => {
          console.log("Data", data.id);
          try {

            const result = await registerGoogleUser(data, codeResponse.access_token, country); // Call the register API


            if (result && !result.error) {
              console.log("Result Data", result);
              dispatch(socialLogin({
                user: result.user,
                token: result.access_token,
              }));
              handleCloseAuthModalState(); // Close modal on successful login


              router.push('/');
              router.reload();
              // If registration is successful, redirect or show success message
            } else {
              setError(result.error || 'Registration failed');
              console.log("Error", result);
            }
          } catch (error) {
            console.log(error);

          } finally {
            setLoading(false);
          }
          setProfile(data); // Update state with profile data
        })
        .catch((err) => console.log(err));
      setUser(codeResponse)
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  const handleLogin = (e) => {
    e.preventDefault();

    // Dispatch login thunk from Redux with form data (email and password)
    dispatch(login({ email: formData.email, password: formData.password }))
      .unwrap()
      .then(() => {
        handleCloseAuthModalState(); // Close modal on successful login

        router.push('/'); // Redirect to the protected route after login
        router.refresh()

      })
      .catch((err) => {
        alert(err); // Display error message if login fails
      });
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
          <Button variant="warning" type="submit" className="w-100" disabled={status === 'loading'}>
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </Button>
          <div className="d-flex align-items-center justify-content-center py-4">
            <div className="flex-grow-1 border-top" style={{ borderColor: 'gray' }}></div>
            <span className="px-3">Or continue with</span>
            <div className="flex-grow-1 border-top" style={{ borderColor: 'gray' }}></div>
          </div>
          <div className='d-flex gap-3 justify-content-center py-3'>
            <Button onClick={googleLogin} className="border btn mb-3 p-2 w-100 bg-transparent text-dark d-flex justify-content-center gap-2 align-items-center fs-14">
              <span><svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor" stroke="none" stroke-width="1" class="inline-block undefined" xmlns="http://www.w3.org/2000/svg"><g id="GoogleLogo"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></g></svg></span>

            </Button>


          </div>

          {status === 'failed' && <p className="text-danger mt-3">{error}</p>} {/* Show error if login fails */}
        </Form>

      </Modal.Body>
    </Modal>
  );
}

export default AuthModal;
