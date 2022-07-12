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
// document.querySelector(".card").innerHTML += "<div class=\"goal-page-navigation\"\>\<a href=\"action-plan.html\"\>&#60; Back to Main Goal Page</a\>\<hr\>\</div\>";

// alert(HtmlEncode(s));

// localStorage.setItem('activityList', JSON.stringify([new Activity("name1", "1", "1", "1", "1"), new Activity("2", "des2", "1", "1", "1"), new Activity("3", "3", "3", "time3", "1")]));
// var activityList = [];

var activityList = JSON.parse(sessionStorage.getItem("activityList"));
// alert(activityList.length);
// var activitySend;
showActivity(false);
// document.getElementById("ap-activity-completed-card").addEventListener("click", showActivity(true));

function showActivity(booleanCompleted) {
    // document.getElementsByClassName("card-left-activity-card")[0].innerHTML = '<div class="d-none">' +
    //     '                                            <a href="/action-plan-inner.html" class="ap-card">' +
    //     '                                                <div class="card action-plan-inner-card m-2 mb-3">' +
    //     '                                                    <div class="card-body">' +
    //     '                                                        <div class="contianer">' +
    //     '                                                            <div class="row">' +
    //     '                                                                <div class="col-7 m-3">' +
    //     '                                                                    <h5 class="card-title action-plan-activity">Activity</h5>' +
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
    if (!activityList || activityList.length == 0) {
        document.getElementById("ap-goal-percentage").innerHTML = '0';
        document.getElementById("ap-activity-pending-count").innerHTML = '0';
        document.getElementById("ap-activity-completed-count").innerHTML = '0';

    } else {
        var tempPendingCount = 0;
        for (var i = 0; i < activityList.length; i++) {
            if (!booleanCompleted) {
                if (!activityList[i].isCompleted) {
                    var myvar =
                        // '<a href="/action-plan-inner.html" class="ap-card" id="a-' + i + '">' +
                        '                                                <div class="card action-plan-inner-card m-2 mb-3" id="at-' + i + '">' +
                        '                                                    <div class="card-body">' +
                        '                                                        <div class="contianer">' +
                        '                                                            <div class="row">' +
                        '                                                                <div class="col-7 m-3">' +
                        '                                                                    <h5 class="card-title action-plan-activity">' + activityList[i].name + '</h5>' +
                        '                                                                    <p class="action-plan-brief-description">' + activityList[i].description + '</p>' +
                        '                                                                    <p class="card-text action-plan-details">' +
                        '                                                                        <i class="bi bi-clock"></i> ' + activityList[i].time + '<br><i class="bi bi-geo-alt"></i> ' + activityList[i].location +
                        '                                                                    </p>' +
                        '                                                                </div>' +
                        '                                                            </div>' +
                        '                                                        </div>' +
                        '                                                    </div>' +
                        '                                                </div>'
                        // +
                        // '                                            </a>';

                    document.getElementsByClassName("card-left-activity-card")[0].innerHTML += myvar;
                    // var activityLink = "a-" + i;
                    addOnClick();
                    tempPendingCount += 1;
                }
                var tempCompletedCount = (activityList.length - tempPendingCount);
                var tempPercentage = (tempCompletedCount / activityList.length) * 100;
                document.getElementById("ap-goal-percentage").innerHTML = Math.round(tempPercentage);
                document.getElementById("ap-activity-pending-count").innerHTML = tempPendingCount;
                document.getElementById("ap-activity-completed-count").innerHTML = tempCompletedCount;
            } else {
                var tempCompletedCount = 0;
                if (activityList[i].isCompleted) {
                    var myvar =
                        // '<a href="/action-plan-inner.html" class="ap-card" id="a-' + i + '">' +
                        '                                                <div class="card action-plan-inner-card m-2 mb-3" id="at-' + i + '">' +
                        '                                                    <div class="card-body">' +
                        '                                                        <div class="contianer">' +
                        '                                                            <div class="row">' +
                        '                                                                <div class="col-7 m-3">' +
                        '                                                                    <h5 class="card-title action-plan-activity">' + activityList[i].name + '</h5>' +
                        '                                                                    <p class="action-plan-brief-description">' + activityList[i].description + '</p>' +
                        '                                                                    <p class="card-text action-plan-details">' +
                        '                                                                        <i class="bi bi-clock"></i> ' + activityList[i].time + '<br><i class="bi bi-geo-alt"></i> ' + activityList[i].location +
                        '                                                                    </p>' +
                        '                                                                </div>' +
                        '                                                            </div>' +
                        '                                                        </div>' +
                        '                                                    </div>' +
                        '                                                </div>'
                        // +
                        // '                                            </a>';

                    document.getElementsByClassName("card-left-activity-card")[0].innerHTML += myvar;
                    // var activityLink = "a-" + i;
                    addOnClick();
                    tempCompletedCount += 1;
                }
                var tempPendingCount = (activityList.length - tempCompletedCount);
                var tempPercentage = (tempCompletedCount / activityList.length) * 100;
                document.getElementById("ap-goal-percentage").innerHTML = Math.round(tempPercentage);
                document.getElementById("ap-activity-pending-count").innerHTML = tempPendingCount;
                document.getElementById("ap-activity-completed-count").innerHTML = tempCompletedCount;

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
            window.location.href = "action-plan-inner.html";
        };
    }
}

// document.getElementById("ap-activity-completed-card").addEventListener("click", showActivity(true));




function storeDetails(ps) {
    var Sdetails = '<h5 class="card-title api-title" id="api-title">' + activityList[ps].name + '</h5>' +
        '                                                            <p class="api-brief-description" id="api-brief-description">' + activityList[ps].description + '</p>' +
        '                                                            <p class="card-text api-content" id="api-content">' +
        '                                                                <i class="bi bi-clock"></i> <span class="api-time" id="api-time">' + activityList[ps].time + '</span><br>' +
        '                                                                <i class="bi bi-calendar"></i> <span class="api-date" id="api-date">' + activityList[ps].date + '</span><br>' +
        '                                                                <i class="bi bi-geo-alt"></i> <span class="api-location" id="api-date">' + activityList[ps].location + '</span><br>' +
        '                                                            </p>' +
        '                                                            <p class="d-none" id="api-identifier">' + ps + '</p>';
    sessionStorage.setItem('ActivityDetails', Sdetails);

}




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

// document.getElementsByClassName("card-left-activity-card")[0].innerHTML += "&lt;a href=\"/action-plan-inner.html\" class=\"ap-card\"&gt;&lt;div class=\"card action-plan-inner-card m-2 mb-3\"&gt;&lt;div class=\"card-body\"&gt;&lt;div class=\"contianer\"&gt;&lt;div class=\"row\"&gt;<br>&lt;div class=\"col-7 m-3\"&gt;&lt;h5 class=\"card-title action-plan-activity\"&gt;Activity&lt;/h5&gt;&lt;p class=\"action-plan-brief-description\"&gt;Brief Description&lt;/p&gt;&lt;p class=\"card-text action-plan-details\"&gt;&lt;i class=\"bi bi-clock\"&gt;&lt;/i&gt; 12.00&lt;br&gt;&lt;i class=\"bi bi-geo-alt\"&gt;&lt;/i&gt; Kuala Lumpur&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/a&gt;";


// document.getElementsByClassName("card-left-activity-card")[0].innerHTML += s;
// document.getElementsByClassName("card-left-activity-card")[0].innerHTML += s;


// s = querySelector(".test-html").innerHTML;
// window.alert(s.textContent);

// document.querySelector("#apaa-add-activity-btn").addEventListener("click", function() {
//     let newActivity = new Activity(document.querySelector("#apaa-activity-name-input").value, document.querySelector("#apaa-brief-description-input").value, document.querySelector("#apaa-time-input").value, document.querySelector("#apaa-date-input").value, document.querySelector("#apaa-location-input").value);
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