import React from "react";
import ProductMainImage from "../ShopDetailPage/Gallery/ProductMainImage";
import ProductOtherImages from "../ShopDetailPage/Gallery/ProductOtherImages";

function GalleryModal({
  showModal,
  setShowModal,
  imageLeft,
  imageRight,
  img,
  gallery,
  openModal,
  descriptions,
  setGallery,
}) {
  return (
    <>
      <div
        className={`${
          showModal === false ? "hidden" : ""
        } h-screen w-screen max-w-full fixed z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm flex justify-center items-center`}
        onClick={() => setShowModal(false)}
      ></div>
      <div
        className={`${
          showModal === false ? "hidden" : "flex"
        } h-[900px] w-[1500px] bg-slate-100 rounded-md justify-center z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-14`}
      >
        <ProductMainImage
          imageLeft={imageLeft}
          imageRight={imageRight}
          img={img}
          gallery={gallery}
          openModal={openModal}
          variant="modal"
        />
        <div>
          <h1 className="text-black mb-5">
            <strong>{descriptions}</strong>
          </h1>
          <ProductOtherImages
            img={img}
            gallery={gallery}
            setGallery={setGallery}
            variant="modal"
          />
        </div>
      </div>
    </>
  );
}

export default GalleryModal;
