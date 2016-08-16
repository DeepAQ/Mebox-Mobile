<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <?php include 'assets/head.inc.php'; ?>
    <link rel="stylesheet" type="text/css" href="assets/result.css" />
    <script type="text/javascript" src="assets/result.js"></script>
    <title>搜索结果</title>
</head>
<body>
<?php include 'assets/app_header.inc.php'; ?>
    <nav>
        <div>&lt;-</div>
        <div>
            <input type="text" id="input_key" title="关键字" />
        </div>
    </nav>
    <section id="results">
        <div class="item">
            <div>
                <div>微积分</div>
                <div><img src="http://mebox.top/Public/img/typeIcon/PDF.svg" alt="pdf" /></div>
            </div>
            <div>
                <div>上传者: 恋爱不如开车</div>
                <div>评论: 8</div>
            </div>
        </div>
    </section>
    <section id="loading">
        Loading ...
    </section>
</body>
</html>