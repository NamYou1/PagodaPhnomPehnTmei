const modules = import.meta.glob('./MeakBochea[0-9]*.jpg', { eager: true });

const MeakBocheaPhoto = Object.values(modules).map(module => module.default);

import MeakBocheaMain from "./MeakBocheaMain.jpg";

export { MeakBocheaPhoto, MeakBocheaMain   };