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
            $('#res_title').html(result['name']);
            var basic = '资料大小：' + result['size'] + 'KB<br />';
            basic += '下载所需：' + result['point'] + '米粒<br />';
            basic += '收藏次数：' + result['collectCount'] + '<br />';
            basic += '下载次数：' + result['downloadCount'] + '<br />';
            $('#res_basic').html(basic);
            $('#res_desc').html(result['description']);
            for (var key in result['tags']) {
                $('#res_tags').append('<span>' + result['tags'][key]['name'] + '</span>');
            }
        }
    });
});