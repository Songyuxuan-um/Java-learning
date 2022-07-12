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

var identifier = JSON.parse(sessionStorage.getItem("temporaryIdentifier"));
var activityList = JSON.parse(sessionStorage.getItem("activityList"));
document.getElementById("apaa-activity-name-input").setAttribute("value", activityList[identifier].name);
document.getElementById("apaa-brief-description-input").setAttribute("value", activityList[identifier].description);
document.getElementById("apaa-time-input").setAttribute("value", activityList[identifier].time);
document.getElementById("apaa-date-input").setAttribute("value", activityList[identifier].date);
document.getElementById("apaa-location-input").setAttribute("value", activityList[identifier].location);

// document.getElementById("apea-save-changes-btn")

document.querySelector("#apea-save-changes-btn").addEventListener("click", function() {
    if (!document.querySelector("#apaa-activity-name-input").value || !document.querySelector("#apaa-brief-description-input").value || !document.querySelector("#apaa-date-input").value || !document.querySelector("#apaa-time-input").value || !document.querySelector("#apaa-location-input").value) { var a = 0; } else {
        let newActivity = new Activity(document.querySelector("#apaa-activity-name-input").value, document.querySelector("#apaa-brief-description-input").value, document.querySelector("#apaa-date-input").value, document.querySelector("#apaa-time-input").value, document.querySelector("#apaa-location-input").value, false);
        var activityList = JSON.parse(sessionStorage.getItem("activityList"));
        activityList[identifier] = newActivity;
        sessionStorage.setItem('activityList', JSON.stringify(activityList));
        alert("Activity Successfully Edited!");
        window.location.href = "action-plan.html";
    }
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