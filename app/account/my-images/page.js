"use client";
import { useState } from "react";
import { Suspense } from "react";
import MyImagesList from "../../component/MyImagesList";
import { Spinner } from "react-bootstrap";
import TopSearch from "../../component/top-search/top-search";
import CreativeModal from "../../component/creative-modal/pages";
export default function Page() {
  const [showCreativeModal, setShowCreativeModal] = useState(false);

  const handleCloseCreative = () => {
    setShowCreativeModal(false);
  };
  const handleShowCreative = () => {
    setShowCreativeModal(true);
  };
  return (
    <div className="content-wrapper">
      <main>
        <TopSearch showCreativeModal={handleShowCreative} />

        <Suspense
          fallback={
            <div className="d-flex align-item-center justify-content-center">
              <Spinner animation="border" variant="dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          }
        >
          <MyImagesList />
        </Suspense>
        <CreativeModal
          creativeModal={showCreativeModal}
          handleCloseCreativeModal={handleCloseCreative}
        />
      </main>
    </div>
  );
}
