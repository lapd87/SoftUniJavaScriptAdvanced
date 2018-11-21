class Post {

    constructor(title, body, author) {
        this.title = title;
        this.body = body;
        this.author = author;
    }


    addToSelector(selector) {
        $(selector).append(this.domRepresentation());
    }

    domRepresentation() {
        return `<div class="post ${this.author}">
                    <h3 class="title">${this.title}</h3>
                    <p class="body">${this.body}</p>
                    <p class="author">${this.author}</p>
                </div>`;
    }
}

module.exports = Post;