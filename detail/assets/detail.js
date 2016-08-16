$(function() {
    var id = $.getParam('id');
    if (!id) {
        window.location = '../';
    }
    // fetch preview
    var preview_url = '../proxy.php?query=' + encodeURIComponent('Home/FilePreview/available?resourceId=' + id);
    $.getJSON(preview_url, function(data, status, xhr) {
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
    $.getJSON(url, function(data, status, xhr) {
        $('#loading').hide();
        if (!data.result) {
            window.location = '../';
        } else {
            var result = data.result;
            $('#res_title').html(result['name']);
            var desc = result['ext'].toUpperCase() + '文件';
            desc += ' ' + result['size'] + 'KB';
            desc += '  上传者：' + result['uploader'] + '<br />';
            desc += ' ' + result['point'] + '米粒';
            desc += ' ' + result['downloadCount'] + '次下载';
            desc += ' ' + result['collectCount'] + '次收藏';
            desc += ' ' + result['uploadTime'];
            $('#res_desc').html(desc);
            for (var key in result['tags']) {
                $('#res_tags').append('<span>' + result['tags'][key]['name'] + '</span>');
            }
        }
    });
});