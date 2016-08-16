$(function() {
    $('#btn_search').on('click', function() {
        var key = $('#input_key').val().trim();
        if (!key) return;
        window.location = '?key=' + key;
    });
});