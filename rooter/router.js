import Route from "./route.js";
import { allRoutes, websiteName } from "./allroute.js";

const route404 = new Route("404", "Page introuvable", "/pages/404.html");

const getRouteByUrl = (url) => {
    let currentRoute = null;
    allRoutes.forEach((element) => {
    if (element.url == url) {
        currentRoute = element;
    }
    });
    if (currentRoute != null) {
    return currentRoute;
    } else {
    return route404;
    }
};

const LoadContentPage = async () => {
    const path = window.location.pathname;
    const actualRoute = getRouteByUrl(path);
    const html = await fetch(actualRoute.pathHtml).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;

    if (actualRoute.pathJS != "") {
    var scriptTag = document.createElement("script");
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.setAttribute("src", actualRoute.pathJS);

    document.querySelector("body").appendChild(scriptTag);
    }

    document.title = actualRoute.title + " - " + websiteName;
};

const routeEvent = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    LoadContentPage();
};

window.onpopstate = LoadContentPage;
window.route = routeEvent;
LoadContentPage();

var titi = "dod";