function attachEvents() {

    $("#items li").on('click', selectDeselect);

    $("#showTownsButton").on('click', showSelected);

    let selectedAttribute = "data-selected";

    function selectDeselect() {
        if ($(this).attr(selectedAttribute)) {
            $(this).removeAttr(selectedAttribute);
            $(this).css("background", "");
        } else {
            $(this).attr(selectedAttribute, true);
            $(this).css("background", "#DDD");
        }
    }

    function showSelected() {

        let selected = $(`#items li[${selectedAttribute}=true]`);

        let towns = selected.toArray().map(s => s.textContent);

        $("#selectedTowns").text(towns.join(", "));
    }
}