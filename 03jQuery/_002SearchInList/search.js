function search() {

    let searched = $("#searchText").val().toLowerCase();

    let list = $("#towns li");

    list.css("font-weight", "");

    let matchesCount = 0;
    list.each((index, item) => {
        if (item.textContent.toLowerCase().includes(searched)) {
            $(item).css("font-weight", "bold");
            matchesCount++;
        }
    });


    $("#result").text(matchesCount + " matches found.");
}