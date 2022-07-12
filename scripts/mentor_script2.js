let date = new Date();
const monthForm = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthDate = date.getDate() + "";
if (monthDate.length == 1) {
    monthDate = "0" + monthDate;
}
document.getElementById("time").innerHTML = "&nbsp;&nbsp;" + monthForm[date.getMonth()] + "&emsp;" + monthDate; // &emsp add 4 empty spaces between month & date

class Feedback {
    constructor(title, comments) {
        this.title = title;
        this.comments = comments
    }
}

function inviteMentor() {
    let invitation = document.querySelector(".modal-footer");
    let node = document.querySelector(".mentor-invitation-message")
    if (node == null) {
        html = `<div class="mentor-invitation-message">
    <i class="success"><img src="images/check-circle-fill.svg"/></i> Success: Your Message Sent Successfully!
</div>`
        let temp = invitation.innerHTML;
        invitation.innerHTML = html + temp;
    }
}

function feedbackPassing() {
    let feedback = new Feedback(document.querySelector("#title").value, document.querySelector("#contents").value);
    let feedbackList = JSON.parse(sessionStorage.getItem("feedbackList"));
    if (feedbackList == null) {
        feedbackList = [];
        feedbackList[0] = feedback;
    } else {
        feedbackList[feedbackList.length] = feedback;
    }
    sessionStorage.setItem('feedbackList', JSON.stringify(feedbackList));
    window.location.href = "viewMenteeGoalEdited.html";
}

function removeInvite() {
    let removed = document.querySelector(".mentor-invitation-message");
    removed.remove();
}

btnClickable();

function btnClickable() {
    let button = document.getElementById("invite-mentor");
    let form = document.getElementById("interactionForm");
    // let a = document.querySelector("#title");
    // let b = document.querySelector("#contents");
    // a.addEventListener("input", () => {
    //     if (a.value.length == 0) {
    //         button.setAttribute("disabled", "disabled");
    //     } else {
    //         button.removeAttribute("disabled");
    //     }
    // });
    // b.addEventListener("input", () => {
    //     if (b.value.length == 0) {
    //         button.setAttribute("disabled", "disabled");
    //     } else {
    //         button.removeAttribute("disabled");
    //     }
    // });
    form.addEventListener("input", () => {
        if (document.querySelector("#title").value.length == 0 || document.querySelector("#contents").value.length == 0) {
            button.setAttribute("disabled", "disabled");
        } else {
            button.removeAttribute("disabled");
        }
    });
}

function clearMessage() {
    document.querySelector("#title").value = "";
    document.querySelector("#contents").value = "";
    let button = document.getElementById("invite-mentor");
    // button.setAttribute("disabled", "disabled");
}