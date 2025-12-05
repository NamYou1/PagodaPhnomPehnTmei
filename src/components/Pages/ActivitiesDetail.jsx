import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { initialData } from "./data";
import { Download } from "lucide-react";
import ImageCarousel from "../ImageCarousel";
import { useTranslation } from "../../hooks/useTranslation";

const ActivitiesDetail = () => {
  const { id } = useParams();
  const data = initialData.find((item) => item.id == id);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectMode, setSelectMode] = useState(false);
  const { t, language } = useTranslation();
  const currentTitle =
    language === "en" ? data.title : data.titleKm || data.title;
  const currentDescription =
    language === "en" ? data.description : data.descriptionKm || data.description;

  const sanitizeFilename = (str) => {
    if (!str) return "download";
    return str
      .toString()
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_\-\u00C0-\u024F\u1E00-\u1EFF\u1780-\u17FF\.]/g, "");
  };
  const toggleSelectMode = () => {
    setSelectMode(!selectMode);
    setSelectedImages([]);
  };

  const toggleImageSelection = (childId) => {
    if (selectedImages.includes(childId)) {
      setSelectedImages(selectedImages.filter((id) => id !== childId));
    } else {
      setSelectedImages([...selectedImages, childId]);
    }
  };

  const selectAll = () => {
    if (data.Children) {
      setSelectedImages(data.Children.map((child) => child.id));
    }
  };

  const deselectAll = () => {
    setSelectedImages([]);
  };

  const downloadSelectedPhotos = async () => {
    if (selectedImages.length === 0) {
      alert("Please select at least one photo to download");
      return;
    }

    if (data.Children) {
      for (let child of data.Children) {
        if (selectedImages.includes(child.id)) {
          const index = data.Children.findIndex((c) => c.id === child.id);
          await downloadImage(
            child.image,
            `${sanitizeFilename(currentTitle)}-${index + 1}.jpg`
          );
        }
      }
    }

    setSelectMode(false);
    setSelectedImages([]);
  };

  const downloadAllPhotos = async () => {
    // Download main image
    await downloadImage(data.imgUrl, `${sanitizeFilename(currentTitle)}-main.jpg`);

    // Download all children images
    if (data.Children) {
      for (let i = 0; i < data.Children.length; i++) {
        await downloadImage(
          data.Children[i].image,
          `${sanitizeFilename(currentTitle)}-${i + 1}.jpg`
        );
      }
    }
  };

  const downloadImage = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const downloadSingleImage = (url, filename) => {
    downloadImage(url, filename);
  };

  return (
    <>
      {/* Hero Section with Carousel */}
      <div className="mt-20 mb-8 px-4">
        <ImageCarousel
          images={[
            data.imgUrl,
            ...(data.Children ? data.Children.map((child) => child.image) : []),
          ]}
          title={currentTitle}
          autoScroll={true}
          interval={5000}
        />
      </div>

      {/* Description Card */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-2xl md:text-3xl">{currentTitle}</h2>
            <p className="text-gray-600 leading-relaxed">{currentDescription}</p>
          </div>
        </div>
      </div>

      <div className="grid  grid-cols- md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 pb-10">
        {data.Children &&
          data.Children.map((child, index) => (
            <div
              key={child.id}
              className="relative group cursor-pointer"
              onClick={() => selectMode && toggleImageSelection(child.id)}
            >
              <figure className="relative">
                <img
                  src={child.image}
                  alt={`${currentTitle} - Image ${child.id}`}
                  className={`w-full h-full object-cover rounded-lg shadow-md transition-all ${
                    selectMode && selectedImages.includes(child.id)
                      ? "ring-4 ring-primary opacity-80"
                      : ""
                  }`}
                />

                {/* Selection Checkbox */}
                {selectMode && (
                  <div className="absolute top-2 left-2">
                    <input
                      type="checkbox"
                      checked={selectedImages.includes(child.id)}
                      onChange={() => toggleImageSelection(child.id)}
                      className="checkbox checkbox-primary checkbox-lg"
                    />
                  </div>
                )}

                {/* Individual Download Button (only show when not in select mode) */}
                {!selectMode && (
                  <button
                    onClick={() =>
                      downloadSingleImage(
                        child.image,
                        `${sanitizeFilename(currentTitle)}-${index + 1}.jpg`
                      )
                    }
                    className="absolute top-2 right-2 btn btn-circle btn-sm bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Download this photo"
                  >
                    {/* 📥 */}
                    <Download />
                  </button>
                )}
              </figure>
            </div>
          ))}
      </div>

      {/* Download Controls */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap px-4">
        {!selectMode ? (
          <>
            <Link
              to="/"
              className="btn btn-outline btn-primary mb-6 mx-6"
            >
              ← Back
            </Link>
            <button onClick={downloadAllPhotos} className="btn btn-primary">
              <Download />Download All Photos
            </button>
            <button
              onClick={toggleSelectMode}
              className="btn btn-outline btn-primary"
            >
              ✓ Select Photos to Download
            </button>
          </>
        ) : (
          <>
            <button onClick={selectAll} className="btn btn-sm btn-outline">
              Select All
            </button>
            <button onClick={deselectAll} className="btn btn-sm btn-outline">
              Deselect All
            </button>
            <button
              onClick={downloadSelectedPhotos}
              className="btn btn-primary"
              disabled={selectedImages.length === 0}
            >
              <Download /> Download Selected ({selectedImages.length})
            </button>
            <button onClick={toggleSelectMode} className="btn btn-outline">
              Cancel
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ActivitiesDetail;
