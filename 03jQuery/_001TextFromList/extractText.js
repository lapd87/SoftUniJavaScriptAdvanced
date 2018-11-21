function extractText() {

    let list = $("#items li").toArray()
        .map(li => li.textContent);

    $("#result").text(list.join(", "));
}