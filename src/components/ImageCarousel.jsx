import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images, title, autoScroll = true, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto scroll effect
    useEffect(() => {
        if (!autoScroll || images.length === 0) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, autoScroll, interval]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (!images || images.length === 0) {
        return <div className="text-center py-8">No images available</div>;
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            {/* Main Carousel Section */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-72 sm:h-96 md:h-[500px] mb-6">
                {/* Images */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Title Overlay - Bottom Left */}
                {title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent p-6 md:p-8">
                        <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg">{title}</p>
                    </div>
                )}

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 btn btn-circle btn-sm md:btn-md bg-white/70 hover:bg-white text-black z-20 shadow-lg"
                    aria-label="Previous image"
                >
                    ❮
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 btn btn-circle btn-sm md:btn-md bg-white/70 hover:bg-white text-black z-20 shadow-lg"
                    aria-label="Next image"
                >
                    ❯
                </button>

                {/* Image Counter - Top Right */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex gap-2 sm:gap-3 mx-auto">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${index === currentIndex
                                ? 'border-primary scale-105 h-20 w-24 md:h-24 md:w-32'
                                : 'border-gray-300 hover:border-primary h-16 w-20 md:h-20 md:w-28 hover:scale-105'
                                }`}
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Dot Indicators
            <div className="flex gap-2 justify-center mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-primary w-3 h-3 md:w-4 md:h-4'
                            : 'bg-gray-300 hover:bg-gray-400 w-2 h-2 md:w-3 md:h-3'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default ImageCarousel;
