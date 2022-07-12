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
        // document.getElementsByClassName("card-left-Goal-card")[0].innerHTML += s;

    }
    toList() {

    }
};

// var GoalList = [];

document.querySelector("#apaa-add-goal-btn").addEventListener("click", function() {
    let newGoal = new Goal(document.querySelector("#gname").value, document.querySelector('#specific').value, document.querySelector('#measurable').value, document.querySelector('#attainable').value, document.querySelector('#relevant').value, document.querySelector("#apaa-date-input").value, document.querySelector("#apaa-time-input").value, false);
    var goalList = JSON.parse(sessionStorage.getItem("goalList"));
    if (goalList == null) {
        goalList = [];
        goalList[0] = newGoal;
    } else {
        goalList[goalList.length] = newGoal;
    }
    sessionStorage.setItem('goalList', JSON.stringify(goalList));
    alert("Goal Successfully Added!");
    window.location.href = "manageGoal.html";

    // alert(document.querySelector("#apaa-activity-name-input").value)
    // let newActivity = new Activity("1", "1", "1", "1", "1");
    // localStorage.setItem('activityList', JSON.stringify([new Activity("1", "1", "1", "1", "1"), new Activity("1", "1", "1", "1", "1"), new Activity("1", "1", "1", "1", "1")]));
    // var activityList = JSON.parse(localStorage.getItem("activityList"));
    // alert(activityList[0].name);
    // document.getElementsByClassName("card-left-activity-card")[0].innerHTML = "";
    // for (var i = 0; i < activityList.length; i++) {
    //     var myvar = '<a href="/action-plan-inner.html" class="ap-card">' +
    //         '                                                <div class="card action-plan-inner-card m-2 mb-3">' +
    //         '                                                    <div class="card-body">' +
    //         '                                                        <div class="contianer">' +
    //         '                                                            <div class="row">' +
    //         '                                                                <div class="col-7 m-3">' +
    //         '                                                                    <h5 class="card-title action-plan-activity">' + activityList[i].name + '</h5>' +
    //         '                                                                    <p class="action-plan-brief-description">' + activityList[i].description + '</p>' +
    //         '                                                                    <p class="card-text action-plan-details">' +
    //         '                                                                        <i class="bi bi-clock"></i> ' + activityList[i].time + '<br><i class="bi bi-geo-alt"></i> ' + activityList[i].location +
    //         '                                                                    </p>' +
    //         '                                                                </div>' +
    //         '                                                            </div>' +
    //         '                                                        </div>' +
    //         '                                                    </div>' +
    //         '                                                </div>' +
    //         '                                            </a>';

    //     document.getElementsByClassName("card-left-activity-card")[0].innerHTML += myvar;
    // }
});