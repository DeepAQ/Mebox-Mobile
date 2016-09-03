<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
<?php include '../assets/head.inc.php'; ?>
    <link rel="stylesheet" type="text/css" href="assets/search.css" />
    <script type="text/javascript" src="assets/search.js"></script>
    <title>资料搜索</title>
</head>
<body>
<?php include '../assets/app_header.inc.php'; ?>
    <nav>
        资料搜索
    </nav>
    <section id="title"></section>
    <section id="search_box">
        <form action="." method="get">
            <input type="text" name="key" id="input_key" title="关键字" placeholder="搜索优质资料" />
        </form>
        <div id="btn_search"></div>
    </section>
    <footer class="hidden">
        <section>
            资料找不到？发布您的需求，广大米友帮你找！
        </section>
        <section>
            <a>求资料</a>
        </section>
    </footer>
</body>
</html>