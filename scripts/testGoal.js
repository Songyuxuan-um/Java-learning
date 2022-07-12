// import { appendFile } from 'fs';
// import { appendFile } from 'fs';
// import { editText } from './action-plan-inner.js';

// let s = document.getElementsByClassName("ap-card")[0].outerHTML;



function HtmlEncode(s) {
    var el = document.createElement("div");
    el.innerText = el.textContent = s;
    s = el.innerHTML;
    return s;
};
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
// document.querySelector(".card").innerHTML += "<div class=\"goal-page-navigation\"\>\<a href=\"action-plan.html\"\>&#60; Back to Main Goal Page</a\>\<hr\>\</div\>";

// alert(HtmlEncode(s));

// localStorage.setItem('goalList', JSON.stringify([new goal("name1", "1", "1", "1", "1"), new goal("2", "des2", "1", "1", "1"), new goal("3", "3", "3", "time3", "1")]));
// var goalList = [];

var goalList = JSON.parse(sessionStorage.getItem("goalList"));
// alert(goalList.length);
// var goalSend;
showGoal(false);
// document.getElementById("ap-Goal-completed-card").addEventListener("click", showGoal(true));

function showGoal(booleanCompleted) {
    // document.getElementsByClassName("card-left-Goal-card")[0].innerHTML = '<div class="d-none">' +
    //     '                                            <a href="/action-plan-inner.html" class="ap-card">' +
    //     '                                                <div class="card action-plan-inner-card m-2 mb-3">' +
    //     '                                                    <div class="card-body">' +
    //     '                                                        <div class="contianer">' +
    //     '                                                            <div class="row">' +
    //     '                                                                <div class="col-7 m-3">' +
    //     '                                                                    <h5 class="card-title action-plan-Goal">Goal</h5>' +
    //     '                                                                    <p class="action-plan-brief-description">Brief Description</p>' +
    //     '                                                                    <p class="card-text action-plan-details">' +
    //     '                                                                        <i class="bi bi-clock"></i> 12.00<br><i class="bi bi-geo-alt"></i> Kuala Lumpur' +
    //     '                                                                    </p>' +
    //     '                                                                </div>' +
    //     '                                                            </div>' +
    //     '                                                        </div>' +
    //     '                                                    </div>' +
    //     '                                                </div>' +
    //     '                                            </a>' +
    //     '                                        </div>';

    // ;
    if (!goalList) {
        document.getElementById("ap-goal-percentage").innerHTML = '0';
        document.getElementById("ap-goal-pending-count").innerHTML = '0';
        document.getElementById("ap-goal-completed-count").innerHTML = '0';

    } else {
        var tempPendingCount = 0;
        for (var i = 0; i < goalList.length; i++) {
            if (!booleanCompleted) {
                if (!goalList[i].isCompleted) {
                    var myvar =
                        // '<a href="/action-plan-inner.html" class="ap-card" id="a-' + i + '">' +
                        '                                                <div class="card action-plan-inner-card m-2 mb-3" id="at-' + i + '">' +
                        '                                                    <div class="card-body">' +
                        '                                                        <div class="contianer">' +
                        '                                                            <div class="row">' +
                        '                                                                <div class="col-7 m-3">' +
                        '                                                                    <h5 class="card-title action-plan-goal">' + "Goal Name: " + goalList[i].gname + '</h5>' +
                        // '                                                                    <p class="goal-specific">' + goalList[i].specific + '</p>' +
                        // '                                                                    <p class="goal-measurable">' + goalList[i].measurable + '</p>' +
                        // '                                                                    <p class="goal-attainable">' + goalList[i].attainable + '</p>' +
                        // '                                                                    <p class="goal-relevant">' + goalList[i].relevant + '</p>' +
                        '                                                                    <p class="card-text action-plan-details">' +
                        '                                                                       <i class="bi bi-calendar"></i> ' + goalList[i].date + '<br> ' +
                        '                                                                    </p>' +
                        '                                                                </div>' +
                        '                                                            </div>' +
                        '                                                        </div>' +
                        '                                                    </div>' +
                        '                                                </div>'
                        // +
                        // '                                            </a>';

                    document.getElementsByClassName("card-left-goal-card")[0].innerHTML += myvar;
                    // var goalLink = "a-" + i;
                    addOnClick();
                    tempPendingCount += 1;
                }
                var tempCompletedCount = (goalList.length - tempPendingCount);
                var tempPercentage = (tempCompletedCount / goalList.length) * 100;
                document.getElementById("ap-goal-percentage").innerHTML = Math.round(tempPercentage);
                document.getElementById("ap-goal-pending-count").innerHTML = tempPendingCount;
                document.getElementById("ap-goal-completed-count").innerHTML = tempCompletedCount;
            } else {
                var tempCompletedCount = 0;
                if (goalList[i].isCompleted) {
                    var myvar =
                        // '<a href="/action-plan-inner.html" class="ap-card" id="a-' + i + '">' +
                        '                                                <div class="card action-plan-inner-card m-2 mb-3" id="at-' + i + '">' +
                        '                                                    <div class="card-body">' +
                        '                                                        <div class="contianer">' +
                        '                                                            <div class="row">' +
                        '                                                                <div class="col-7 m-3">' +
                        '                                                                    <h5 class="card-title action-plan-goal">' + "Goal Name: " + goalList[i].gname + '</h5>' +
                        '                                                                    <p class="goal-specific">' + "Specific: " + goalList[i].specific + '</p>' +
                        '                                                                    <p class="goal-measurable">' + "Measurable: " + goalList[i].measurable + '</p>' +
                        '                                                                    <p class="goal-attainable">' + "Attainable: " + goalList[i].attainable + '</p>' +
                        '                                                                    <p class="goal-relevant">' + "Relevant: " + goalList[i].relevant + '</p>' +
                        '                                                                    <p class="card-text action-plan-details">' +
                        '                                                                        <i class="bi bi-clock"></i> ' + goalList[i].time + '<br>' +
                        '                                                                    </p>' +
                        '                                                                </div>' +
                        '                                                            </div>' +
                        '                                                        </div>' +
                        '                                                    </div>' +
                        '                                                </div>'
                        // +
                        // '                                            </a>';

                    document.getElementsByClassName("card-left-goal-card")[0].innerHTML += myvar;
                    // var goalLink = "a-" + i;
                    addOnClick();
                    tempCompletedCount += 1;
                }
                var tempPendingCount = (goalList.length - tempCompletedCount);
                var tempPercentage = (tempCompletedCount / goalList.length) * 100;
                document.getElementById("ap-goal-percentage").innerHTML = Math.round(tempPercentage);
                document.getElementById("ap-goal-pending-count").innerHTML = tempPendingCount;
                document.getElementById("ap-goal-completed-count").innerHTML = tempCompletedCount;

            }


        }
    }
}

