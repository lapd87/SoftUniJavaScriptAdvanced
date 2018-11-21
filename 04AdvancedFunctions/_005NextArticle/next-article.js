function getArticleGenerator(articles) {

    let resultDiv = $("#content");

    return function () {
        if (articles.length > 0) {
            let article = articles.shift();

            resultDiv.append($(`<article><p>${article}</p></article>`));
        }
    }
}
