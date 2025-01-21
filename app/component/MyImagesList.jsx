import { useEffect, useState } from "react";
import { getUserGallery } from "../../utils/api";
import DetailImage from "./main-gallery/gallery-image-detail/detail-image";
import Like from "./like";

export default function MyImagesList() {
  const [galleryData, setGalleryData] = useState(null);
  const [dataRevalidate, setPageRevalidate] = useState(false);
  const [imageDetail, setImageDetail] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getUserGallery();
      console.log("user gallery resp", resp);
      setGalleryData(resp);
    };

    fetchData();
  }, [dataRevalidate]);

  const handleCloseDetail = () => {
    setImageDetail(false); // Go back to MyImage
  };

  const handleImageClick = (imageId) => {
    console.log("Image clicked", imageId);
    setSelectedImageId(imageId);
    setImageDetail(true); // Show the detail view
  };

  const handleLike = async function (imageId) {
    console.log("Image clicked", imageId);

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

    if (data?.status === "1") {
      setGalleryData((prevImages) =>
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

  const handleImageDelete = (imageId) => {
    // Update the galleryData state to remove the deleted image
    setGalleryData((prevGalleryData) =>
      prevGalleryData.filter((image) => image.id !== imageId)
    );
  };

  return (
    <>
      {!imageDetail ? (
        galleryData && (
          <div className="gallery-grid-wrapper" style={{ marginTop: "100px" }}>
            <div className="gallery-wrapper">
              {galleryData.map((image) => (
                <div key={image.id} className="gallery-item position-relative">
                  <img
                    src={`${image.url}`}
                    alt={image.title}
                    onClick={() => handleImageClick(image.id)} // Call the click handler
                  />
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
                    <span style={{ fontSize: "large" }}>
                      {image.likes_count}
                    </span>{" "}
                    <Like isLiked={image.likes_count} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ) : (
        <DetailImage
          selectedImageId={selectedImageId}
          galleryImages={galleryData} // Corrected the prop name
          onClose={handleCloseDetail}
          onDelete={handleImageDelete} // Pass the handleImageDelete function to DetailImage
        />
      )}
    </>
  );
}
