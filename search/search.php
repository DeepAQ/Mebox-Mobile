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
    <section id="logo">
        （此处应有 Logo）
    </section>
    <section id="search_box">
        <div>
            <form action="." method="get">
                <input type="text" name="key" id="input_key" title="关键字" />
            </form>
        </div>
        <div id="btn_search">
            资料搜索
        </div>
    </section>
    <footer>
        <section>
            资料找不到？发布下您的需求，让广大米友帮你找！
        </section>
        <section>
            求资料 &gt;
        </section>
    </footer>
</body>
</html>