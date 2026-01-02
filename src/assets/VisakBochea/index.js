// src/photos/index.js

const modules = import.meta.glob('./VisakBochea[0-9]*.jpg', { eager: true });

const VisakBocheaPhoto = Object.values(modules).map(module => module.default);

import VisakBocheaMain from "./VisakBocheaMain.jpg";
export { VisakBocheaPhoto, VisakBocheaMain };
