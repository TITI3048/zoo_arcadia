export default class route {
        constructor(url, title, pathHtml, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
        }
    }