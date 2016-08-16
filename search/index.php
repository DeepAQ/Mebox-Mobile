<?php

if (!empty($_GET['key'])) {
    include 'result.php';
} else {
    include 'search.php';
}