const modules = import.meta.glob('./AlmsbowlMeakBochea[0-9]*.jpg', { eager: true });

const AlmsbowlMeakBocheaPhoto = Object.values(modules).map(module => module.default);


import AlmsbowlMeakBocheaMain from "./AlmsbowlMeakBocheaMain.jpg";

export { AlmsbowlMeakBocheaPhoto, AlmsbowlMeakBocheaMain };