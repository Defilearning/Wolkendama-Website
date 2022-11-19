import React from "react";

const buttonLeftVariant = {
  modal:
    "absolute top-1/2 left-[5%] bg-slate-300 text-white p-2 rounded-full -translate-x-1/2 -translate-y-1/2",
  detail:
    "absolute top-1/2 left-0 bg-slate-100 p-2 rounded-full -translate-x-1/2 -translate-y-1/2",
};

const buttonRightVariant = {
  modal:
    "absolute top-1/2 left-[95%] bg-slate-300 text-white p-2 rounded-full -translate-x-1/2 -translate-y-1/2",
  detail:
    "absolute top-1/2 left-full bg-slate-100 p-2 rounded-full -translate-x-1/2 -translate-y-1/2",
};

function ProductMainImage({
  imageLeft,
  imageRight,
  img,
  gallery,
  openModal,
  variant,
}) {
  return (
    <div className={`${variant === "modal" ? "" : "mb-5"} relative`}>
      <div
        className={`${
          variant === "modal" ? "h-[800px] w-[800px]" : "h-[400px] w-[400px]"
        } bg-center cursor-pointer`}
        style={{
          backgroundImage: `url(${img[gallery.image]})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        onClick={openModal}
      />
      <button className={buttonLeftVariant[variant]} onClick={imageLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button className={buttonRightVariant[variant]} onClick={imageRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProductMainImage;
