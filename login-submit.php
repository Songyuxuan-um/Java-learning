<?php

include_once 'dbconnect.php';

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM `user` WHERE user_email='{$email}' ORDER BY user_id DESC";
$res = mysqli_query($db_link, $sql);

$row = mysqli_fetch_array($res,MYSQLI_ASSOC);

// 释放结果集
mysqli_free_result($res);

mysqli_close($db_link);

if ($row) {
    if ($password == $row['user_password']) {
        $_SESSION['user_id'] = $row['user_id'];
        // 登录成功
        echo "<script>alert('login success!');location.href='updatedAcc.php';</script>";
    } else {
        // 登录失败
        echo "<script>alert('password error!');window.history.back();</script>";
    }
} else {
    // 登录失败
    echo "<script>alert('account not found!');window.history.back();</script>";
}