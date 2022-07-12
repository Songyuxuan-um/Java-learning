// import activitySend from './action-plan';

class Activity {
    constructor(name, description, date, time, location, isCompleted) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.time = time;
        this.location = location;
        this.isCompleted = isCompleted;
    }
    toString() {
        // document.querySelector(".card").innerHTML += "<div class=\"goal-page-navigation\"\>\<a href=\"action-plan.html\"\>&#60; Back to Main Goal Page</a\>\<hr\>\</div\>";
        document.getElementsByClassName("card-left-activity-card")[0].innerHTML += s;

    }
    toList() {

    }
};

document.getElementById("api-activity-details").innerHTML = sessionStorage.getItem('ActivityDetails');;

document.querySelector("#api-completed-btn").addEventListener("click", function() {
    // var activityList = JSON.parse(sessionStorage.getItem("completedActivityList"));
    var activityList = JSON.parse(sessionStorage.getItem("activityList"));
    activityList[document.getElementById("api-identifier").innerHTML].isCompleted = true;
    // if (activityList == null) {
    //     completedActivityList = [];
    //     completedActivityList[0] = activityList[document.getElementById("api-identifier").innerHTML];
    // } else {
    //     completedActivityList[completedActivityList.length] = activityList[document.getElementById("api-identifier").innerHTML];
    // }
    sessionStorage.setItem('activityList', JSON.stringify(activityList));
    alert("Activity Completed!");
    window.location.href = "action-plan.html";
});

document.querySelector("#api-remove-btn").addEventListener("click", function() {
    // var activityList = JSON.parse(sessionStorage.getItem("completedActivityList"));
    var activityList = JSON.parse(sessionStorage.getItem("activityList"));
    // delete activityList[document.getElementById("api-identifier").innerHTML];
    activityList.splice(document.getElementById("api-identifier").innerHTML, 1);
    // if (activityList == null) {
    //     completedActivityList = [];
    //     completedActivityList[0] = activityList[document.getElementById("api-identifier").innerHTML];
    // } else {
    //     completedActivityList[completedActivityList.length] = activityList[document.getElementById("api-identifier").innerHTML];
    // }
    sessionStorage.setItem('activityList', JSON.stringify(activityList));
    alert("Activity Deleted!");
    window.location.href = "action-plan.html";
});

document.querySelector("#api-edit-btn").addEventListener("click", function() {
    sessionStorage.setItem('temporaryIdentifier', JSON.stringify(document.getElementById("api-identifier").innerHTML));
    // alert("Activity Deleted!");
    window.location.href = "action-plan-edit-activity.html";
});