"use client";
import React, { useEffect, useState } from "react";
import TopSearch from "../top-search/top-search";
import MainGallery from "../main-gallery/main-gallery";
import BottomNav from "../../component/bottom-nav/bottom-nav";
import CreativeModal from "../creative-modal/pages";

function MainWrapper(params) {
  const [showCreativeModal, setShowCreativeModal] = useState(false);

  const handleCloseCreative = () => {
    setShowCreativeModal(false);
  };
  const handleShowCreative = () => {
    setShowCreativeModal(true);
  };

  return (
    <div className="content-wrapper p-4 ">
      <TopSearch showCreativeModal={handleShowCreative} />
      <MainGallery />
      <BottomNav />
      <CreativeModal
        creativeModal={showCreativeModal}
        handleCloseCreativeModal={handleCloseCreative}
      />
    </div>
  );
}
export default MainWrapper;
