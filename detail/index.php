<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
<?php include '../assets/head.inc.php'; ?>
    <link rel="stylesheet" type="text/css" href="assets/detail.css" />
    <script type="text/javascript" src="assets/detail.js"></script>
    <title>资料详情</title>
</head>
<body>
<?php include '../assets/app_header.inc.php'; ?>
    <nav>
        <div id="btn_back"></div>
        <div>资料详情</div>
    </nav>
    <section id="res_preview">
    </section>
    <div id="res_info">
        <section id="title">
        </section>
        <div class="subtitle">基本信息：</div>
        <section id="basic_info">
        </section>
        <div class="subtitle">资料描述：</div>
        <section id="description">
        </section>
        <div class="subtitle">标签：</div>
        <section id="tags">
        </section>
    </div>
    <section class="subtitle">
        共 <span id="comment_count"></span> 条评论
    </section>
    <section id="res_comments">
    </section>
    <section id="loading">
        Loading ...
    </section>
    <div style="height: 60px"></div>
</body>
</html>