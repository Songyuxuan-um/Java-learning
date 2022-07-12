function myLogIn() {
    var x = document.getElementById("myLogInPassword");
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
        } else window.location.href = "indexMentor.html"
        form.classList.add("was-validated");
    }, false);
});