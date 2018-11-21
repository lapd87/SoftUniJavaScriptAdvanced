function initializeTable() {

    let initialData = new Map();
    initialData.set("Bulgaria", "Sofia");
    initialData.set("Germany", "Berlin");
    initialData.set("Russia", "Moscow");

    let newCountryText = $("#newCountryText");
    let newCapitalText = $("#newCapitalText");

    for (let [country, capital] of initialData) {
        newCountryText.val(country);
        newCapitalText.val(capital);
        createCountry();
    }

    newCountryText.val("");
    newCapitalText.val("");
    $("#createLink").on('click', createCountry);


    function createCountry() {
        let country = newCountryText.val();
        let capital = newCapitalText.val();

        let row = $("<tr>")
            .append($("<td>").text(country))
            .append($("<td>").text(capital))
            .append($("<td>")
                .append($("<a href='#'>[Up]</a>")
                    .on('click', moveRowUp))
                .append($("<a href='#'>[Down]</a>")
                    .on('click', moveRowDown))
                .append($("<a href='#'>[Delete]</a>")
                    .on('click', deleteRow)));

        row.css("display", "none");

        $("#countriesTable").append(row);

        row.fadeIn();
        firstLastRowLinks();
    }

    function moveRowUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertBefore(row.prev());
            row.fadeIn();
            firstLastRowLinks();
        })
    }

    function moveRowDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertAfter(row.next());
            row.fadeIn();
            firstLastRowLinks();
        })
    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
            firstLastRowLinks();
        })
    }

    function firstLastRowLinks() {

        $("#countriesTable a").css("display", "inline");

        let rows = $("#countriesTable tr");

        $(rows[2]).find("a:contains('Up')")
            .css("display", "none");
        $(rows[rows.length - 1]).find("a:contains('Down')")
            .css("display", "none");
    }
}