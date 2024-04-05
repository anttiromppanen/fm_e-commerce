import { KeyboardEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import forwardImg from "../../assets/images/icon-next.svg";
import backwardImg from "../../assets/images/icon-previous.svg";
import shoeImg1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import shoeImg2Thumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import shoeImg3Thumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import shoeImg4Thumbnail from "../../assets/images/image-product-4-thumbnail.jpg";
import closeImg from "../../assets/images/icon-close.svg";
import useBreakpoint from "../../hooks/useBreakpoint";
import usePreviewImgIndex from "../../hooks/usePreviewImgIndex";

const productPreviewImages = [
  "bg-shoeImg1",
  "bg-shoeImg2",
  "bg-shoeImg3",
  "bg-shoeImg4",
];

function ProductThumbnail({
  id,
  img,
  mobileImgPreviewIndex,
  setMobileImgPreviewIndex,
}: {
  id: number;
  img: string;
  mobileImgPreviewIndex: number;
  setMobileImgPreviewIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const idAsString = String(id);

  return (
    <label htmlFor={idAsString} className="relative cursor-pointer select-none">
      <input
        id={idAsString}
        value={id}
        type="radio"
        name="carousel"
        checked={mobileImgPreviewIndex === id}
        onChange={() => setMobileImgPreviewIndex(id)}
        className="absolute h-0 w-0 opacity-0"
      />
      <img
        src={img}
        alt="Shoe thumbnail"
        className={
          mobileImgPreviewIndex === id ? "border-2 border-userOrange" : ""
        }
      />
      {mobileImgPreviewIndex === id && (
        <>
          <div className="absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-userOrange" />
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white opacity-60" />
        </>
      )}
    </label>
  );
}

export default function ProductCarousel() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { isAboveLg } = useBreakpoint("lg");
  const {
    galleryModePreviewIndex,
    handleNextImage,
    handleNextImageGallery,
    handlePreviousImage,
    handlePreviousImageGallery,
    mobileImgPreviewIndex,
    setGalleryModePreviewIndex,
    setMobileImgPreviewIndex,
  } = usePreviewImgIndex();

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") handlePreviousImage();
    if (e.key === "ArrowRight") handleNextImage();
  };

  const handleGalleryOpen = () => isAboveLg && setIsGalleryOpen(true);

  return (
    <div
      className="lg:w-1/2"
      tabIndex={0}
      role="button"
      onKeyDown={handleKeyPress}
    >
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0 z-50 flex h-full w-full cursor-default items-center justify-center"
          >
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-black opacity-90" />
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsGalleryOpen(false)}
                className="group absolute -top-12 right-0 scale-125 p-4 brightness-[100] filter"
              >
                <img
                  src={closeImg}
                  alt="Close"
                  className="group-hover:scale-105"
                />
              </button>
              <div
                className={`
              relative h-[555px] w-[555px] rounded-xl bg-cover bg-center bg-no-repeat
              ${productPreviewImages[galleryModePreviewIndex]}`}
              >
                <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between">
                  <button
                    type="button"
                    onClick={handlePreviousImageGallery}
                    className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white"
                  >
                    <img src={backwardImg} alt="Previous" className="-ml-1" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImageGallery}
                    className="-mr-5 flex h-12 w-12 items-center justify-center rounded-full bg-white"
                  >
                    <img src={forwardImg} alt="Next" />
                  </button>
                </div>
              </div>
              <div className="mt-8 flex justify-evenly gap-x-8 *:h-[90px] *:w-[90px] [&>label>img]:rounded-lg">
                <ProductThumbnail
                  id={0}
                  img={shoeImg1Thumbnail}
                  mobileImgPreviewIndex={galleryModePreviewIndex}
                  setMobileImgPreviewIndex={setGalleryModePreviewIndex}
                />
                <ProductThumbnail
                  id={1}
                  img={shoeImg2Thumbnail}
                  mobileImgPreviewIndex={galleryModePreviewIndex}
                  setMobileImgPreviewIndex={setGalleryModePreviewIndex}
                />
                <ProductThumbnail
                  id={2}
                  img={shoeImg3Thumbnail}
                  mobileImgPreviewIndex={galleryModePreviewIndex}
                  setMobileImgPreviewIndex={setGalleryModePreviewIndex}
                />
                <ProductThumbnail
                  id={3}
                  img={shoeImg4Thumbnail}
                  mobileImgPreviewIndex={galleryModePreviewIndex}
                  setMobileImgPreviewIndex={setGalleryModePreviewIndex}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mx-auto flex flex-col items-center gap-y-8">
        <div
          tabIndex={0}
          role="button"
          onClick={handleGalleryOpen}
          onKeyDown={() => {}}
          className={`
              relative h-[300px] w-full bg-cover bg-center bg-no-repeat transition-all duration-500 ease-linear
              md:h-[400px] md:w-4/5 md:rounded-xl lg:h-[447px] lg:w-[447px]
              ${productPreviewImages[mobileImgPreviewIndex]}
            `}
        >
          <div className="absolute left-1/2 top-1/2 flex w-[90%] -translate-x-1/2 -translate-y-1/2 justify-between lg:hidden">
            <button
              type="button"
              onClick={handlePreviousImage}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
            >
              <img
                src={backwardImg}
                alt="Previous product img"
                className="-ml-[2px] w-1/5"
              />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
            >
              <img src={forwardImg} alt="Next product img" className="w-1/5" />
            </button>
          </div>
        </div>
        <div className="hidden gap-x-6 *:h-[94px] *:w-[94px] lg:flex [&>label>img]:rounded-xl">
          <ProductThumbnail
            id={0}
            img={shoeImg1Thumbnail}
            mobileImgPreviewIndex={mobileImgPreviewIndex}
            setMobileImgPreviewIndex={setMobileImgPreviewIndex}
          />
          <ProductThumbnail
            id={1}
            img={shoeImg2Thumbnail}
            mobileImgPreviewIndex={mobileImgPreviewIndex}
            setMobileImgPreviewIndex={setMobileImgPreviewIndex}
          />
          <ProductThumbnail
            id={2}
            img={shoeImg3Thumbnail}
            mobileImgPreviewIndex={mobileImgPreviewIndex}
            setMobileImgPreviewIndex={setMobileImgPreviewIndex}
          />
          <ProductThumbnail
            id={3}
            img={shoeImg4Thumbnail}
            mobileImgPreviewIndex={mobileImgPreviewIndex}
            setMobileImgPreviewIndex={setMobileImgPreviewIndex}
          />
        </div>
      </div>
    </div>
  );
}
