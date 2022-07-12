<?php

include_once 'dbconnect.php';

$fileInfo = $_FILES['portrait'];
$fileName = $fileInfo['name'];
move_uploaded_file($fileInfo['tmp_name'],'./images/upload/'.$fileName);

$id = $_SESSION['user_id'];

$Username = $_POST['Username'];
$FirstName = $_POST['FirstName'];
$LastName = $_POST['LastName'];
$Age = $_POST['Age'];
$Gender = $_POST['Gender'];
$Phone = $_POST['Phone'];
$Country = $_POST['Country'];
if ($_FILES['portrait']['name']) {
    $user_photo = ",user_photo = './images/upload/{$fileName}'";
} else {
    $user_photo = '';
}
$sql = "UPDATE `user` SET 
            user_username = '$Username' , 
            user_fname = '$FirstName' ,
			user_lname = '$LastName' , 
			user_age = '$Age' ,
			user_gender = '$Gender',
			user_phone_num = '$Phone',
			user_country = '$Country'
			".$user_photo."
        WHERE user_id = '$id' ";

$res = mysqli_query($db_link, $sql);
if ($res) {
    echo "<script>alert('update success！');location.href='updatedAcc.php';</script>";
} else {
    echo "<script>alert('update error！');window.history.back();</script>";
}

mysqli_close($db_link);