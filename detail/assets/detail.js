$(function() {
    var id = $.getParam('id');
    if (!id) {
        window.location = '../';
    }
    // fetch preview
    var preview_url = '../proxy.php?query=' + encodeURIComponent('Home/FilePreview/available?resourceId=' + id);
    $.getJSON(preview_url, function(data) {
        if (data.result == 1) {
            $('#res_preview').html('<img src="http://mebox.top/Home/FilePreview/picture?resourceId='+id+'" alt="资料预览" />');
        } else {
            $('#res_preview').html('该资料暂无预览~');
        }
    });
    $('#res_preview').on('click', 'img', function() {
        window.location = 'http://mebox.top/Home/FilePreview/previewResource?resourceId=' + id;
    });
    // fetch detail
    var url = '../proxy.php?query=' + encodeURIComponent('Home/Resource/getResourceDetail?id=' + id);
    $.getJSON(url, function(data) {
        $('#loading').hide();
        if (!data.result) {
            window.location = '../';
        } else {
            var result = data.result;
            $('#title').html(result['name']);
            var basic = '资料大小：' + result['size'] + ' KB<br />';
            basic += '下载所需：' + result['point'] + ' 米粒<br />';
            basic += '收藏次数：' + result['collectCount'] + '<br />';
            basic += '下载次数：' + result['downloadCount'] + '<br />';
            $('#basic_info').html(basic);
            $('#description').html(result['description']);
            $('#comment_count').html(result['commentCount']);
            for (var key in result['tags']) {
                $('#tags').append('<span>' + result['tags'][key]['name'] + '</span>');
            }
        }
    });
    // fetch comments
    var comment_url = '../proxy.php?query=' + encodeURIComponent('Home/Resource/getComments?page=0&num=3&id=' + id);
    $.getJSON(comment_url, function(data) {
        $('#loading').hide();
        if (data.result && data.result.length > 0) {
            for (var key in data.result) {
                var comment = data.result[key];
                var head_url = comment['user']['iconUrl'];
                if (head_url == '') {
                    head_url = 'http://mebox.top/Public/img/user_default.png';
                }
                var username = comment['user']['name'];
                if (username == '') {
                    username = '米盒用户';
                }
                $('#res_comments').append('<div>\
                    <img src="' + head_url + '" />\
                    <div>\
                        <div>' + username + '</div>\
                        <div>' + comment['content'] + '</div>\
                        <div><img src="assets/like.svg" />(' + comment['praiseCount'] + ')\
                        <img src="assets/reply.svg">(' + comment['replyNum'] + ')</div>\
                    </div>\
                </div>');
            }
        }
    });
});