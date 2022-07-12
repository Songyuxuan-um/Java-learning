<?php

include_once 'dbconnect.php';

$user_id = $_SESSION['user_id'];

$sql = "SELECT * FROM `user` WHERE user_id='{$user_id}' ORDER BY user_id DESC";
$res = mysqli_query($db_link, $sql);

$row = mysqli_fetch_array($res,MYSQLI_ASSOC);

// 释放结果集
mysqli_free_result($res);

mysqli_close($db_link);

?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/main.min.css">
    <link rel="stylesheet" href="./css/account.css">
    <link rel="stylesheet" href="./css/reminder.css">


    <title>Java Learning</title>
</head>

<body>
    <div class="row layout">
        <div class="col-1 g-0">
            <div class="nav nav-left flex-column">
                <img src="images/arrow.svg" alt="navigation_bar" width="30px" height="30px" />
                <div id="profile_background">
                    <div class="profile_wrapper">
                        <a href="updatedAcc.php"><img src="<?php if(isset($row['user_photo']) && $row['user_photo']) {echo $row['user_photo'];} else {echo "images/avatar.png";}?>" alt="avatar" width="100%" height="100%" style="border-radius: 50%" /></a>
                    </div>
                    <div class="text-center" id="name"><?php if(isset($row['user_username'])) {echo $row['user_username'];}?></div>
                </div>
                <div class="navigation">
                    <div class="wrapper">
                        <a class="nav-link active" aria-current="page" href="homepage.html"><img src="images/home.svg" alt="Homepage"></a>
                        <div class="message">Home</div>
                    </div>
                    <div class="wrapper">                     
                        <a class="nav-link active" aria-current="page" href="goal.html"><img src="images/goal.svg" alt="Goal"></a>
                        <div class="message">Goal</div>
                    </div>
                    <div class="wrapper">
                        <!-- <a class="nav-link" href="#"><img src="images/graduate.svg" alt="mentor" width="24px" height="24px"></a> -->
                        <button type="button" class="find-mentor" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><img src="images/graduate.svg" alt="mentor" width="24px" height="24px"></button>
                        <div class="message">Find Mentor</div>
                    </div>
                    <div class="wrapper">
                        <a class="nav-link" href="sign-out.php"><img src="images/sign_out.svg" alt="settings" width="24px" height="24px"></a>
                        <div class="message">Sign Out</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-8 bg-secondary">
            <div class="align-self-stretch">
                <div class="row">
                    <div class="col-9">
                        <header>
                            <h2>Java Learning</h2>
                        </header>
                    </div>
                    <div class="col-2 mt-3">
                        <div id="date">
                            <p id="time">
                            </p>
                        </div>
                        <div class="container">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="row gx-3 mb-1">
                    <div class="col-md-2">
                        <div id="profile_wrapper1">
                            <img id="default_profile1" src="<?php if(isset($row['user_photo']) && $row['user_photo']) {echo $row['user_photo'];} else {echo "images/avatar.png";}?>" alt="avatar" width="32px" height="32px" style="border-radius: 50%" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="info">
                            <!--strong>HelloWorld123</strong><br-->
                            Mentee
                            <input class="form-control" value="<?php if(isset($row['user_username'])) {echo $row['user_username'];}?>" id="Username" onchange="updateFormInput();" name="Username" type="text" placeholder="Username (Eg.HelloWorld1)" required>

                        </div>
                    </div>
                    <div class="col-4">
                        <div class="button">
                            <button type="submit" form="myForm" class="btn btn-primary" onclick="handleSubmit()" />Update & Save</button>
                            <button1 onclick="document.getElementById('id01').style.display='block'" class="btn btn-danger">Delete Account</button1>

                            <div id="id01" class="modal-custom">
                                <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Delete Account">&times;</span>
                                <form class="modal-content" action="/action_page.php">
                                    <div class="del">
                                        <h1>Delete Account</h1>
                                        <p> Are you sure you want to delete your account?</p>

                                        <div class="clearfix">
                                            <a href="manageAcc.php" class="cancelbtn">Cancel</a>
                                            <a href="deleteAcc.php" class="deletebtn">Delete</a>
                                            <!--button type="button" class="cancelbtn">Cancel</button-->
                                            <!--button type="button" class="deletebtn">Delete</button-->
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!--div class="button">
                 <p align="right">
                    <button type="button" class="btn btn-primary">Update & Save</button>
                    <button type="button" class="btn btn-danger">Delete Account</button>
                  </p>
                </div-->
                <div class="minibox">
                    <form action="editAcc.php" id="myForm" method="post" enctype="multipart/form-data">
                        <input type="hidden" id="my-form-username" name="Username" value="<?php if(isset($row['user_username'])) {echo $row['user_username'];}?>" />
                        <!-- Form Row-->
                        <div class="row gx-3 mb-3">
                            <!-- Form Group (First name)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="FirstName"><strong>First name</strong></label>
                                <input class="form-control" value="<?php if(isset($row['user_fname'])) {echo $row['user_fname'];}?>" id="FirstName" name="FirstName" type="text" placeholder="Hello" required>
                            </div>
                            <!-- Form Group (Last name)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="LastName"><strong>Last name</strong></label>
                                <input class="form-control" value="<?php if(isset($row['user_lname'])) {echo $row['user_lname'];}?>" id="LastName" name="LastName" type="text" placeholder="World" required>
                            </div>
                        </div>
                        <!-- Form Row-->
                        <div class="row gx-3 mb-3">
                            <!-- Form Group (Age)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="Age"><strong>Age</strong></label>
                                <input class="form-control" value="<?php if(isset($row['user_age'])) {echo $row['user_age'];}?>" id="Age" name="Age" type="number" placeholder="20" required>
                            </div>
                            <!-- Form Group (Gender)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="Gender"><strong>Gender</strong></label>
                                <input class="form-control" value="<?php if(isset($row['user_gender'])) {echo $row['user_gender'];}?>" id="Gender" name="Gender" type="text" placeholder="Male" required>
                            </div>
                        </div>
                        <!-- Form Row  -->
                        <div class="row gx-3 mb-3">
                            <!-- Form Group (phone number)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="Phone"><strong>Phone Number</strong></label>
                                <input class="form-control" value="<?php if(isset($row['user_phone_num'])) {echo $row['user_phone_num'];}?>" id="Phone" name="Phone" type="tel" placeholder="012-3456789" required>
                            </div>
                            <!-- Form Group (Country)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="Country"><strong>Country</strong></label>
                                <input class="form-control" value="<?php if(isset($row['user_country'])) {echo $row['user_country'];}?>" id="Country" name="Country" type="text" placeholder="Malaysia" required>
                            </div>
                        </div>
                        <div class="row">
                            <!-- Upload photo button-->
                            <!--label for="myPhoto">Upload your photo: </label-->
                            <!--input type="file" id="myPhoto" name="myPhoto"-->
                            <div class="upload-btn-wrapper">
                                <input type="file" name="portrait" id="myfile" hidden/>
                                <label for="myfile">Upload a photo</label>
                                <!-- <span>No file chosen</span> -->
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="col-3">
            <div class="m-3 mb-4">
                <h2>Reminders</h2>
            </div>
            <div class="row row-cols-1 d-grid gap-2 scroll_timeline_mentee_inner scroll">
                <div class="col">
                    <div class="rem">
                        <div class="card text-dark bg-secondary mb-3" style="max-width: 18rem;">
                            <div class="card-header"><strong>Goal 1</strong></div>
                            <div class="card-body">
                                <h5 style="text-align: left;color: black; font-family:cursive; ">Reminder in:</h5>
                                <div class="container" style="float: left; background-color: crimson;border-radius: 20px; color: white; text-align: center; font-size: x-large;">
                                    <p id="timeremain1"></p>
                                </div>
                            </div>
                            <span class="close">x</span>
                        </div>
                        <div class="card text-dark bg-secondary mb-3" style="max-width: 18rem;">
                            <div class="card-header"><strong>Goal 2</strong></div>
                            <div class="card-body">
                                <h5 style="text-align: left;color: black; font-family:cursive; ">Reminder in:</h5>
                                <div class="container" style="float: left; background-color: crimson;border-radius: 20px; color: white; text-align: center; font-size: x-large;">
                                    <p id="timeremain2"></p>
                                </div>
                            </div>
                            <span class="close">x</span>
                        </div>
                        <div class="card text-dark bg-secondary mb-3" style="max-width: 18rem;">
                            <div class="card-header"><strong>Goal 3</strong></div>
                            <div class="card-body">
                                <h5 style="text-align: left;color: black; font-family:cursive; ">Reminder in:</h5>
                                <div class="container" style="float: left; background-color: crimson;border-radius: 20px; color: white; text-align: center; font-size: x-large;">
                                    <p id="timeremain3"></p>
                                </div>
                            </div>
                            <span class="close">x</span>
                        </div>
                        <div class="card text-dark bg-secondary mb-3" style="max-width: 18rem;">
                            <div class="card-header"><strong>Goal 4</strong></div>
                            <div class="card-body">
                                <h5 style="text-align: left;color: black; font-family:cursive; ">Reminder in:</h5>
                                <div class="container" style="float: left; background-color: crimson;border-radius: 20px; color: white; text-align: center; font-size: x-large;">
                                    <p id="timeremain4"></p>
                                </div>
                            </div>
                            <span class="close">x</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-secondary">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Invitation to Target Mentor</h5>
                    <button type="button" class="btn-close outliner" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="interactionForm">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="title" placeholder="name@example.com">
                            <label for="recipient-name" class="col-form-label">Email Address:</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" id="contents" placeholder="message"></textarea>
                            <label for="message-text" class="col-form-label">Message:</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <!-- <div class="mentor-invitation-message">
                        <i class="success"><img src="images/check-circle-fill.svg"/></i> Success: Your Message Sent Successfully!
                    </div> -->
                    <button type="button" id="invite-mentor" disabled="disabled" class="btn btn-primary" onmousedown="inviteMentor();  clearMessage();" onmouseup="removeInvite()">Send message</button>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js " integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p " crossorigin="anonymous "></script>
    <script type="text/javascript" src="scripts/account.js"></script>
    <script type="text/javascript " src="scripts/reminder.js "></script>
    <script type="text/javascript" src="scripts/mentor_script2.js"></script>
</body>

</html>