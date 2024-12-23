"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import { getUserGallery } from "../../../../utils/api";

function DetailImage({ selectedImageId }) {
  const [galleryData, setGalleryData] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getUserGallery();
      console.log("user gallery resp", resp);
      setGalleryData(resp);
    };

    fetchData();
  }, []);

  const selectedImageItem = galleryData.find(
    (item) => item.id === selectedImageId
  );
  console.log("selected image id", selectedImageItem);

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
          {/* {galleryData.map((item, index) => ( */}
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
              <img src={selectedImageItem?.url} />
            </div>
          </TabScreen>
          {/* ))} */}
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
              <p>{item.slug} 17h</p>
              <p className="my-3">
                black cat sitting on an open book, surrounded by candles and
                spell books, in the background is grey wallpaper, fantasy art
                style painting
              </p>
              <ul className="list-unstyled d-flex flex-wrap gap-2 p-0 m-0">
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
              </ul>
            </div>
          </TabScreen>
        ))}
        <Tabs activeTab={activeTab} onTabClick={onTabClick}>
          {galleryData.map((item, index) => (
            <Tab key={index}>
              <div className="tab-img">
                <img src={item.url} />
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
export default DetailImage;
