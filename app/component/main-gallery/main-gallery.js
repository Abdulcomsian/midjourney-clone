"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import DetailImage from "./gallery-image-detail/detail-image";
import { useSelector } from "react-redux";
import translations from "../../../i18";

function MainGallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [imageDetail, setImageDetail] = useState(true);
  const [selectedImageId, setSelectedImageId] = useState(undefined);
  const [page, setPage] = useState(1); // For pagination
  const [hasMore, setHasMore] = useState(true); // To track if more images exist
  const observer = useRef();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const t = translations[selectedLanguage];

  // Fetch gallery images based on the current page
  const fetchGallery = useCallback(async () => {
    const token = localStorage.getItem("token");
    const resp = await fetch(
      `https://stage-admin.footo.ai/api/images/gallery?page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await resp.json();

    if (data.length > 0) {
      setGalleryImages((prev) => [...prev, ...data]); // Append new images
    } else {
      setHasMore(false); // No more images to load
    }
  }, [page]);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

  // Observer to detect when the user scrolls near the bottom
  const lastImageRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1); // Load next page
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return (
    <>
      <main>
        {imageDetail ? (
          <div className="filter-bar">
            
            <div className="gallery-grid-wrapper rounded-lg overflow-hidden">
              <div className="gallery-wrapper">
                {galleryImages.map((item, index) => {
                  if (galleryImages.length === index + 1) {
                    // Attach observer to the last image
                    return (
                      <div
                        className="gallery-item position-relative"
                        key={item.id}
                        ref={lastImageRef}
                        onClick={() => {
                          setImageDetail(false);
                          setSelectedImageId(item.id);
                        }}
                      >
                        <img src={item.url} alt={item.slug} />
                        <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                          <p>{item.slug}</p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="gallery-item position-relative"
                        key={item.id}
                        onClick={() => {
                          setImageDetail(false);
                          setSelectedImageId(item.id);
                        }}
                      >
                        <img src={item.url} alt={item.slug} />
                        <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                          <p>{item.slug}</p>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              {hasMore && (
                <div className="text-center see-more-images">
                  <p>Loading more images...</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <DetailImage selectedImageId={selectedImageId} />
        )}
      </main>
    </>
  );
}

export default MainGallery;
