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
        <div id="btn_back">&lt;-</div>
        <div>
            <form action="." method="get">
                <input type="text" name="key" id="input_key" title="关键字" />
            </form>
        </div>
    </nav>
    <section id="results">
    </section>
    <section id="more" class="hidden">
        上拉加载更多 ...
    </section>
    <section id="loading" class="hidden">
        Loading ...
    </section>
    <section id="error" class="hidden">
        没有更多资料了~
    </section>
</body>
</html>