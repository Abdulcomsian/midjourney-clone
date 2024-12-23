"use client";
import { useEffect, useState } from "react";
import { getUserGallery } from "../../utils/api";

import Like from "./like";

export default function MyImagesList() {
  const [galleryData, setGalleryData] = useState(null);
  const [dataRevalidate, setPageRevalidate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getUserGallery();
      console.log("user gallery resp", resp);
      setGalleryData(resp);
    };

    fetchData();
  }, [dataRevalidate]);

  const handleLike = async function (imageId) {
    const token = localStorage.getItem("token");
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

    if (data?.status === "success") {
      setPageRevalidate((is) => !is);
    }
  };

  return (
    <>
      {galleryData && (
        <div className="gallery-grid-wrapper">
          <div className="gallery-wrapper">
            {galleryData.map((image) => (
              <div key={image.id} className="gallery-item position-relative">
                <img src={`${image.url}`} alt={image.title} />
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleLike(image.id)}
                >
                  <Like isLiked={image.likes_count} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
