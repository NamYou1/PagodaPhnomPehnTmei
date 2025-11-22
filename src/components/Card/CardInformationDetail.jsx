import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CardInformation, { initialData } from "./CardInformation";

const CardInformationDetail = ({ cardId }) => {
    const params = useParams();
    const navigate = useNavigate();

    const paramId = params?.id ? parseInt(params.id, 10) : undefined;
    const activeId = cardId ?? paramId;

    const selectedCard = activeId
        ? initialData.find((item) => item.id === activeId)
        : initialData[0];

    if (!selectedCard) {
        return (
            <div className="text-center p-6 md:p-10">
                <p className="mb-4 text-sm md:text-base">Card not found</p>
                <button className="btn btn-sm md:btn" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        );
    }


    return (

        <>
            <div key={activeId} className="p-4 md:p-8 max-w-5xl mx-auto">
                {/* Title + Buttons */}

                <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-6 gap-4">
                    <button className="btn btn-sm" onClick={() => navigate(-1)}>
                        Back
                    </button>

                    <h1 className="text-2xl md:text-4xl font-bold text-primary">
                        {selectedCard.title}
                    </h1>

                    <div className="flex gap-2 ">

                        {/* 
                    <div className="badge badge-primary mb-6 text-sm md:text-base">
                        {selectedCard.year}
                    </div> */}
                    </div>
                </div>

                {/* Year */}


                {/* Image (fully responsive) */}
                <div className="mb-8 flex justify-center">
                    <img
                        src={selectedCard.imgUrl}
                        alt={selectedCard.title}
                        className="w-full h-auto object-contain rounded-xl shadow-lg"
                    />
                </div>

                {/* Description */}
                <div className="mb-10">
                    <h2 className="text-xl md:text-2xl font-semibold mb-3">
                        Description
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {selectedCard.description}
                    </p>
                </div>

            </div>
            <CardInformation />
        </>
    );
};

export default CardInformationDetail;
