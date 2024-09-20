import Route from "./route.js";

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/services", "Services", "/pages/services.html"),
    new Route("/jungle", "Jungle", "/pages/jungle.html"),
];

export const websiteName = "Zoo Arcadia";