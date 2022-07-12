<?php

require_once 'dbconnect.php';

$user_id = $_SESSION['user_id'];

$sql = "DELETE FROM `user` WHERE user_id='{$user_id}' ORDER BY user_id DESC";
$res = mysqli_query($db_link, $sql);
mysqli_close($db_link);
if ($res) {
    $_SESSION['user_id'] = null;
    echo "<script>alert('delete success！');location.href='index.html';</script>";
} else {
    echo "<script>alert('delete error！');window.history.back();</script>";
}