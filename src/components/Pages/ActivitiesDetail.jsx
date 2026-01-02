import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { initialData } from "./data";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import ImageCarousel from "../ImageCarousel";
import { useTranslation } from "../../hooks/useTranslation";

const ActivitiesDetail = () => {
  const { id } = useParams();
  const data = initialData.find((item) => item.id == id);

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectMode, setSelectMode] = useState(false);

  // 🔹 Modal states
  const [previewIndex, setPreviewIndex] = useState(null);

  const { language } = useTranslation();
  const currentTitle =
    language === "en" ? data.title : data.titleKm || data.title;
  const currentDescription =
    language === "en"
      ? data.description
      : data.descriptionKm || data.description;

  // 🔹 All images for modal navigation
  const images = data.Children?.map((c) => c.image) || [];

  const sanitizeFilename = (str) => {
    if (!str) return "download";
    return str
      .toString()
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_\-\u1780-\u17FF]/g, "");
  };

  const toggleImageSelection = (childId) => {
    setSelectedImages((prev) =>
      prev.includes(childId)
        ? prev.filter((id) => id !== childId)
        : [...prev, childId]
    );
  };

  const downloadImage = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  // 🔹 Modal navigation
  const closeModal = () => setPreviewIndex(null);

  const prevImage = () => {
    setPreviewIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setPreviewIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // 🔹 Keyboard support
  useEffect(() => {
    const handleKey = (e) => {
      if (previewIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [previewIndex]);

  return (
    <>
      {/* 🔹 Hero Carousel */}
      <div className="mt-20 mb-8 px-4">
        <ImageCarousel
          images={[data.imgUrl, ...images]}
          title={currentTitle}
          autoScroll
        />
      </div>

      {/* 🔹 Description */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-3xl">{currentTitle}</h2>
            <p className="text-gray-600">{currentDescription}</p>
          </div>
        </div>
      </div>

      {/* 🔹 Image Grid */}
      <div className="columns-2 md:columns-4 lg:columns-6 gap-2 px-2 pb-4">
        {data.Children?.map((child, index) => (
          <div
            key={child.id}
            className="relative group break-inside-avoid mb-6"
          >
            <img
              src={child.image}
              alt={child.id}
              onClick={() => !selectMode && setPreviewIndex(index)}
              className={`w-full rounded-lg shadow-md cursor-zoom-in transition
                ${selectMode && selectedImages.includes(child.id)
                  ? "ring-4 ring-primary opacity-80"
                  : ""
                }`}
            />

            {/* Checkbox */}
            {selectMode && (
              <input
                type="checkbox"
                checked={selectedImages.includes(child.id)}
                onClick={(e) => e.stopPropagation()}
                onChange={() => toggleImageSelection(child.id)}
                className="checkbox checkbox-primary checkbox-lg absolute top-2 left-2"
              />
            )}

            {/* Download */}
            {!selectMode && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  downloadImage(
                    child.image,
                    `${sanitizeFilename(currentTitle)}-${index + 1}.jpg`
                  );
                }}
                className="absolute top-2 right-2 btn btn-circle btn-sm bg-white opacity-0 group-hover:opacity-100"
              >
                <Download size={16} />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* 🔹 Modal */}
      {previewIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 btn btn-circle btn-sm bg-white"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle bg-white"
            >
              <ChevronLeft />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle bg-white"
            >
              <ChevronRight />
            </button>

            {/* Image */}
            <img
              src={images[previewIndex]}
              className="max-h-[90vh] mx-auto rounded-lg shadow-2xl"
              alt="Preview"
            />
          </div>
        </div>
      )}

      {/* 🔹 Footer Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <Link to="/" className="btn btn-outline btn-primary">
          ← Back
        </Link>
      </div>
    </>
  );
};

export default ActivitiesDetail;
