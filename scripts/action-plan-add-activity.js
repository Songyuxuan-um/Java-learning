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
        // document.getElementsByClassName("card-left-activity-card")[0].innerHTML += s;

    }
    toList() {

    }
};

// var activityList = [];

document.querySelector("#apaa-add-activity-btn").addEventListener("click", function() {
    if (!document.querySelector("#apaa-activity-name-input").value || !document.querySelector("#apaa-brief-description-input").value || !document.querySelector("#apaa-date-input").value || !document.querySelector("#apaa-time-input").value || !document.querySelector("#apaa-location-input").value) { var a = 0; } else {
        let newActivity = new Activity(document.querySelector("#apaa-activity-name-input").value, document.querySelector("#apaa-brief-description-input").value, document.querySelector("#apaa-date-input").value, document.querySelector("#apaa-time-input").value, document.querySelector("#apaa-location-input").value, false);
        var activityList = JSON.parse(sessionStorage.getItem("activityList"));
        if (activityList == null) {
            activityList = [];
            activityList[0] = newActivity;
        } else {
            activityList[activityList.length] = newActivity;
        }
        sessionStorage.setItem('activityList', JSON.stringify(activityList));
        alert("Activity Successfully Added!");
        window.location.href = "action-plan.html";
    }

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
var forms = document.querySelectorAll(".needs-validation");
Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else window.location.href = "action-plan.html"
        form.classList.add("was-validated");
    }, false);
});