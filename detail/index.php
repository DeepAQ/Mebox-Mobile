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
        <section id="res_title">
        </section>
        <div>基本信息：<br /><br /></div>
        <section id="res_basic">
        </section>
        <div>资料描述：<br /><br /></div>
        <section id="res_desc">
        </section>
        <div>标签：</div>
        <section id="res_tags">
        </section>
    </div>
    <section id="loading">
        Loading ...
    </section>
    <div style="height: 60px"></div>
</body>
</html>