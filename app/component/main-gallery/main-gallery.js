"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import DetailImage from "./gallery-image-detail/detail-image";
import { useSelector } from "react-redux";
import translations from "../../../i18";
import { Tab, Tabs } from "react-bootstrap";

function MainGallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [imageDetail, setImageDetail] = useState(true);
  const [selectedImageId, setSelectedImageId] = useState(undefined);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const t = translations[selectedLanguage];

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
      setGalleryImages((prev) => [...prev, ...data]);
    } else {
      setHasMore(false);
    }
  }, [page]);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

  const lastImageRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
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
                <div className="gallery-grid-wrapper rounded-lg overflow-hidden">
                  <div className="gallery-wrapper">
                    {galleryImages.map((item, index) => {
                      if (galleryImages.length === index + 1) {
                        // Attach observer to the last image
                        return (
                          <div
                            className="gallery-item position-relative"
                            key={index}
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
                            key={index}
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
                </div>
              </Tab>
              <Tab
                eventKey="Hot"
                title={t?.Tab_2 || "Hot"}
                className="border-0"
              >
                <div className="gallery-grid-wrapper rounded-lg overflow-hidden">
                  <div className="gallery-wrapper">
                    {galleryImages.map((item, index) => {
                      if (galleryImages.length === index + 1) {
                        // Attach observer to the last image
                        return (
                          <div
                            className="gallery-item position-relative"
                            key={index}
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
                            key={index}
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
                </div>
              </Tab>
              <Tab
                eventKey="Today"
                title={t?.Tab_3 || "Today"}
                className="border-0"
              >
                <div className="gallery-grid-wrapper rounded-lg overflow-hidden">
                  <div className="gallery-wrapper">
                    {galleryImages.map((item, index) => {
                      if (galleryImages.length === index + 1) {
                        // Attach observer to the last image
                        return (
                          <div
                            className="gallery-item position-relative"
                            key={index}
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
                            key={index}
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
                </div>
              </Tab>
              <Tab
                eventKey="Likes"
                title={t?.Tab_4 || "Likes"}
                className="border-0"
              >
                <div className="gallery-grid-wrapper rounded-lg overflow-hidden">
                  <div className="gallery-wrapper">
                    {galleryImages.map((item, index) => {
                      if (galleryImages.length === index + 1) {
                        // Attach observer to the last image
                        return (
                          <div
                            className="gallery-item position-relative"
                            key={index}
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
                            key={index}
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
                </div>
              </Tab>
            </Tabs>
          </div>
        ) : (
          <DetailImage selectedImageId={selectedImageId} />
        )}
      </main>
    </>
  );
}

export default MainGallery;