function addOnClick() {
    var activities = document.getElementsByClassName('action-plan-inner-card');
    for (var i = 0; i < activities.length; i++) {
        activities[i].onclick = function() {
            var position = this.id;
            // alert(position);
            storeDetails(position.substring(3));
            window.location.href = "testInner.html";
        };
    }
}

// document.getElementById("ap-goal-completed-card").addEventListener("click", showgoal(true));




function storeDetails(ps) {
    var Sdetails = '<h5 class="card-title api-title" id="api-title">' + "Goal Name: " + goalList[ps].gname + '</h5>' +
        '                                                            <p class="api-brief-description" id="api-specific">' + "Specific: " + goalList[ps].specific + '</p>' +
        '                                                            <p class="api-measurable-description" id="api-measurable">' + "Measurable: " + goalList[ps].measurable + '</p>' +
        '                                                            <p class="api-attainable-description" id="api-attainable">' + "Attainable: " + goalList[ps].attainable + '</p>' +
        '                                                            <p class="api-relevant-description" id="api-relevant">' + "Relevant: " + goalList[ps].relevant + '</p>' +
        "Time-bound:" +
        '                                                            <p class="card-text api-content" id="api-content">' +
        '                                                                <i class="bi bi-clock"></i> <span class="api-time" id="api-time">' + goalList[ps].time + '</span><br>' +
        '                                                                <i class="bi bi-calendar"></i> <span class="api-date" id="api-date">' + goalList[ps].date + '</span><br>' +
        //   '                                                                <i class="bi bi-geo-alt"></i> <span class="api-location" id="api-date">' + goalList[ps].location + '</span><br>' +
        '                                                            </p>' +
        '                                                            <p class="d-none" id="api-identifier">' + ps + '</p>';
    sessionStorage.setItem('GoalDetails', Sdetails);

}




