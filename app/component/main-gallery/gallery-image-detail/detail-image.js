"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

// Enable custom format parsing
function DetailImage({
  selectedImageId: initialSelectedImageId,
  galleryImages,
}) {
  const [selectedImageId, setSelectedImageId] = useState(
    initialSelectedImageId
  );
  const [activeTab, setActiveTab] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
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
          <TabScreen>
            <div
              className="img-container"
              style={{
                position: "static",
                width: "100%",
                objectFit: "cover",
                transform: "none",
              }}
            >
              <img
                src={selectedImageItem?.url}
                alt="Selected"
                style={{
                  pointerEvents: "none !important",
                }}
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
                onClick={(e) => {
                  console.log("Close icon clicked", e);
                  window.location.href = "/";
                }}
              >
                <MdOutlineClose size={24} />
              </div>
            </div>
          </TabScreen>
        </div>
      </div>
      <div className="detail-right-container">
        {galleryImages.map((item, index) => (
          <TabScreen key={index} index={index} activeTab={activeTab}>
            <div className="img-data">
              <p>{formatDate(item.created_at)}</p>
              {/* <p className="my-3">{item.prompt}</p> */}
              <div>{selectedImageItem?.prompt || "No prompt available"}</div>

              {/* <ul className="list-unstyled d-flex flex-wrap gap-2 p-0 m-0">
                <li>
                  <span className="white-space-nowrap rounded py-1 px-2">
                    chaos 50
                  </span>
                </li>
                <li>
                  <span className="white-space-nowrap rounded py-1 px-2">
                    ar 5:7
                  </span>
                </li>
                <li>
                  <span className="white-space-nowrap rounded py-1 px-2">
                    style raw
                  </span>
                </li>
                <li>
                  <span className="white-space-nowrap rounded py-1 px-2">
                    v 6.1
                  </span>
                </li>
                <li>
                  <span className="white-space-nowrap rounded py-1 px-2">
                    stylize 1000
                  </span>
                </li>
                <li>
                  <span className="white-space-nowrap rounded py-1 px-2">
                    personalize ap4xwe8
                  </span>
                </li>
              </ul> */}
            </div>
          </TabScreen>
        ))}
        <Tabs activeTab={activeTab} onTabClick={onTabClick}>
          {galleryImages.map((item, index) => (
            <Tab key={index}>
              <div className="tab-img">
                <img
                  src={item.url}
                  alt={`Gallery Item ${index}`}
                  onClick={() => Onimageclick(item)}
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
