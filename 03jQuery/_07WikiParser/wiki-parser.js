function wikiParser(selector) {

    let element = $(selector);

    let text = element.text();

    let boldPattern = /'''(.+?)'''/g;
    let italicPattern = /''(.+?)''/g;
    let h3Pattern = /===(.+?)===/g;
    let h2Pattern = /==(.+?)==/g;
    let h1Pattern = /=(.+?)=/g;
    let singleLinkPattern = /\[\[([^\[|]+?)]]/g;
    let doubleLinkPattern = /\[\[([^\[]+?)\|([^\[]+?)]]/g;

    text = text.replace(boldPattern, "<b>$1</b>")
        .replace(italicPattern, "<i>$1</i>")
        .replace(h3Pattern, "<h3>$1</h3>")
        .replace(h2Pattern, "<h2>$1</h2>")
        .replace(h1Pattern, "<h1>$1</h1>")
        .replace(singleLinkPattern, function (match, capture) {
            return `<a href='/wiki/${capture}'>${capture}</a>`;
        })
        .replace(doubleLinkPattern, function (match, capture1, capture2) {
            return `<a href='/wiki/${capture1}'>${capture2}</a>`;
        });

    element.html(text);
}

