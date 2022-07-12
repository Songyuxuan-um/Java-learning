document.getElementById("r-mentor-btn").addEventListener("click", function() {

    sessionStorage.setItem("mentor-mentee-key", "mentor");
    window.location.href = "register-login.html";

});

document.getElementById("r-mentee-btn").addEventListener("click", function() {

    sessionStorage.setItem("mentor-mentee-key", "mentee");
    window.location.href = "register-login.html";

});