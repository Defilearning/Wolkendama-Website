import React from "react";

const containerMap = {
  modal: "w-[600px] grid grid-cols-5 auto-rows-max gap-5",
  detail: `flex gap-2 w-[500px] mb-5 transition-all`,
};

function ProductOtherImages({ img, gallery, setGallery, variant }) {
  return (
    <div
      className={containerMap[variant]}
      style={{
        transform: `${
          variant === "detail"
            ? `translateX(-${(gallery.page - 1) * 500}px)`
            : ""
        } `,
      }}
    >
      {img.map((el, i) => {
        return (
          <div
            key={i}
            className={`min-h-[92px] min-w-[92px] bg-center ${
              gallery.image === i ? "pic" : ""
            }`}
            style={{
              backgroundImage: `url(${el})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            onMouseEnter={() => setGallery((prev) => ({ ...prev, image: i }))}
          />
        );
      })}
    </div>
  );
}

export default ProductOtherImages;
