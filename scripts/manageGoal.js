var customalert = document.getElementById("customAlert");

function showCustom() {
    customalert.style.display = "block";
}

function toggleClass() {
    document.getElementById("c2").classList.toggle("container2");
    document.getElementById("g2").innerHTML = "";
}

function deleteClass1() {
    document.getElementById("c4").classList.remove("container4");
    document.getElementById("g4").innerHTML = "";
}