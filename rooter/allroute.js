import Route from "./route.js";

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/services", "Services", "/pages/services.html"),
    new Route("/jungle", "Jungle", "/pages/jungle.html", "/js/jungle.js"),
    new Route("/savane", "Savane", "/pages/savane.html", "/js/savane.js"),
    new Route("/marais", "Marais", "/pages/marais.html", "/js/marais.js"),
    new Route("/connexion", "Connexion", "/pages/connexion.html"),
];

export const websiteName = "Zoo Arcadia";