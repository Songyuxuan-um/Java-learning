isMenteeExists();
createMenteeTimeline();

function isMenteeExists() {
    /* To check whether there is any mentee in the mentor's list */
    let menteeList = document.querySelector("#list-example").children.length;
    /* Create a notification on the website if the mentor has no mentee */
    let inavalaible = document.createElement("div");
    let image = document.createElement("img");
    image.src = "../images/no_mentee.png";
    image.alt = "No Mentee Available";
    image.style.width = "50%";
    image.style.height = "50%";
    let paragraph = document.createElement("p");
    paragraph.textContent = "You have no mentee yet";
    inavalaible.id = "no_mentee";
    inavalaible.append(image, paragraph);
    /* Check whether display the notification or mentee list*/
    if (menteeList == 0) {
        html = `<div id="no_mentee">
            <img src="images/no_mentee.png" alt="No Mentee Available" width="50%" height="50%">
            <p>You have no mentee yet</p>
            </div>`;
        document.querySelector("#display_mentee").innerHTML = html;
    }
}

function createMenteeTimeline() {
    let menteeList = document.querySelector("#list-example").children.length;
    let row = document.querySelector(".scroll_timeline");
    let name = [0, "Tan Hou Ren", "Goh Kang Yue", "Chong Chien Wang", "Chue Kai Ze"];
    let pictures = [0, "../images/sample_mentee.jpeg", "../images/sample_mentee2.jpg", "../images/sample_mentee3.jfif", "../images/sample_mentee4.jpg"];
    let html = "";
    if (menteeList != 0) {
        for (let i = 1; i <= 4; i++) {
            html += `<div class="col" id="row-${i}"> <div class="card w-85 bg-secondary">
                    <button id="${i}" type="button" class="close" onclick="deleteRow(this)">X</button>
                    <div class="card-body">
                        <div class="card-title">
                            <div class="profile_wrapper">
                            <img src="${pictures[i]}" alt="avatar" width="100%" height="100%" />
                            </div>
                            <div class="mentee_name timeline_name fs-6">${name[i]}</div>
                        </div>
                        <p class="card-text">${name[i]} sets a new goal!</p>
                        <hr>
                        <a class="go_mentee_page" id="v${i}" href="viewNewgoal.html" onclick="deleteRow(this)">View &gt;&gt;</a>
                    </div>
                </div>
            </div>`
        }
        daysLeft = 3;
        for (let i = 5; i <= 6; i++) {
            html += `<div class="col" id="row-${i}"> <div class="card w-85 bg-secondary position-relative">
                    <button id="${i}" type="button" class="close" onclick="deleteRow(this)">X</button>
                    <div class="card-body">
                        <div class="card-title">
                            <div class="profile_wrapper">
                            <img src="${pictures[1]}" alt="avatar" width="100%" height="100%" />
                            </div>
                            <div class="mentee_name timeline_name fs-5">${name[1]}</div>
                        </div>
                        <p class="card-text"><strong>${daysLeft--} days</strong> left for ${name[1]} to reach his goal!</p>
                        <hr>
                        <a class="go_mentee_page" id="v${i}"  href="viewDeadlineGoal.html" onclick="deleteRow(this)">View &gt;&gt;</a>
                    </div>
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
                </div>
            </div>`
        }
        row.innerHTML = html;
    }
}

function deleteRow(deleteBtn) {
    let position = deleteBtn.id;
    if (position.length == 1) {
        let row = document.getElementById("row-" + position);
        // gArray.push(position);
        // console.log(gArray);
        row.remove();
    } else {
        let row = document.getElementById("row-" + position[1]);
        // gArray.push(position[1]);
        // console.log(gArray);
        row.remove();
    }
}

