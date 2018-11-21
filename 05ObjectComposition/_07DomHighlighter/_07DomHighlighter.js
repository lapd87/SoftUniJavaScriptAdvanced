function domHighlighter(selector) {
    let element = $(selector);

    let deepest = element;
    let next = deepest.children();

    while (next.length) {
        deepest = next.first();
        next = next.children();
    }

    deepest.addClass("highlight");
    deepest.parentsUntil(element.parent())
        .addClass("highlight");
}