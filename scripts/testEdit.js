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
        // document.getElementsByClassName("card-left-goal-card")[0].innerHTML += s;

    }
    toList() {

    }
};

var identifier = JSON.parse(sessionStorage.getItem("temporaryIdentifier"));
var goalList = JSON.parse(sessionStorage.getItem("goalList"));
document.getElementById("gname").setAttribute("value", goalList[identifier].gname);
document.getElementById("specific").setAttribute("value", goalList[identifier].specific);
document.getElementById("measurable").setAttribute("value", goalList[identifier].measurable);
document.getElementById("attainable").setAttribute("value", goalList[identifier].attainable);
document.getElementById("relevant").setAttribute("value", goalList[identifier].relevant);
document.getElementById("apaa-time-input").setAttribute("value", goalList[identifier].time);
document.getElementById("apaa-date-input").setAttribute("value", goalList[identifier].date);

// document.getElementById("apea-save-changes-btn")

document.querySelector("#apea-save-changes-btn").addEventListener("click", function() {
    let newGoal = new Goal(document.querySelector("#gname").value, document.querySelector('#specific').value, document.querySelector('#measurable').value, document.querySelector('#attainable').value, document.querySelector('#relevant').value, document.querySelector("#apaa-date-input").value, document.querySelector("#apaa-time-input").value, false);
    var goalList = JSON.parse(sessionStorage.getItem("goalList"));
    goalList[identifier] = newGoal;
    sessionStorage.setItem('goalList', JSON.stringify(goalList));
    alert("Goal Successfully Edited!");
    window.location.href = "manageGoal.html";

});