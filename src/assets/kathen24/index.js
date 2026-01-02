const modules = import.meta.glob('./kathen[0-9]*.jpg', { eager: true });

const kathen24Photo = Object.values(modules).map(module => module.default);


import KathenMain from "./kathenMain.jpg";

export { kathen24Photo, KathenMain };