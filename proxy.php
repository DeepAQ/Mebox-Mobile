<?php

if (empty($_GET['query'])) {
    exit('Wrong param');
}

echo @file_get_contents('http://mebox.top/'.$_GET['query']);
