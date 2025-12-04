import React, { Children, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import { initialData } from "./data";


const Activities = () => {

    const [Data, SetData] = useState(initialData);
    const navigate = useNavigate();
    const { t, language } = useTranslation();
    const handleCardClick = (id) => {
        navigate(`/Activities/${id}`);
    };

    return (
        <div className="mt-0 md:mt-20">

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
                        <div className="card-body flex justify-between">
                            <h2 className="card-title text-lg font-semibold">
                                {language === 'en' ? title : titleKm}
                            </h2>
                            <p className="text-xs text-primary font-semibold">{year}</p>
                            <p className="text-sm text-gray-500">
                                {language === 'en' ? description : descriptionKm}
                            </p>
                            {/* <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">
                {t('home.viewDetails')}
                </button>
                </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Activities
// 

