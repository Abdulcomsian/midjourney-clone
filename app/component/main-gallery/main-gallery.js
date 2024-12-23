"use client";
import React, { useEffect, useState } from "react";
import DetailImage from "./gallery-image-detail/detail-image";
import BottomNav from "../bottom-nav/bottom-nav";
import { Tab, Tabs, Accordion } from "react-bootstrap";
import translations from "../../../i18";
import { useSelector } from "react-redux";

function MainGallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [imageDetail, setImageDetail] = useState(true);
  const [selectedImageId, setSelectedImageId] = useState(undefined);
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const t = translations[selectedLanguage];

  useEffect(() => {
    const fetchGallery = async function () {
      const token = localStorage.getItem("token");
      const resp = await fetch(
        `https://stage-admin.footo.ai/api/images/gallery`,
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
        setGalleryImages(data);
      }
    };
    fetchGallery();
  }, []);

  return (
    <>
      <main>
        {imageDetail ? (
          <div className="filter-bar">
             <div className="gallery-grid-wrapper rounded-lg overflow-hidden">
                  <div className="gallery-wrapper">
                    {galleryImages.map((item) => (
                      <div
                        className="gallery-item position-relative"
                        key={item.id}
                        onClick={() => {
                          setImageDetail(false);
                          setSelectedImageId(item.id);
                        }}
                      >
                        <img src={item.url} />
                        <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                          <p>{item.slug}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center see-more-images">
                    <hr width="130" className="border-2 m-auto mb-2" />
                    <h6>{t?.text_last || "Log in to See More"}</h6>
                  </div>
                </div>
            {/* <Tabs
              defaultActiveKey="Random"
              id="justify-tab-example"
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
                    {galleryImages.map((item) => (
                      <div
                        className="gallery-item position-relative"
                        key={item.id}
                        onClick={() => {
                          setImageDetail(false);
                          setSelectedImageId(item.id);
                        }}
                      >
                        <img src={item.url} />
                        <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                          <p>{item.slug}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center see-more-images">
                    <hr width="130" className="border-2 m-auto mb-2" />
                    <h6>{t?.text_last || "Log in to See More"}</h6>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="Hot"
                title={t?.Tab_2 || "Hot"}
                className="border-0"
              >
                <div className="gallery-grid-wrapper">
                  <div className="gallery-wrapper">
                    {galleryImages.map((item) => (
                      <div
                        className="gallery-item position-relative"
                        key={item.id}
                        onClick={() => {
                          setImageDetail(false);
                          setSelectedImageId(item.id);
                        }}
                      >
                        <img src={item.url} />
                        <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                          <p>{item.slug}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center see-more-images">
                    <hr width="130" className="border-2 m-auto mb-2" />
                    <h6>{t?.text_last || "Log in to See More"}</h6>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="Today"
                title={t?.Tab_3 || "Today"}
                className="border-0"
              >
                <div className="gallery-grid-wrapper">
                  <div className="gallery-wrapper">
                    {galleryImages.map((item) => (
                      <div
                        className="gallery-item position-relative"
                        key={item.id}
                        onClick={() => {
                          setImageDetail(false);
                          setSelectedImageId(item.id);
                        }}
                      >
                        <img src={item.src} />
                        <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                          <p>{item.slug}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center see-more-images">
                    <hr width="130" className="border-2 m-auto mb-2" />
                    <h6>{t?.text_last || "Log in to See More"}</h6>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="Likes"
                title={t?.Tab_4 || "Likes"}
                className="border-0"
              >
                <div className="gallery-grid-wrapper">
                  <div className="gallery-wrapper">
                    {galleryImages.map((item) => (
                      <div
                        className="gallery-item position-relative"
                        key={item.id}
                        onClick={() => {
                          setImageDetail(false);
                          setSelectedImageId(item.id);
                        }}
                      >
                        <img src={item.src} />
                        <div className="img-slug p-4 position-absolute bottom-0 d-flex h-100 w-100 align-items-end text-white cursor-pointer">
                          <p>{item.slug}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center see-more-images">
                    <hr width="130" className="border-2 m-auto mb-2" />
                    <h6>{t?.text_last || "Log in to See More"}</h6>
                  </div>
                </div>
              </Tab>
            </Tabs> */}
          </div>
        ) : (
          <DetailImage selectedImageId={selectedImageId} />
        )}
      </main>
    </>
  );
}
export default MainGallery;
