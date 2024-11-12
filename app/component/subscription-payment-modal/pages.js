'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { closeSubscriptionModal } from '../../../features/modalSlice';

function SubcriptionModal() {
    const showModalState = useSelector((state) => state.modal.showSubscriptionModal);
    const dispatch = useDispatch();
    const handleCloseSubscriptionModalState = () => dispatch(closeSubscriptionModal());

    const {paymentMethod,errorPaymentMethod } = useSelector((state) => state.api);
    return(
        <Modal show={showModalState} onHide={handleCloseSubscriptionModalState} centered>
            <Modal.Header closeButton className='custom-input text-white'>
                <Modal.Title>Payment Method</Modal.Title>
            </Modal.Header>
            <Modal.Body className='custom-input'>
                {errorPaymentMethod&&(
                    <p className='text-center'>{errorPaymentMethod}</p>
                )}
            </Modal.Body>
        </Modal>
    )
}
export default SubcriptionModal;