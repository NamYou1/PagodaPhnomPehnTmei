const modules = import.meta.glob('./Mahabali[0-9]*.jpg', { eager: true });

const MahabaliPhoto = Object.values(modules).map(module => module.default);


import MahabaliMain from "./MahabaliMain.jpg";

export { MahabaliPhoto, MahabaliMain };