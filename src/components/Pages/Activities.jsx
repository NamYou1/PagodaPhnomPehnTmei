import React, { Children, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import { initialData } from "./data";


const Activities = () => {

    const [Data, SetData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedYear, setSelectedYear] = useState("all");
    const navigate = useNavigate();
    const { t, language } = useTranslation();
    
    const handleCardClick = (id) => {
        navigate(`/Activities/${id}`);
    };

    // Get unique years for filter
    const years = ["all", ...new Set(Data.map(item => item.year))].sort((a, b) => {
        if (a === "all") return -1;
        if (b === "all") return 1;
        return b - a;
    });

    // Filter data based on search and year
    const filteredData = Data.filter(item => {
        const matchesSearch = 
            (language === 'en' ? item.title : item.titleKm)
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        
        const matchesYear = selectedYear === "all" || item.year === selectedYear;
        
        return matchesSearch && matchesYear;
    });

    return (
        <div className="mt-0 md:mt-20">
            <h2 className="text-3xl font-bold text-center mb-4 text-primary">
                {t('home.title')}
            </h2>
            <div className="flex justify-center items-center flex-wrap">
                <input 
                    type="text" 
                    placeholder={t('activities.searchPlaceholder')} 
                    className="input input-info text-center rounded-2xl mb-2 md:w-[700px] lg:w-[1000px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Year Filter Buttons */}
            <div className="flex gap-2 justify-center items-center mb-6 flex-wrap md:gap-3">
                {years.map(year => (
                    <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`btn btn-outline transition-all ${
                            selectedYear === year
                                ? 'btn-primary'
                                : ''
                        }`}
                    >
                        {year === "all" 
                            ? (language === 'en' ? "All Years" : "ទាំងអស់")
                            : year}
                    </button>
                ))}
            </div>
            {/* 🏕️ Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
                {filteredData.length > 0 ? (
                    filteredData.map(({ id, imgUrl, title, titleKm, description, descriptionKm, year }) => (
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
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-10">
                        <p className="text-xl text-gray-500">
                            {language === 'en' 
                                ? "No activities found" 
                                : "រកមិនឃើញសកម្មភាព"}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};



export default Activities
// 

