import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "../../Component/UploadPhotos/ProductImages";

function UploadPhoto() {
  const id = useParams();
  const [photos, setPhotos] = useState([]);
  const [photosPreview, setPhotosPreview] = useState([]);

  const [imgCover, setImgCover] = useState();

  useEffect(() => {
    if (photos.length) {
      const tempArr = [...photos];
      setPhotosPreview(() => tempArr.map((el) => URL.createObjectURL(el)));
    }
  }, [photos]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    if (photos.length > 0) {
      for (let i = 0; i < photos.length; i++) {
        data.append("imgs", photos[i]);
      }
    }

    if (imgCover) {
      data.append("imgCover", imgCover);
    }

    console.log(data.getAll("imgCover"));
  };

  return (
    <div className="py-3 px-5">
      <p>Id:</p>
      <input
        type="text"
        placeholder="eg: 63bbf9ecb5c3773733898a0f"
        className="text-black w-full mb-7"
        defaultValue={`${id.shopId === "null" ? "" : id.shopId}`}
      />
      <h1 className="text-4xl mb-5">Image Cover</h1>
      {!imgCover ? (
        <input
          className="w-[200px] h-[200px] file cursor-pointer"
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/webp"
          onChange={(e) => setImgCover(e.target.files[0])}
        />
      ) : (
        <div className=" h-[220px] w-[220px] flex justify-center items-center bg-slate-200  relative">
          <div
            className="h-[200px] w-[200px] bg-center"
            style={{
              backgroundImage: `url(${URL.createObjectURL(imgCover)})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
          <button
            className="absolute top-0 left-full -translate-x-1/2 -translate-y-1/2 bg-slate-400 rounded-full p-2 text-black"
            onClick={() => setImgCover(null)}
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
      <h1 className="text-4xl my-5">Product Images</h1>
      <ProductImages
        photos={photos}
        setPhotos={setPhotos}
        photosPreview={photosPreview}
      />
      <button
        className="bg-slate-50 text-black py-2 px-3 w-full text-2xl mt-6"
        onClick={onSubmit}
      >
        Upload Photos!
      </button>
    </div>
  );
}

export default UploadPhoto;
