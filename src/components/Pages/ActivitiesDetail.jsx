import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { initialData } from "./data";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import ImageCarousel from "../ImageCarousel";
import { useTranslation } from "../../hooks/useTranslation";

const ActivitiesDetail = () => {
  const { id } = useParams();
  const { t, language } = useTranslation();

  /* =========================
     Loading State
  ========================== */
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  /* =========================
     Gallery States
  ========================== */
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectMode, setSelectMode] = useState(false);

  /* =========================
     Modal States
  ========================== */
  const [previewIndex, setPreviewIndex] = useState(null);

  /* =========================
     Fetch Data (simulate async)
  ========================== */
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const found = initialData.find((item) => item.id == id);
      setData(found);
      setLoading(false);
    }, 1000); // simulate API delay
  }, [id]);

  /* =========================
     Keyboard Controls
  ========================== */
  useEffect(() => {
    if (previewIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [previewIndex]);

  /* =========================
     Helpers
  ========================== */
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!data) return <p className="text-center mt-20">No data found</p>;

  const images = data.Children?.map((c) => c.image) || [];

  const currentTitle =
    language === "en" ? data.title : data.titleKm || data.title;
  const currentDescription =
    language === "en"
      ? data.description
      : data.descriptionKm || data.description;

  const sanitizeFilename = (str) =>
    str
      ?.toString()
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_\-\.]/g, "") || "download";

  /* =========================
     Modal Controls
  ========================== */
  const openModal = (index) => setPreviewIndex(index);
  const closeModal = () => setPreviewIndex(null);

  const nextImage = () =>
    setPreviewIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setPreviewIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  /* =========================
     Selection Controls
  ========================== */
  const toggleImageSelection = (id) => {
    setSelectedImages((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelectMode = () => {
    setSelectMode(!selectMode);
    setSelectedImages([]);
  };

  /* =========================
     Download
  ========================== */
  const downloadImage = async (url, filename) => {
    const res = await fetch(url);
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <div className="mt-20 mb-8 px-4">
        <ImageCarousel
          images={[data.imgUrl, ...images]}
          title={currentTitle}
          autoScroll
        />
      </div>

      {/* ================= DESCRIPTION ================= */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="card bg-base-100 shadow">
          <div className="card-body ">
            <h2 className="card-title text-3xl">{currentTitle}</h2>
            <p className="text-gray-600">{currentDescription}</p>
          </div>
        </div>
      </div>

      {/* ================= IMAGE GRID ================= */}
      <div className="columns-2 md:columns-4 lg:columns-6 gap-2 px-2 pb-4">
        {data.Children?.map((child, index) => (
          <div
            key={child.id}
            className="relative group break-inside-avoid mb-6"
          >
            <img
              src={child.image}
              alt=""
              onClick={() => !selectMode && openModal(index)}
              className={`w-full rounded-lg shadow cursor-zoom-in
                ${selectMode && selectedImages.includes(child.id)
                  ? "ring-4 ring-primary opacity-80"
                  : ""
                }`}
            />

            {selectMode && (
              <input
                type="checkbox"
                checked={selectedImages.includes(child.id)}
                onClick={(e) => e.stopPropagation()}
                onChange={() => toggleImageSelection(child.id)}
                className="checkbox checkbox-primary absolute top-2 left-2"
              />
            )}

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

      {/* ================= CONTROLS ================= */}
      <div className="ml-4 mb-10 flex gap-4">
        <Link to="/" className="btn btn-outline btn-primary">← Back</Link>
        {/* <button onClick={toggleSelectMode} className="btn btn-primary">
          {selectMode ? "Cancel" : "Select"}
        </button> */}
      </div>

      {/* ================= MODAL ================= */}
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
              onClick={closeModal}
              className="absolute top-4 right-4 btn btn-circle btn-sm bg-white"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle bg-white"
            >
              <ChevronLeft />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle bg-white"
            >
              <ChevronRight />
            </button>

            <img
              src={images[previewIndex]}
              alt=""
              className="max-h-[90vh] mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ActivitiesDetail;
