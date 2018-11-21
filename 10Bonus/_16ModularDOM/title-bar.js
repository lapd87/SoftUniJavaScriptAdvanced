let BaseElement = require("./base-element");

class TitleBar extends BaseElement {

    constructor(title) {
        super();
        this.title = title;
        this.links = [];
    }

    addLink(href, name) {
        this.links.push({href, name})
    }


    getElementString() {
        return `<header class="header">
                    <div><span class="title">{Title Bar Problem}</span></div>
                        <div>
                            <nav class="menu">`
            + this.links
                .map(l => `<a class="menu-link" href="${l.href}">${l.name}</a>`)
                .join("|") +
            `</nav>
                        </div>
                </header>`;
    }
}

module.exports = TitleBar;