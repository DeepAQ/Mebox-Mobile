$(function() {
    function load_result(key, page) {
        var url = '../proxy.php?query=' + encodeURIComponent('Home/Resource/searchEx?num=10&key='+key+'&page='+page);
        $('#loading').show();
        $.getJSON(url, function(data, status, xhr) {
            $('#loading').hide();
            if (!data.result || !data.result.list || data.result.list.length == 0) {
                $('#error').show();
                $('#more').hide();
            } else {
                $('#more').show();
                window.current_page = page + 1;
                for (var key in data.result.list) {
                    var item = data.result.list[key];
                    var ext = item['ext'].toUpperCase();
                    $('#results').append('\
                    <div class="item" data:id="' + item['id'] + '">\
                        <div>\
                            <div>' + item['name'] + '</div>\
                            <div><img src="http://mebox.top/Public/img/typeIcon/'+ext+'.svg" alt="'+ext+'" /></div>\
                        </div>\
                        <div>\
                            <div>' + item['uploader'] + '</div>\
                            <div>' + item['commentCount'] + '条评论</div>\
                        </div>\
                    </div>');
                }
            }
        });
    }

    var key = $.getParam('key');
    $('#input_key').val(key);
    $('#btn_search').on('click', function() {
        var key = $('#input_key').val().trim();
        if (!key) return;
        window.location = '?key=' + key;
    });
    $('#results').on('click', '.item', function() {
        window.location = '../detail/?id=' + $(this).attr('data:id');
    });

    window.current_page = 0;
    load_result(key, 0);
    $(window).on('scroll', function() {
        if ($(document).height() - $(window).height() - $(document).scrollTop() <= 1) {
            if (window.current_page > 0 && !$('#loading').is(':visible') && !$('#error').is(':visible')) {
                load_result(key, window.current_page);
            }
        }
    });
});