import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";

export const initialData = [
  {
    id: 1,
    title: "Mountain Adventure",
    titleKm: "កឋិនទាន",
    description:
      "Enjoy the breathtaking views and the thrill of climbing the majestic mountains.",
    descriptionKm:
      "រីករាយនឹងទិដ្ឋភាពដ៏អស្ចារ្យ និងភាពរំភើបក្នុងការឡើងលើភ្នំដ៏ស្ម័គ្រចឹត។",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    vdourl: "https://www.facebook.com/share/v/17SAmw2aMU/",
    year: 2024,
  },
  {
    id: 2,
    title: "Beach Relaxation",
    titleKm: "ការស្ងាកលំហែលើឆ្នេរ",
    description:
      "Experience peace and calm on golden sands with crystal clear waters.",
    descriptionKm:
      "រស់នៅក្នុងសន្តិភាព និងភាពស្ងាក់ស្ងៀមលើលាលモាលពណ៌មាស ដែលមានទឹក맑ស្វាគមន៍។",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: 2025,
  },
  {
    id: 3,
    title: "Forest Camping",
    titleKm: "ការព្យាបាលលើព្រៃ",
    description:
      "Reconnect with nature and enjoy a quiet night under a blanket of stars.",
    descriptionKm:
      "តភ្ជាប់ឡើងវិញជាមួយធម្មជាតិ ហើយរីករាយក្នុងការយប់ស្ងាក់ស្ងៀមក្រោមលាល별.",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: 2024,
  },
  {
    id: 4,
    title: "City Lights",
    titleKm: "ពន្លឺនៃក្រុងម្ហូប",
    description:
      "Explore vibrant nightlife, modern architecture, and endless entertainment.",
    descriptionKm:
      "ស្វាគមន៍ការរស់នៅយប់ដែលសកម្ម ស្ថាបត្យកម្មទេស និងការលេងល្ខោនដ៏គ្មានកំណត់។",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: 2025,
  },
];

const CardPhoto = () => { };

const CardInformation = () => {
  const [Data, SetData] = useState(initialData);
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      {" "}
      {/* 🧭 Section Title */}
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        {t('home.title')}
      </h2>
      {/* 🏕️ Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
        {Data.map(({ id, imgUrl, title, titleKm, description, descriptionKm, year }) => (
          <div
            key={id}
            className="card bg-base-100 shadow-md hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleCardClick(id)}
          >
            <figure>
              <img
                src={imgUrl}
                alt={language === 'en' ? title : titleKm}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold">
                {language === 'en' ? title : titleKm}
              </h2>
              <p className="text-xs text-primary font-semibold">{year}</p>
              <p className="text-sm text-gray-500">
                {language === 'en' ? description : descriptionKm}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">
                  {t('home.viewDetails')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardInformation;