function createMenteePage(mentee) {
    let name = [0, "Hou Ren", "Kang Yue", "Chien Wang", "Kai Ze"];
    let idCheck = mentee.id[1];
    let html = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/main.min.css">
        <link rel="stylesheet" href="/css/site.css">
        <link rel="stylesheet" href="/css/mentor.css">
        <link rel="stylesheet" href="/css/rectangle.css">
        <title>Document</title>
    </head>
    
    <body>
        <div class="row layout">
            <div class="col-1 g-0">
                <nav class="nav nav-left flex-column">
                    <img class="tl" src="images/arrow.svg" alt="navigation_bar" width="30px" height="30px" />
                    <div id="profile_background">
                        <div class="profile_wrapper tl">
                            <img src="../images/sample_profile.jpg" alt="avatar" width="100%" height="100%" />
                        </div>
                        <div id="name" class="tl">Cheng</div>
                    </div>
                    <div class="navigation tl">
                        <div class="wrapper">
                            <a class="nav-link active" aria-current="page" href="indexMentor.html"><img src="images/goal.svg" alt="Goal" width="24px" height="24px"></a>
                            <div class="message">Goal</div>
                        </div>
                </nav>
                </div>
                <div class="col-8 bg-secondary">
                    <div class="align-self-stretch">
                        <div class="row">
                            <div class="col-9">
                                <header>
                                    <h2>${name[idCheck]}'s Goals</h2>
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
                        <button onclick="document.location='addGoal.html'" class="btn btn-primary">Add Goal</button>
                        <button onclick="document.location='editGoal.html'" class="btn btn-primary">Edit Goal</button>
                        <button onclick="deleteClass1()" class="btn btn-primary">Delete Goal</button>
                        <li><span class="left">Current Goal</span><span class="right">Past Goal</span></li>
                    </div>
                    <div id="c1" class="container1">
                        <h2 style=" position: absolute; top: 0; left: 0; " id="g1">Goal 1</h2>
                        <a href="viewGoal.html " class="btn btn-outline-info" style="position: absolute; bottom: 0; left: 0; ">View details</a>
                        <a href="action-plan.html" class="btn btn-outline-info" style="position: absolute; bottom: 0; right: 0; ">View Action Plan</a>
                        <button type="button " class="btn-close " aria-label="Close " onclick="showCustom() "></button>
                        <div id="customAlert">
                            <div id="block">
                                <div class="heading ">This is Custom alert</div>
                                <div class="content">
                                    <p>Do you want to delete this goal</p>
                                    <button type="button " class="btn btn-primary " onclick="toggleClass() ">Yes</button>
                                    <button type="button " class="btn btn-primary " onclick="document.location='manageGoal.html' ">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="c2" class="container2 ">
                        <h2 style=" position: absolute; top: 0; left: 0; " id="g2">Goal 2</h2>
                        <a href="viewGoal.html " class="btn btn-outline-info" style="position: absolute; bottom: 0; left: 0; ">View details</a>
                        <a href="action-plan.html" class="btn btn-outline-info" style="position: absolute; bottom: 0; right: 0; ">View Action Plan</a>
                        <button type="button " class="btn-close " aria-label="Close " onclick="showCustom() "></button>
                        <div id="customAlert">
                            <div id="block">
                                <div class="heading ">This is Custom alert</div>
                                <div class="content">
                                    <p>Do you want to delete this goal</p>
                                    <button type="button " class="btn btn-primary " onclick="toggleClass() ">Yes</button>
                                    <button type="button " class="btn btn-primary " onclick="document.location='manageGoal.html' ">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="c3" class="container3 ">
                        <h2 style=" position: absolute; top: 0; left: 0; " id="g3">Goal 3</h2>
                        <a href="viewGoal.html " class="btn btn-outline-info" style="position: absolute; bottom: 0; left: 0; ">View details</a>
                        <a href="action-plan.html" class="btn btn-outline-info" style="position: absolute; bottom: 0; right: 0; ">View Action Plan</a>
                        <button type="button " class="btn-close " aria-label="Close " onclick="showCustom() "></button>
                        <div id="customAlert">
                            <div id="block">
                                <div class="heading ">This is Custom alert</div>
                                <div class="content">
                                    <p>Do you want to delete this goal</p>
                                    <button type="button " class="btn btn-primary " onclick="toggleClass() ">Yes</button>
                                    <button type="button " class="btn btn-primary " onclick="document.location='manageGoal.html' ">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="c4" class="container4 ">
                        <h2 style=" position: absolute; top: 0; left: 0; " id="g4">Goal 4</h2>
                        <a href="viewGoal.html " class="btn btn-outline-info" style="position: absolute; bottom: 0; left: 0; ">View details</a>
                        <a href="action-plan.html" class="btn btn-outline-info" style="position: absolute; bottom: 0; right: 0; ">View Action Plan</a>
                        <button type="button " class="btn-close " aria-label="Close " onclick="showCustom() "></button>
                        <div id="customAlert">
                            <div id="block">
                                <div class="heading ">This is Custom alert</div>
                                <div class="content">
                                    <p>Do you want to delete this goal</p>
                                    <button type="button " class="btn btn-primary " onclick="toggleClass1() ">Yes</button>
                                    <button type="button " class="btn btn-primary " onclick="document.location='manageGoal.html' ">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 ">
                    <div class="m-3 mb-4 ">
                        <h2>Events</h2>
                    </div>
                    <nav>
                        <div class="nav nav-tabs justify-content-center " id="nav-tab " role="tablist ">
                            <button class="nav-link active " id="nav-Goal-tab " data-bs-toggle="tab " data-bs-target="#nav-Goal " type="button " role="tab " aria-controls="nav-Goal " aria-selected="true ">Activities</button>
                            <button class="nav-link " id="nav-profile-tab " data-bs-toggle="tab " data-bs-target="#nav-profile " type="button " role="tab " aria-controls="nav-profile " aria-selected="false ">Remainders</button>
                        </div>
                    </nav>
                    <div class="tab-content " id="nav-tabContent ">
                        <div class="tab-pane fade show active " id="nav-Goal " role="tabpanel " aria-labelledby="nav-Goal-tab ">...</div>
                        <div class="tab-pane fade " id="nav-profile " role="tabpanel " aria-labelledby="nav-profile-tab ">...</div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js " integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p " crossorigin="anonymous "></script>
            <script type="text/javascript " src="scripts/script1.js "></script>
            <script type="text/javascript " src="scripts/manageGoal.js "></script>
    </body>
    </html>`;
    document.write(html);
}

// function storeViewId(viewBtn) {
//     let position = viewBtn.id;
//     gArray.push(position[1]);
// }

// Retrieve the imgSrc and name of the specific mentee 
// function createMentee(element, imgSrc, Name) {
//     if (imgSrc == null) {
//         // Create default avatar
//         let image = document.createElement("img");
//         image.src = "../images/avatar.png";
//         image.alt = Name;
//         image.style.width = "32px";
//         image.style.height = "32px";
//         document.getElementById(element.id).classList.remove("user_profile");
//     } else {
//         let profile = document.getElementById(element.id);
//         profile.classList.add("mentee_profile");
//     }
// }