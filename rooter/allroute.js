import Route from "./route.js";

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/services", "Services", "/pages/services.html"),
    new Route("/jungle", "Jungle", "/pages/jungle.html"),
    new Route("/savane", "Savane", "/pages/savane.html"),
    new Route("/marais", "Marais", "/pages/marais.html"),
];

export const websiteName = "Zoo Arcadia";