$(function() {
    function load_result(key, page) {
        //Home/Search/SearchResource/?keyMap=[{"type":"school","name":"南京大学"},{"type":“department”,"name":"软件学院"},{"type":"course","name":"软件工程"},{"type":"key","name":"软件"}]&type=0
        var keymap = [];
        if (school && school != '') keymap.push({'type':'school','name':school});
        if (department && department != '') keymap.push({'type':'department','name':department});
        if (course && course != '') keymap.push({'type':'course','name':course});
        keymap.push({'type':'key','name':[key]});

        var param = 'keyMap='+JSON.stringify(keymap)+'&num=10&page='+page;
        if (order != null) {
            param += '&order=' + order;
        }

        var url = '../proxy.php?query=' + encodeURIComponent('Home/Search/SearchResource/?' + param);
        $('#more, #error').hide();
        $('#loading').show();
        $.getJSON(url, function(data) {
            $('#loading').hide();
            if (!data.result || !data.result.list || data.result.list.length == 0) {
                $('#error').show();
            } else {
                if (data.result.list.length >= 10) {
                    window.current_page = page + 1;
                    $('#more').show();
                } else {
                    $('#error').show();
                }
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
                            <div>' + ext + '文件</div>\
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
        if (order && order != '') new_url += '&order=' + order;
        if (school && school != '') new_url += '&school=' + school;
        if (department && department != '') new_url += '&department=' + department;
        if (course && course != '') new_url += '&course=' + course;
        window.location = new_url;
    }

    var key = $.getParam('key');
    var order = $.getParam('order');
    var school = $.getParam('school');
    var department = $.getParam('department');
    var course = $.getParam('course');

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
        if ($(document).height() - $(window).height() - $(document).scrollTop() <= 10) {
            if (window.current_page > 0 && !$('#loading').is(':visible') && !$('#error').is(':visible')) {
                load_result(key, window.current_page);
            }
        }
    });

    // init sort
    if (order && order != '') {
        $('#' + order).addClass('selected');
    }
    $('.btn_sort').click(function() {
        if ($(this).hasClass('selected')) return;
        order = $(this).attr('id');
        reload_page();
    });

    // init filter
    var url = '../proxy.php?query=' + encodeURIComponent('Home/School/getAllSchools');
    $('#btn_filter').click(function() {
        $('#filter').show();
    });
    $('#filter_bg').click(function() {
        $('#filter').hide();
    });
    $.getJSON(url, function(data) {
        if (!data.result || data.result.length == 0) return;
        for (var key in data.result) {
            var id = data.result[key]['id'];
            var name = data.result[key]['name'];
            $('#select_school').append('<option value="' + name + '" data-id="' + id + '">' + name + '</option>');
        }
        $('#select_school').removeAttr('disabled');
        if (school && school != '') {
            $("#select_school").val(school).change();
        }
    });
    $('#select_school').change(function() {
        var selected = $(this).find(':selected').attr('data-id');
        if (!selected) {
            $('#select_department').val('').attr('disabled', 'disabled');
            $('#select_course').val('').attr('disabled', 'disabled');
            return;
        }
        $('#select_department').html('<option value="">选择院系</option>');
        var url = '../proxy.php?query=' + encodeURIComponent('Home/Department/getDepartmentsBySchoolId?schoolId=' + selected);
        $.getJSON(url, function(data) {
            if (!data.result || data.result.length == 0) return;
            for (var key in data.result) {
                var id = data.result[key]['id'];
                var name = data.result[key]['name'];
                $('#select_department').append('<option value="' + name + '" data-id="' + id + '">' + name + '</option>');
            }
            $('#select_department').removeAttr('disabled');
            if (department && department != '') {
                $("#select_department").val(department).change();
            }
        });
    });
    $('#select_department').change(function() {
        var selected = $(this).find(':selected').attr('data-id');
        if (!selected) {
            $('#select_course').val('').attr('disabled', 'disabled');
            return;
        }
        $('#select_course').html('<option value="">选择课程</option>');
        var url = '../proxy.php?query=' + encodeURIComponent('Home/Course/getCoursesByDepartmentIdWithGrade?departmentId=' + selected);
        $.getJSON(url, function(data) {
            if (!data) return;
            for (var key in data) {
                for (var key2 in data[key]) {
                    var id = data[key][key2]['id'];
                    var name = data[key][key2]['name'];
                    $('#select_course').append('<option value="' + name + '" data-id="' + id + '">' + name + '</option>');
                }
            }
            $('#select_course').removeAttr('disabled');
            if (course && course != '') {
                $("#select_course").val(course);
            }
        });
    });
    $('#btn_reset').click(function() {
        $('#select_school').val('');
        $('#select_department').val('').attr('disabled', 'disabled');
        $('#select_course').val('').attr('disabled', 'disabled');
    });
    $('#btn_confirm').click(function() {
        school = $('#select_school').val();
        department = $('#select_department').val();
        course = $('#select_course').val();
        order = '';
        reload_page();
    });
});