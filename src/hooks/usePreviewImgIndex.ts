import { useState } from "react";

function usePreviewImgIndex() {
  const [mobileImgPreviewIndex, setMobileImgPreviewIndex] = useState(0);
  const [galleryModePreviewIndex, setGalleryModePreviewIndex] = useState(0);

  const handleNextImage = () =>
    setMobileImgPreviewIndex((state) => {
      if (state >= 3) return 0;
      return state + 1;
    });

  const handlePreviousImage = () =>
    setMobileImgPreviewIndex((state) => {
      if (state <= 0) return 3;
      return state - 1;
    });

  const handleNextImageGallery = () =>
    setGalleryModePreviewIndex((state) => {
      if (state >= 3) return 0;
      return state + 1;
    });

  const handlePreviousImageGallery = () =>
    setGalleryModePreviewIndex((state) => {
      if (state <= 0) return 3;
      return state - 1;
    });

  return {
    mobileImgPreviewIndex,
    galleryModePreviewIndex,
    setMobileImgPreviewIndex,
    setGalleryModePreviewIndex,
    handleNextImage,
    handlePreviousImage,
    handleNextImageGallery,
    handlePreviousImageGallery,
  };
}

export default usePreviewImgIndex;
