class Goal {
    constructor(title, description, s, m, a, r, t, isCompleted) {
        this.title = title;
        this.description = description;
        this.s = s;
        this.m = m;
        this.a = a;
        this.r = r;
        this.t = t;
        this.isCompleted = isCompleted;
    }

};

// var activityList = [];

document.querySelector("#gag-add-goal-btn").addEventListener("click", function() {
    if (!document.querySelector("#gag-title-input").value || !document.querySelector("#gag-description-input").value) { var a = 0; } else {
        let newGoal = new Goal(document.querySelector("#gag-title-input").value, document.querySelector("#gag-description-input").value, document.querySelector("#gag-specific-input").value, document.querySelector("#gag-measurable-input").value, document.querySelector("#gag-achievable-input").value, document.querySelector("#gag-realistic-input").value, document.querySelector("#gag-date-input").value, false);
        var goalList = JSON.parse(sessionStorage.getItem("goalList"));
        if (goalList == null) {
            goalList = [];
            goalList[0] = newGoal;
        } else {
            goalList[goalList.length] = newGoal;
        }
        sessionStorage.setItem('goalList', JSON.stringify(goalList));
        alert("New Goal Successfully Created!");
        window.location.href = "goal.html";
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
        }
        // else window.location.href = "action-plan.html"
        form.classList.add("was-validated");
    }, false);
});