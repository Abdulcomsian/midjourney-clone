"use client";
import React, { useEffect, useState } from "react";
import DetailImage from "./gallery-image-detail/detail-image";
import { useSelector } from "react-redux";
import translations from "../../../i18";
import { Tab, Tabs } from "react-bootstrap";
import Like from "../like";
import toast from "react-hot-toast";

function MainGallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [imageDetail, setImageDetail] = useState(false);
  const [dataRevalidate, setPageRevalidate] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(undefined);
  const [showDetail, setShowDetail] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const t = translations[selectedLanguage];

  // const fetchGallery = async (currentPage) => {
  //   const token = localStorage.getItem("token");
  //   const resp = await fetch(
  //     `https://stage-admin.footo.ai/api/images/gallery?page=${currentPage}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   const data = await resp.json();

  //   if (data.length > 0) {
  //     setGalleryImages((prevImages) => {
  //       const uniqueImages = data.filter(
  //         (newImage) =>
  //           !prevImages.some((prevImage) => prevImage.id === newImage.id)
  //       );
  //       return [...prevImages, ...uniqueImages];
  //     });
  //   } else {
  //     setHasMore(false);
  //   }
  // };

  const fetchGallery = async (currentPage) => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const endpoint = token
      ? `https://stage-admin.footo.ai/api/images/gallery?page=${currentPage}`
      : `https://stage-admin.footo.ai/api/images/public-gallery?page=${currentPage}`;

    try {
      const resp = await fetch(endpoint, {
        method: "GET",
        headers,
      });

      const data = await resp.json();

      if (data.length > 0) {
        setGalleryImages((prevImages) => {
          const uniqueImages = data.filter(
            (newImage) =>
              !prevImages.some((prevImage) => prevImage.id === newImage.id)
          );
          return [...prevImages, ...uniqueImages];
        });
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };

  useEffect(() => {
    fetchGallery(page);
  }, [page, dataRevalidate, imageDetail]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleLike = async (imageId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You need to be logged in to like an image.");
      return;
    }
    const resp = await fetch(
      `https://stage-admin.footo.ai/api/images/like/${imageId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await resp.json();

    if (data?.status === "1") {
      setGalleryImages((prevImages) =>
        prevImages.map((image) =>
          image.id === imageId
            ? {
                ...image,
                like_status: !image.like_status, // Toggle the like status
                likes_count: image.like_status
                  ? image.likes_count - 1 // Decrease count if liked
                  : image.likes_count + 1, // Increase count if unliked
              }
            : image
        )
      );
    }
  };

  return (
    <>
      <main>
        {!imageDetail ? (
          <div className="filter-bar">
            <Tabs
              defaultActiveKey="Random"
              id="gallery-tabs"
              className="mb-3 packages-tab"
              justify
            >
              <Tab
                eventKey="Random"
                title={t?.TAb_1 || "Random"}
                className="border-0"
              >
                <div className="gallery-wrapper">
                  {galleryImages.map((item, index) => (
                    <div
                      key={item.id}
                      className="gallery-item position-relative"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setImageDetail(true);
                        setSelectedImageId(item.id);
                      }}
                    >
                      <img src={`${item.url}`} alt={item.title} />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          right: "10px",
                          fontSize: "25px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent event bubbling
                          handleLike(item.id);
                        }}
                      >
                        <span style={{ fontSize: "large" }}>
                          {item.likes_count}
                        </span>{" "}
                        <Like isLiked={item.like_status} />
                      </div>
                    </div>
                  ))}
                </div>
                {hasMore && (
                  <div className="text-center mt-4">
                    <button
                      className="btn"
                      style={{ backgroundColor: "#f2330d1a", color: "#f2330d" }}
                      onClick={loadMoreImages}
                    >
                      Load More
                    </button>
                  </div>
                )}
                {!hasMore && (
                  <div className="text-center mt-4">
                    <p>No more images to show</p>
                  </div>
                )}
              </Tab>
            </Tabs>
          </div>
        ) : (
          <DetailImage
            selectedImageId={selectedImageId}
            onClose={() => setImageDetail(false)}
            galleryImages={galleryImages}
          />
        )}
      </main>
    </>
  );
}

export default MainGallery;
