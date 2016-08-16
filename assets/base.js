jQuery.getParam = function (name) {
    var r = window.location.search.substr(1).match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)"));
    if (r != null) return decodeURIComponent(r[2]); return null;
};

$(function() {
    $('#btn_back').on('click', function() {
        window.history.back();
    });
});