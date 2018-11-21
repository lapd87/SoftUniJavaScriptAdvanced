function domSearch(selector, caseSensitive) {

    let element = $(selector);

    let addDiv = $("<div class='add-controls'>")
        .append($("<label>Enter text:<input id='input'></label>"))
        .append($("<a class='button'>Add</a>")
            .on('click', addText));

    let searchDiv = $("<div class='search-controls'>")
        .append($("<label>Search:</label>")
            .append($("<input id='searched'>")
                .on('input', searchText)));

    let resultDiv = $("<div class='result-controls'>")
        .append($("<ul class='items-list'></ul>"));

    element.append(addDiv);
    element.append(searchDiv);
    element.append(resultDiv);


    function addText() {
        let input = $("#input");

        let li = $("<li class='list-item'>")
            .append($("<a class='button'>X</a>")
                .on('click', removeItem))
            .append(`<strong>${input.val()}</strong>`);

        $(".items-list").append(li);
        input.val("");
    }

    function searchText() {
        let searched = $("#searched").val();

        if (searched === undefined) {
            searched = "";
        }

        let pattern = new RegExp(searched, "gi");

        if (caseSensitive) {
            pattern = new RegExp(searched, "g");
        }

        let list = $(".list-item");

        for (let li of list) {
            if (pattern.test($(li).find("strong").text())) {
                $(li).css("display", "block");
            } else {
                $(li).css("display", "none");
            }
        }
    }

    function removeItem() {
        $(this).parent().remove()
    }
}

