jQuery.getParam = function (name) {
    var r = window.location.search.substr(1).match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)"));
    if (r != null) return decodeURIComponent(r[2]); return null;
};

$(function() {
    var key = $.getParam('key');
    $('#input_key').val(key);
});