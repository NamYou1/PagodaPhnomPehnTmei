import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { initialData } from "./CardInformation";

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

    const relatedActivities =
        selectedCard.year === 2025
            ? initialData.filter(
                (item) => item.id !== selectedCard.id && item.year === 2025
            )
            : initialData.filter((item) => item.id !== selectedCard.id);

    return (
        <div key={activeId} className="p-4 md:p-8 max-w-5xl mx-auto">
            {/* Title + Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-6 gap-4">
                <h1 className="text-2xl md:text-4xl font-bold text-primary">
                    {selectedCard.title}
                </h1>

                <div className="flex gap-2 ">
                    <button className="btn btn-sm" onClick={() => navigate(-1)}>
                        Back
                    </button>


                    <div className="badge badge-primary mb-6 text-sm md:text-base">
                        {selectedCard.year}
                    </div>
                </div>
            </div>

            {/* Year */}


            {/* Image (fully responsive) */}
            <div className="mb-8">
                <img
                    src={selectedCard.imgUrl}
                    alt={selectedCard.title}
                    className="w-full max-h-[450px] object-cover rounded-xl shadow-lg"
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

            {/* More Activities (related) */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">More Activities {selectedCard.year === 2025 ? '(2025 only)' : ''}</h2>

                {relatedActivities.length === 0 ? (
                    <p className="text-gray-500">No other activities found{selectedCard.year === 2025 ? ' for 2025' : ''}.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {relatedActivities.map(({ id, imgUrl, title, description, year }) => (
                            <Link
                                key={id}
                                to={`/details/${id}`}
                                className="card bg-base-100 shadow-md cursor-pointer hover:shadow-xl hover:scale-[1.02] transition duration-200"
                            >
                                <figure>
                                    <img src={imgUrl} alt={title} className="w-full h-36 object-cover" />
                                </figure>
                                <div className="card-body p-4">
                                    <h3 className="card-title text-lg">{title}</h3>
                                    <p className="text-xs text-primary font-semibold">{year}</p>
                                    <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardInformationDetail;
