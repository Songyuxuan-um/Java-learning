// import activitySend from './action-plan';

class Goal {
    constructor(gname, specific, measurable, attainable, relevant, date, time, isCompleted) {
        this.gname = gname;
        this.specific = specific;
        this.measurable = measurable;
        this.attainable = attainable;
        this.relevant = relevant;
        this.date = date;
        this.time = time;
        this.isCompleted = isCompleted;
    }
    toString() {
        // document.querySelector(".card").innerHTML += "<div class=\"goal-page-navigation\"\>\<a href=\"action-plan.html\"\>&#60; Back to Main Goal Page</a\>\<hr\>\</div\>";
        document.getElementsByClassName("card-left-goal-card")[0].innerHTML += s;

    }
    toList() {

    }
};

document.getElementById("api-goal-details").innerHTML = sessionStorage.getItem('GoalDetails');;

document.querySelector("#api-completed-btn").addEventListener("click", function() {
    // var GoalList = JSON.parse(sessionStorage.getItem("completedgoalList"));
    var goalList = JSON.parse(sessionStorage.getItem("goalList"));
    goalList[document.getElementById("api-identifier").innerHTML].isCompleted = true;
    // if (activityList == null) {
    //     completedActivityList = [];
    //     completedActivityList[0] = activityList[document.getElementById("api-identifier").innerHTML];
    // } else {
    //     completedActivityList[completedActivityList.length] = activityList[document.getElementById("api-identifier").innerHTML];
    // }
    sessionStorage.setItem('goalList', JSON.stringify(goalList));
    alert("Goal Completed!");
    window.location.href = "manageGoal.html";
});

document.querySelector("#api-remove-btn").addEventListener("click", function() {
    // var activityList = JSON.parse(sessionStorage.getItem("completedActivityList"));
    var goalList = JSON.parse(sessionStorage.getItem("goalList"));
    // delete activityList[document.getElementById("api-identifier").innerHTML];
    goalList.splice(document.getElementById("api-identifier").innerHTML, 1);
    // if (activityList == null) {
    //     completedActivityList = [];
    //     completedActivityList[0] = activityList[document.getElementById("api-identifier").innerHTML];
    // } else {
    //     completedActivityList[completedActivityList.length] = activityList[document.getElementById("api-identifier").innerHTML];
    // }
    sessionStorage.setItem('goalList', JSON.stringify(goalList));
    alert("Goal Deleted!");
    window.location.href = "manageGoal.html";
});

document.querySelector("#api-edit-btn").addEventListener("click", function() {
    sessionStorage.setItem('temporaryIdentifier', JSON.stringify(document.getElementById("api-identifier").innerHTML));
    // alert("Goal Deleted!");
    window.location.href = "editGoal.html";
});