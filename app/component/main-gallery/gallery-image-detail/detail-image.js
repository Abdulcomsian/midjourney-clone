"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { MdOutlineClose } from "react-icons/md";
import { useRouter } from "next/navigation";

// Enable custom format parsing
function DetailImage({
  selectedImageId: initialSelectedImageId,
  galleryImages,
  onClose,
}) {
  const [selectedImageId, setSelectedImageId] = useState(
    initialSelectedImageId
  );

  console.log("Gallery images", galleryImages);

  const [activeTab, setActiveTab] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  dayjs.extend(customParseFormat);
  const onTabClick = (e, index) => {
    setActiveTab(index);
    console.log("Tab Index", index);
  };

  useEffect(() => {
    setSelectedImageId(initialSelectedImageId);
  }, [initialSelectedImageId]);

  const Onimageclick = (item) => {
    console.log("Selected Item:", item);
    setSelectedImageId(item.id);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date"; // Handle undefined or null dates

    const now = dayjs();
    const date = dayjs(dateString, "DD/MM/YYYY"); // Parse the date with your format

    if (!date.isValid()) return "Invalid date"; // Handle invalid date formats

    if (now.isSame(date, "day")) return "Today";
    const diffDays = now.diff(date, "day");

    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  };
  const selectedImageItem = galleryImages.find(
    (item) => item.id === selectedImageId
  );

  console.log("Selected image item:", selectedImageItem);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        console.log("Escape key pressed");
        window.location.href = "/";
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="image-detail-wrapper">
      <div
        className="detail-left-container"
        style={{
          position: "relative",
          top: "18px",
          height: "85vh",
        }}
      >
        <div className="image-wrapper">
          {selectedImageItem ? (
            <div className="img-container">
              <img
                src={selectedImageItem.url}
                alt="Selected"
                style={{ width: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                  zIndex: 1,
                  background: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "50%",
                  padding: "5px",
                }}
                onClick={onClose}
              >
                <MdOutlineClose size={24} />
              </div>
            </div>
          ) : (
            <p>Image not found</p>
          )}
        </div>
      </div>
      <div className="detail-right-container">
        {selectedImageItem ? (
          <div className="img-data">
            <p>{formatDate(selectedImageItem.created_at)}</p>
            <p className="my-3" style={{ fontWeight: "bold" }}>
              {selectedImageItem.username}
            </p>
            <div>{selectedImageItem.prompt || "No prompt available"}</div>
          </div>
        ) : (
          <p>No details available</p>
        )}
        <Tabs activeTab={activeTab} onTabClick={onTabClick}>
          {galleryImages.map((item, index) => (
            <Tab key={index}>
              <div className="tab-img">
                <img
                  src={item.url}
                  alt={`Gallery Item ${index}`}
                  onClick={() => Onimageclick(item)} // Update selected image when clicked
                />
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default DetailImage;
