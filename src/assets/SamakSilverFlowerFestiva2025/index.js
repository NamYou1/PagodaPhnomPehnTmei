const modules = import.meta.glob('./SamakSilverFlower[0-9]*.jpg', { eager: true });

const SamakSilverFlowerFestivalPhoto = Object.values(modules).map(module => module.default);


import SamakSilverFlowerFestivalMain from "./SamakSilverFlowerFestivalMain.jpg";

export { SamakSilverFlowerFestivalPhoto, SamakSilverFlowerFestivalMain };