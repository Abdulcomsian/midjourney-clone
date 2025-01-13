"use client";
import React, { useEffect, useState } from "react";
import DetailImage from "./gallery-image-detail/detail-image";
import { useSelector } from "react-redux";
import translations from "../../../i18";
import { Tab, Tabs } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Like from "../like";
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

  const fetchGallery = async (currentPage) => {
    const token = localStorage.getItem("token");
    const resp = await fetch(
      `https://stage-admin.footo.ai/api/images/gallery?page=${currentPage}`,
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
  };

  useEffect(() => {
    fetchGallery(page);
  }, [page, dataRevalidate, imageDetail]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handleCloseDetail = () => {
    setImageDetail(false); // Go back to MyImage
  };
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
                <InfiniteScroll
                  dataLength={galleryImages.length}
                  next={loadMoreImages}
                  hasMore={hasMore}
                  loader={<h4>Loading...</h4>}
                  endMessage={<p>No more images to show</p>}
                  className="gallery-grid-wrapper rounded-lg overflow-hidden"
                >
                  <div className="gallery-wrapper">
                    {galleryImages.map((item, index) => {
                      if (galleryImages.length === index + 1) {
                        // Attach observer to the last image
                        return (
                          <div
                            key={item.id}
                            className="gallery-item position-relative"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={`${item.url}`}
                              alt={item.title}
                              onClick={() => {
                                setImageDetail(true);
                                setSelectedImageId(item.id);
                              }} // Call the click handler
                            />
                            <div
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                right: "10px",
                                fontSize: "25px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                handleLike(item.id);
                                // setSelecteditemId(item.id);
                              }}
                            >
                              <Like isLiked={item.likes_count} />
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={item.id}
                            className="gallery-item position-relative"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={`${item.url}`}
                              alt={item.title}
                              onClick={() => {
                                setImageDetail(true);
                                setSelectedImageId(item.id);
                              }} // Call the click handler
                            />
                            <div
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                right: "10px",
                                fontSize: "25px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                handleLike(item.id);
                                // setSelecteditemId(item.id);
                              }}
                            >
                              <Like isLiked={item.likes_count} />
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </InfiniteScroll>
              </Tab>
              <Tab
                eventKey="Hot"
                title={t?.Tab_2 || "Hot"}
                className="border-0"
              >
                <InfiniteScroll
                  dataLength={galleryImages.length}
                  next={loadMoreImages}
                  hasMore={hasMore}
                  loader={<h4>Loading...</h4>}
                  endMessage={<p>No more images to show</p>}
                  className="gallery-grid-wrapper rounded-lg overflow-hidden"
                >
                  <div className="gallery-wrapper">
                    {galleryImages.map((item, index) => {
                      if (galleryImages.length === index + 1) {
                        // Attach observer to the last image
                        return (
                          <div
                            className="gallery-item position-relative"
                            key={index}
                            onClick={() => {
                              setImageDetail(true);
                              setSelectedImageId(item.id);
                            }}
                          >
                            <img src={item.url} alt={item.slug} />
                            <div
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                right: "10px",
                                fontSize: "25px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                e.stopPropagation();
                                console.log("Like button clicked");
                                handleLike(item.id);
                                // setSelectedImageId(image.id);
                              }}
                            >
                              <Like isLiked={item.likes_count} />
                            </div>
                            <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                              <p>{item.slug}</p>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            className="gallery-item position-relative"
                            key={index}
                            onClick={() => {
                              setImageDetail(true);
                              setSelectedImageId(item.id);
                            }}
                          >
                            <img src={item.url} alt={item.slug} />
                            <div
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                right: "10px",
                                fontSize: "25px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                e.stopPropagation();
                                console.log("Like button clicked");
                                handleLike(item.id);
                                // setSelectedImageId(image.id);
                              }}
                            >
                              <Like isLiked={item.likes_count} />
                            </div>
                            <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                              <p>{item.slug}</p>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </InfiniteScroll>
              </Tab>
              <Tab
                eventKey="Today"
                title={t?.Tab_3 || "Today"}
                className="border-0"
              >
                <InfiniteScroll
                  dataLength={galleryImages.length}
                  next={loadMoreImages}
                  hasMore={hasMore}
                  loader={<h4>Loading...</h4>}
                  endMessage={<p>No more images to show</p>}
                  className="gallery-grid-wrapper rounded-lg overflow-hidden"
                >
                  <div className="gallery-wrapper">
                    {galleryImages.map((item, index) => {
                      if (galleryImages.length === index + 1) {
                        // Attach observer to the last image
                        return (
                          <div
                            className="gallery-item position-relative"
                            key={index}
                            onClick={() => {
                              setImageDetail(true);
                              setSelectedImageId(item.id);
                            }}
                          >
                            <img src={item.url} alt={item.slug} />
                            <div
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                right: "10px",
                                fontSize: "25px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                e.stopPropagation();
                                console.log("Like button clicked");
                                handleLike(item.id);
                                // setSelectedImageId(image.id);
                              }}
                            >
                              <Like isLiked={item.likes_count} />
                            </div>
                            <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                              <p>{item.slug}</p>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            className="gallery-item position-relative"
                            key={index}
                            onClick={() => {
                              setImageDetail(true);
                              setSelectedImageId(item.id);
                            }}
                          >
                            <img src={item.url} alt={item.slug} />
                            <div
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                right: "10px",
                                fontSize: "25px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                e.stopPropagation();
                                console.log("Like button clicked");
                                handleLike(item.id);
                                // setSelectedImageId(image.id);
                              }}
                            >
                              <Like isLiked={item.likes_count} />
                            </div>
                            <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                              <p>{item.slug}</p>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </InfiniteScroll>
              </Tab>
              <Tab
                eventKey="Likes"
                title={t?.Tab_4 || "Likes"}
                className="border-0"
              >
                <InfiniteScroll
                  dataLength={galleryImages.length}
                  next={loadMoreImages}
                  hasMore={hasMore}
                  loader={<h4>Loading...</h4>}
                  endMessage={<p>No more images to show</p>}
                  className="gallery-grid-wrapper rounded-lg overflow-hidden"
                >
                  <div className="gallery-wrapper">
                    {galleryImages.map((item, index) => {
                      if (galleryImages.length === index + 1) {
                        // Attach observer to the last image
                        return (
                          <div
                            className="gallery-item position-relative"
                            key={index}
                            onClick={() => {
                              setImageDetail(true);
                              setSelectedImageId(item.id);
                            }}
                          >
                            <img src={item.url} alt={item.slug} />
                            <div
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                right: "10px",
                                fontSize: "25px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                e.stopPropagation();
                                console.log("Like button clicked");
                                handleLike(item.id);
                                // setSelectedImageId(image.id);
                              }}
                            >
                              <Like isLiked={item.likes_count} />
                            </div>
                            <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                              <p>{item.slug}</p>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            className="gallery-item position-relative"
                            key={index}
                            onClick={() => {
                              setImageDetail(true);
                              setSelectedImageId(item.id);
                            }}
                          >
                            <img src={item.url} alt={item.slug} />
                            <div
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                right: "10px",
                                fontSize: "25px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                e.stopPropagation();
                                console.log("Like button clicked");
                                handleLike(item.id);
                                // setSelectedImageId(image.id);
                              }}
                            >
                              <Like isLiked={item.likes_count} />
                            </div>
                            <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                              <p>{item.slug}</p>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </InfiniteScroll>
              </Tab>
            </Tabs>
          </div>
        ) : (
          <DetailImage
            selectedImageId={selectedImageId}
            galleryImages={galleryImages}
            onClose={handleCloseDetail}
          />
        )}
      </main>
    </>
  );
}

export default MainGallery;
