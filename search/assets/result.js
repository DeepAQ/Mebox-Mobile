$(function() {
    function load_result(key, page) {
        var param = 'num=10&key='+key+'&page='+page;
        if (order != null) {
            param += '&order=' + order;
        }
        var url = '../proxy.php?query=' + encodeURIComponent('Home/Search/SearchResource/?' + param);
        $('#loading').show();
        $.getJSON(url, function(data) {
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
                            <img src="assets/filetype/geticon.php?ext=' + ext + '" />\
                        </div>\
                        <div>\
                            <div>' + item['name'] + '</div>\
                            <div>' + ext + '文件 </div>\
                        </div>\
                        <div>\
                            <div>' + item['user']['nickname'] + '</div>\
                            <div>' + item['commentCount'] + '条评论</div>\
                        </div>\
                    </div>');
                }
            }
        });
    }

    function reload_page() {
        var new_url = '?key=' + key;
        if (order != null) {
            new_url += '&order=' + order;
        }
        window.location = new_url;
    }

    var key = $.getParam('key');
    var order = $.getParam('order');

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

    if (order != null) {
        $('#' + order).addClass('selected');
    }
    $('.btn_sort').click(function() {
        if ($(this).hasClass('selected')) return;
        order = $(this).attr('id');
        reload_page();
    });
});