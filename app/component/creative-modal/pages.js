"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CreativeModal({ creativeModal, handleCloseCreativeModal }) {
  return (
    <Modal
      show={creativeModal}
      onHide={handleCloseCreativeModal}
      centered
      size="lg"
      className="creative-modal"
    >
      <Modal.Body className="p-0">
        <div className="d-flex">
          <div
            className="modal-left-side d-flex flex-column justify-content-center align-items-center text-white p-4"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100%",
              width: "40%",
            }}
          >
            <div className="logo d-flex align-items-center pl-1">
              <a
                href="/"
                className="text-decoration-none text-dark d-flex gap-1"
              >
                <p
                  className="desktop-view"
                  style={{
                    color: "rgb(247, 126, 33)",
                    fontWeight: "bold",
                    fontSize: "24px"
                  }}
                >
                  Footo.
                </p>
                <p
                  style={{
                    color: "rgb(204, 204, 204)",
                    fontWeight: "bold",
                    fontSize: "24px"
                  }}
                >
                  ai
                </p>
              </a>
            </div>
            <h3 className="text-white text-center mb-3">
              Discover Limitless Creativity
            </h3>
            <p className="text-center">
              Empower your imagination with tools that inspire, connect, and
              create.
            </p>
          </div>

          <div className="modal-right-side">
            <h2 className="mb-2">Explore the Frontiers of Imagination</h2>
            <p>
              With the world's most advanced image models and regular updates
              with community steered roadmaps
            </p>
            <div className="mt-4">
              <h4 className="fs-5 mb-1">Join our creative community</h4>
              <p>
                Hop in our <a>group creation rooms</a> or enjoy open access to
                billions of images and prompts with daily trends and real-time
                search
              </p>
            </div>
            <div className="mt-4">
              <h4 className="fs-5 mb-1">Multiple tiers for everyone</h4>
              <p>
                Memberships start at $10/mo with a 20% discount on yearly plans
              </p>
            </div>
            <div className="btn-group flex-column gap-2 w-100 mt-3">
              <a href="/subscription" className="w-100">
                <Button
                  variant="secondary"
                  className="rounded py-2 bg-dark w-100"
                  onClick={handleCloseCreativeModal}
                >
                  Join now
                </Button>
              </a>
              <Button
                variant="primary"
                className="rounded py-2 bg-transparent border-1 border-dark text-dark"
              >
                Look around a bit
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default CreativeModal;
