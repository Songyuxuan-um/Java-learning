<?php

include_once 'dbconnect.php';

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO `user` (user_email,user_password) VALUE('{$email}', '{$password}')";
$res = mysqli_query($db_link, $sql);
mysqli_close($db_link);
if ($res) {
    // 注册成功
    echo "<script>alert('register success!');location.href='register-login.html';</script>";
} else {
    // 注册失败
    echo "<script>alert('register error!');window.history.back();</script>";
}