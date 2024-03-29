<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
<?php include '../assets/head.inc.php'; ?>
    <link rel="stylesheet" type="text/css" href="assets/result.css" />
    <script type="text/javascript" src="assets/result.js"></script>
    <title>搜索结果</title>
</head>
<body>
<?php include '../assets/app_header.inc.php'; ?>
    <nav>
        <div id="btn_back"></div>
        <div>
            <form action="." method="get">
                <input type="text" name="key" id="input_key" title="关键字" placeholder="搜索您感兴趣的优质资料" />
            </form>
            <div id="btn_search"></div>
        </div>
    </nav>
    <section id="toolbar">
        <div class="btn_sort" id="HOT">热度优先</div>
        <div class="btn_sort" id="UPLOAD_TIME">最新上传</div>
        <div class="btn_sort" id="SCORE">评分最高</div>
        <div id="btn_filter">筛选</div>
    </section>
    <section id="results">
    </section>
    <section id="filter" style="display: none;">
        <div id="filter_bg"></div>
        <div>
            <div>
                <div>
                    学校<br />
                    <select id="select_school" disabled="disabled">
                        <option value="">选择学校</option>
                    </select>
                </div>
                <div>
                    院系<br />
                    <select id="select_department" disabled="disabled">
                        <option value="">选择院系</option>
                    </select>
                </div>
                <div>
                    课程<br />
                    <select id="select_course" disabled="disabled">
                        <option value="">选择课程</option>
                    </select>
                </div>
            </div>
            <div>
                <div id="btn_reset">重置</div>
                <div id="btn_confirm">确定</div>
            </div>
        </div>
    </section>
    <section id="more" class="hidden">
        松手加载更多 ...
    </section>
    <section id="loading" class="hidden">
        Loading ...
    </section>
    <section id="error" class="hidden">
        没有更多资料了~
    </section>
    <div style="height: 50px"></div>
</body>
</html>