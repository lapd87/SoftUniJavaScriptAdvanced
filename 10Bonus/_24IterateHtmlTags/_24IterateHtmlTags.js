function* extractTags(input) {
    let regex = /(<.+?>)/g;

    let match;
    while (match = regex.exec(input))
        yield match[0];
}


let html = `<html><body>
<p align='center'><span lang='en'>Hello</span>, HTML
</p> Bye, bye</body></html>`;
for (let tag of extractTags(html)) {
    console.log(tag);
}