// for (var i = 0; i < goalList.length; i++) {
//     var myvar = '<a href="/action-plan-inner.html" class="ap-card">' +
//         '                                                <div class="card action-plan-inner-card m-2 mb-3">' +
//         '                                                    <div class="card-body">' +
//         '                                                        <div class="contianer">' +
//         '                                                            <div class="row">' +
//         '                                                                <div class="col-7 m-3">' +
//         '                                                                    <h5 class="card-title action-plan-goal">' + goalList[i].name + '</h5>' +
//         '                                                                    <p class="action-plan-brief-description">' + goalList[i].description + '</p>' +
//         '                                                                    <p class="card-text action-plan-details">' +
//         '                                                                        <i class="bi bi-clock"></i> ' + goalList[i].time + '<br><i class="bi bi-geo-alt"></i> ' + goalList[i].location +
//         '                                                                    </p>' +
//         '                                                                </div>' +
//         '                                                            </div>' +
//         '                                                        </div>' +
//         '                                                    </div>' +
//         '                                                </div>' +
//         '                                            </a>';

//     document.getElementsByClassName("card-left-goal-card")[0].innerHTML += myvar;
// }

// document.getElementsByClassName("card-left-goal-card")[0].innerHTML += "&lt;a href=\"/action-plan-inner.html\" class=\"ap-card\"&gt;&lt;div class=\"card action-plan-inner-card m-2 mb-3\"&gt;&lt;div class=\"card-body\"&gt;&lt;div class=\"contianer\"&gt;&lt;div class=\"row\"&gt;<br>&lt;div class=\"col-7 m-3\"&gt;&lt;h5 class=\"card-title action-plan-goal\"&gt;goal&lt;/h5&gt;&lt;p class=\"action-plan-brief-description\"&gt;Brief Description&lt;/p&gt;&lt;p class=\"card-text action-plan-details\"&gt;&lt;i class=\"bi bi-clock\"&gt;&lt;/i&gt; 12.00&lt;br&gt;&lt;i class=\"bi bi-geo-alt\"&gt;&lt;/i&gt; Kuala Lumpur&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/a&gt;";


// document.getElementsByClassName("card-left-goal-card")[0].innerHTML += s;
// document.getElementsByClassName("card-left-goal-card")[0].innerHTML += s;


// s = querySelector(".test-html").innerHTML;
// window.alert(s.textContent);

// document.querySelector("#apaa-add-goal-btn").addEventListener("click", function() {
//     let newgoal = new goal(document.querySelector("#apaa-activity-name-input").value, document.querySelector("#apaa-brief-description-input").value, document.querySelector("#apaa-time-input").value, document.querySelector("#apaa-date-input").value, document.querySelector("#apaa-location-input").value);
//     var activityList = JSON.parse(localStorage.getItem("activityList"));
//     activityList[activityList.length] = newActivity;
//     localStorage.setItem('activityList', JSON.stringify(activityList));
//     // alert(document.querySelector("#apaa-activity-name-input").value)
//     // let newActivity = new Activity("1", "1", "1", "1", "1");
//     // localStorage.setItem('activityList', JSON.stringify([new Activity("1", "1", "1", "1", "1"), new Activity("1", "1", "1", "1", "1"), new Activity("1", "1", "1", "1", "1")]));
//     // var activityList = JSON.parse(localStorage.getItem("activityList"));
//     // alert(activityList[0].name);
//     document.getElementsByClassName("card-left-activity-card")[0].innerHTML = "";
//     for (var i = 0; i < activityList.length; i++) {
//         var myvar = '<a href="/action-plan-inner.html" class="ap-card">' +
//             '                                                <div class="card action-plan-inner-card m-2 mb-3">' +
//             '                                                    <div class="card-body">' +
//             '                                                        <div class="contianer">' +
//             '                                                            <div class="row">' +
//             '                                                                <div class="col-7 m-3">' +
//             '                                                                    <h5 class="card-title action-plan-activity">' + activityList[i].name + '</h5>' +
//             '                                                                    <p class="action-plan-brief-description">' + activityList[i].description + '</p>' +
//             '                                                                    <p class="card-text action-plan-details">' +
//             '                                                                        <i class="bi bi-clock"></i> ' + activityList[i].time + '<br><i class="bi bi-geo-alt"></i> ' + activityList[i].location +
//             '                                                                    </p>' +
//             '                                                                </div>' +
//             '                                                            </div>' +
//             '                                                        </div>' +
//             '                                                    </div>' +
//             '                                                </div>' +
//             '                                            </a>';

//         document.getElementsByClassName("card-left-activity-card")[0].innerHTML += myvar;
//     }
// });


// appendFile('mynewfile1.txt', 'Hello content!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// var activityList = [new Activity(document.querySelector("#apaa-activity-name-input").value, document.querySelector("#apaa-brief-description-input").value, document.querySelector("#apaa-time-input").value, document.querySelector("#apaa-date-input").value, document.querySelector("#apaa-location-input").value)];