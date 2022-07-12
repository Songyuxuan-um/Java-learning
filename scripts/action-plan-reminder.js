var buttonDelete = document.getElementsByClassName("button-reminder")[0];
var buttonSave = document.getElementById("button-save");
var show = document.getElementsByClassName("show")[0];
var selectBox = document.getElementsByClassName("selectBox")[0];
var c = document.getElementsByTagName("c")[0];
var b = document.getElementsByTagName("b")[0];

buttonDelete.addEventListener("click", function() {
    var self = this;
    show.style.display = "flex";
    show.classList.add("showStyle");
    // self.style.opacity=0;
    setTimeout(function() {
        selectBox.style.visibility = "visible";
    }, 300)
    setTimeout(function() {
        // self.style.display = "none";
        selectBox.style.transform = "translateX(0)";
        c.style.marginTop = "15px";
    }, 500)

})
buttonSave.addEventListener("click", function() {
    alert("Reminder Saved!");
    show.style.display = "none";
})


// buttonDelete.onclick = function() {
//     var self = this;
//     show.classList.add("showStyle");
//     // self.style.opacity=0;
//     setTimeout(function() {
//         selectBox.style.visibility = "visible";
//     }, 300)
//     setTimeout(function() {
//         // self.style.display = "none";
//         selectBox.style.transform = "translateX(0)";
//         c.style.marginTop = "15px";
//     }, 500)

// }

var close = document.getElementsByClassName('closeBtn')
for (let i in close) {
    close[i].onclick = function close() {
        // console.log(1111)
        show.style.display = "none";
    }
}