let Article = require("./article");

class TableArticle extends Article {

    constructor(title, content) {
        super(title, content);
        this.headings = null;
        this.data = null;
    }

    loadData(headings, data) {
        this.headings = headings;
        this.data = data;
    }

    getElementString() {
        return `<div class="article">
                    <div class="article-title">${this.title}</div>
                    <p>${this.content}</p>
                    <div class="table">
                        <table class="data">
                            <tr>`
            + this.headings
                .map(h => `<th>${h}</th>`)
                .join("")
            + `             </tr>`
            + this.data
                .map(obj => `<tr>${Object.keys(obj)
                    .map(prop => `<td>${obj[prop]}</td>`)
                    .join("")}</tr>`)
                .join("\n")
            + `        </table>
                    </div>
                </div>`;
    }
}

module.exports = TableArticle;