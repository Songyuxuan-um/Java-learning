let date = new Date();
const monthForm = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthDate = date.getDate() + "";
if (monthDate.length == 1) {
    monthDate = "0" + monthDate;
}
document.getElementById("time").innerHTML = "&nbsp;&nbsp;" + monthForm[date.getMonth()] + "&emsp;" + monthDate; // &emsp add 4 empty spaces between month & date