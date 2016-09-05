$(function() {
    $('#btn_search').click(function() {
        var key = $('#input_key').val().trim();
        if (!key) return;
        window.location = '?key=' + key;
    });

    $('#input_key').focus(function() {
        $('#app_download').hide();
    }).blur(function() {
        $('#app_download').show();
    });
});