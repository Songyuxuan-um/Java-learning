function myNewPass() {
    var x = document.getElementById("myNewPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function myReEnterPass() {
    var x = document.getElementById("myReEnterPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

var forms = document.querySelectorAll(".needs-validation");
Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else window.location.href = "register-login.html"
        form.classList.add("was-validated");
    }, false);
});