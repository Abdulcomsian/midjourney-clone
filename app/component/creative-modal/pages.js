import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function CreativeModal ({creativeModal,handleCloseCreativeModal}) {
    return(
        <Modal
        show={creativeModal}
        onHide={handleCloseCreativeModal}
        centered
        size="lg"
        className='creative-modal'
    >
<Modal.Body className="p-0">
    <div className="d-flex">
        <div className="modal-left-side"></div>
        <div className="modal-right-side">
            <h2 className='mb-2'>Explore the Frontiers of Imagination</h2>
            <p>With the world's most advanced image models and regular updates with community steered roadmaps</p>
            <div className="mt-4">
                <h4 className="fs-5 mb-1">Join our creative community</h4>
                <p>Hop in our <a>group creation rooms</a> or enjoy open access to billions of images and prompts with daily trends and real-time search</p>
            </div>
            <div className="mt-4">
                <h4 className="fs-5 mb-1">Multiple tiers for everyone</h4>
                <p>Memberships start at $10/mo with a 20% discount on yearly plans</p>
            </div>
            <div className="btn-group flex-column gap-2 w-100 mt-3">
            <Button variant="secondary" className="rounded py-2 bg-dark" onClick={handleCloseCreativeModal}>
                Join now
            </Button>
            <Button variant="primary" className="rounded py-2 bg-transparent border-1 border-dark text-dark">Look around a bit</Button>
            </div>
        </div>
    </div>
</Modal.Body>
</Modal>
    )
}
export default CreativeModal;