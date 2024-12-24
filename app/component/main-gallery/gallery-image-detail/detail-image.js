"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import { getUserGallery } from "../../../../utils/api";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

// Enable custom format parsing
function DetailImage({ selectedImageId: initialSelectedImageId }) {
  const [galleryData, setGalleryData] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState(initialSelectedImageId);
  const [activeTab, setActiveTab] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  dayjs.extend(customParseFormat); 
  const onTabClick = (e, index) => {
    setActiveTab(index);
    console.log("Tab Index", index);
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getUserGallery();
      console.log("User gallery response:", resp);
      setGalleryData(resp);
    };

    fetchData();
  }, []);

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
  const selectedImageItem = galleryData.find(
    (item) => item.id === selectedImageId
  );
  console.log("Selected image item:", selectedImageItem);

  return (
    <div className="image-detail-wrapper">
      <div
        className="detail-left-container"
        style={{
          position: "relative",
          zIndex: -1,
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
              <img src={selectedImageItem?.url} alt="Selected" />
            </div>
          </TabScreen>
          <div
            style={{
              position: "absolute",
              top: "13%",
              left: "95%",
              cursor: "pointer",
            }}
            className="close-button"
          >
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "GrayText" }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: isHovered ? "#f0f0f0" : "transparent",
                  borderRadius: "50%",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    lineHeight: "1",
                  }}
                >
                  X
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="detail-right-container">
      {galleryData.map((item, index) => (
          <TabScreen key={index} index={index} activeTab={activeTab}>
            <div className="img-data">
              <p>{formatDate(item.created_at)}</p>
              <p className="my-3">
                {item.prompt}
              </p>
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
          
          {galleryData.map((item, index) => (
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
