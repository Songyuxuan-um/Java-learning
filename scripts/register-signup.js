function mySignUp() {
    var x = document.getElementById("mySignUpPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

/*
var forms = document.querySelectorAll(".needs-validation");
Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            if (sessionStorage.getItem("mentor-mentee-key") == "mentee") {
                window.location.href = "manageAcc.html"
            } else {
                window.location.href = "manageMentorAccount.html"
            }
        }
        form.classList.add("was-validated");
    }, false);
});*/
