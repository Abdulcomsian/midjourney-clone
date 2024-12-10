"use client";
import { useEffect, useState } from "react";
import { getUserGallery } from "../../utils/api";

export default function MyImagesList() {
  const [galleryData, setGalleryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getUserGallery();
      console.log("user gallery resp", resp);
      setGalleryData(resp);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        {galleryData && (
          <div>
            <ul
              style={{
                columnCount: 5,
                columnGap: "0.2rem",
                paddingLeft: 0,
                listStyle: "none",
              }}
            >
              {galleryData.map((image) => (
                <li key={image.id}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url}`}
                    alt={image.title}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
