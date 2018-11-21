let BaseElement = require("./base-element");

class Article extends BaseElement {

    constructor(title, content) {
        super();
        this.title = title;
        this.content = content;
        this.timestamp = new Date().getTime();
    }

    getElementString() {
        return `<div class="article">
                    <div class="article-title">${this.title}</div>
                    <p>${this.content}</p>
                </div>`;
    }
}

module.exports = Article;