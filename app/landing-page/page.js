'use client'
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openAuthModal } from '../../features/modalSlice';
import { openRegisterModal } from '../../features/modalSlice';
const LandingPage = ({ handleShow, handleRegisterShow }) => {
    const dispatch = useDispatch();
    const handleSignInClick = () => {
        dispatch(openAuthModal());
    };

    const handleSignUpClick = () => {
        dispatch(openRegisterModal());
    };
    return (
        <Container fluid className="text-center" style={{ backgroundColor: '#1A1A1A', overflowY: 'auto', color: 'white', minHeight: '100vh' }}>
            <header className="d-flex justify-content-between align-items-center p-3 position-static w-100" style={{ borderBottom: '1px solid #333' }}>
                <div className="logo">
                    {/* <img src="assets/img/img-31.png" alt="Logo" style={{ height: '30px' }} /> */}
                    <span className="ms-2" style={{ color: '#F77E21', fontWeight: 'bold' }}>Footo. <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>ai</span></span>
                </div>
                <div>
                    <Button variant="outline-light" className="me-2" onClick={handleSignInClick}>Sign In</Button>
                    <Button variant="warning" onClick={handleSignUpClick}>Sign Up</Button>
                </div>
            </header>

            <section className="hero-section text-center my-5">
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Transform Your <span style={{ color: '#F77E21' }}>Words</span> Into Art</h1>
                <p>Create stunning images from text descriptions using advanced AI. Turn your imagination into reality with just a few words.</p>
                <Button variant="warning" className="mt-3" size="lg">Get Started Free</Button>
            </section>

            <section className="slider-section text-center my-5" style={{ backgroundColor: '#222', padding: '3rem 0' }}>
                <h2>Endless <span style={{ color: '#F77E21' }}>Possibilities</span></h2>
                <Row className="justify-content-center mt-4">
                    <Col md={3}>
                        <div className="prompt-card p-3" style={{ backgroundColor: '#333', borderRadius: '8px' }}>
                            <img src="assets/img/img-31.png" alt="Prompt 1" className="img-fluid mb-3  h-25" />
                            <p><strong>Prompt:</strong> "An astronaut riding a horse on Mars"</p>
                            <small>Blend different concepts into unique compositions</small>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="prompt-card p-3" style={{ backgroundColor: '#333', borderRadius: '8px' }}>
                            <img src="assets/img/img-31.png" alt="Prompt 2" className="img-fluid mb-3  h-25" />
                            <p><strong>Prompt:</strong> "A steampunk train station"</p>
                            <small>Design alternative historical scenes with intricate details</small>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="prompt-card p-3" style={{ backgroundColor: '#333', borderRadius: '8px' }}>
                            <img src="assets/img/img-31.png" alt="Prompt 3" className="img-fluid mb-3  h-25" />
                            <p><strong>Prompt:</strong> "A dragon made of crystal in a cave"</p>
                            <small>Create mythical creatures with unique materials</small>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    );
};

export default LandingPage;
