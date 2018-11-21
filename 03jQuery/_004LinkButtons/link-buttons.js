function attachEvents() {

    $(".button").on('click', attachEvent);

    function attachEvent() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}