import React, { useState } from "react";
import { createPortal } from "react-dom";
import GalleryModal from "../Modal/GalleryModal";
import ProductMainImage from "./Gallery/ProductMainImage";
import ProductOtherImages from "./Gallery/ProductOtherImages";

function PhotoGallery({ img, descriptions }) {
  const tempArr = [];
  for (let i = 1; i <= Math.ceil(img.length / 5); i++) {
    tempArr.push(i);
  }

  const [gallery, setGallery] = useState({
    page: 1,
    image: 0,
  });

  const [showModal, setShowModal] = useState(false);

  const imageLeft = () => {
    if (gallery.image === 0) {
      return setGallery({ page: tempArr.length, image: img.length - 1 });
    }

    setGallery((prev) => {
      if ((prev.image - 1) % 5 === 4) {
        return { page: prev.page - 1, image: prev.image - 1 };
      } else {
        return { ...prev, image: prev.image - 1 };
      }
    });
  };

  const imageRight = () => {
    if (gallery.image === img.length - 1) {
      return setGallery({ page: 1, image: 0 });
    }

    setGallery((prev) => {
      if ((prev.image + 1) % 5 === 0) {
        return { page: prev.page + 1, image: prev.image + 1 };
      } else {
        return { ...prev, image: prev.image + 1 };
      }
    });
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="w-full h-full lg:w-[500px] ">
      {createPortal(
        <>
          <GalleryModal
            showModal={showModal}
            setShowModal={setShowModal}
            imageLeft={imageLeft}
            imageRight={imageRight}
            img={img}
            gallery={gallery}
            openModal={openModal}
            descriptions={descriptions}
            setGallery={setGallery}
          />
        </>,
        document.getElementById("overlay")
      )}
      <div className="flex flex-col items-center bg-slate-200 p-5 rounded-md overflow-hidden w-full h-full">
        <ProductMainImage
          imageLeft={imageLeft}
          imageRight={imageRight}
          img={img}
          gallery={gallery}
          openModal={openModal}
          variant="detail"
        />
        <div className="hidden lg:block">
          <ProductOtherImages
            img={img}
            gallery={gallery}
            setGallery={setGallery}
            variant="detail"
          />
        </div>

        <div className="btn-group hidden lg:block">
          {tempArr.length > 1 &&
            tempArr.map((el) => {
              return (
                <button
                  key={el}
                  className={`btn btn-sm ${
                    gallery.page === el ? "btn-active" : ""
                  } bg-purple-theme`}
                  onClick={() => setGallery((prev) => ({ ...prev, page: el }))}
                >
                  {el}
                </button>
              );
            })}
        </div>

        <div className="lg:hidden">{`${gallery.image + 1}/${img.length}`}</div>
      </div>
    </div>
  );
}

export default PhotoGallery;
