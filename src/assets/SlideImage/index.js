
const modules = import.meta.glob('./flower[0-9]*.jpg', { eager: true });

const CarouselImage = Object.values(modules).map(module => module.default);
export default CarouselImage;