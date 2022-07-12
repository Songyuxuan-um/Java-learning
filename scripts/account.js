// let date = new Date();
// const monthForm = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// let monthDate = date.getDate() + "";
// if (monthDate.length == 1) {
//     monthDate = "0" + monthDate;
// }
// document.getElementById("time").innerHTML = monthForm[date.getMonth()] + "&emsp;" + monthDate;; // &emsp add 4 empty spaces between month & date


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function updateFormInput() {
    let username = document.getElementById('Username').value;
    document.getElementById('my-form-username').value = username;
}

function handleSubmit() {
    /*const username = document.getElementById('Username').value;
    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('LastName').value;
    const age = document.getElementById('Age').value;
    const gender = document.getElementById('Gender').value;
    const birthday = document.getElementById('Birthday').value;
    const occupation = document.getElementById('Occupation').value;
    const phone = document.getElementById('Phone').value;
    const emailAddress = document.getElementById('EmailAddress').value;

    // to set into local storage
    localStorage.setItem("USERNAME", username);
    localStorage.setItem("FIRSTNAME", firstName);
    localStorage.setItem("LASTNAME", lastName);
    localStorage.setItem("AGE", age);
    localStorage.setItem("GENDER", gender);
    localStorage.setItem("BIRTHDAY", birthday);
    localStorage.setItem("OCCUPATION", occupation);
    localStorage.setItem("PHONE", phone);
    localStorage.setItem("EMAILADDRESS", emailAddress);

    /!* sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("SURNAME", surname); *!/

    return;*/
}

window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const username = params.get('Username');
    const emailAddress = params.get('EmailAddress'); 
    const firstName = params.get('FirstName');
    const lastName = params.get('LastName'); 
    const age = params.get('Age');
    const gender = params.get('Gender'); 
    const phone = params.get('Phone');
    const occupation = params.get('Occupation');  */

    // Via local Storage
    const username = localStorage.getItem('USERNAME');
    const firstName = localStorage.getItem('FIRSTNAME');
    const lastName = localStorage.getItem('LASTNAME');
    const age = localStorage.getItem('AGE');
    const gender = localStorage.getItem('GENDER');
    const birthday = localStorage.getItem('BIRTHDAY');
    const occupation = localStorage.getItem('OCCUPATION');
    const phone = localStorage.getItem('PHONE');
    const emailAddress = localStorage.getItem('EMAILADDRESS');

    /* const name = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('SURNAME'); */

    document.getElementById('result-username').innerHTML = username;
    document.getElementById('result-firstName').innerHTML = firstName;
    document.getElementById('result-lastName').innerHTML = lastName;
    document.getElementById('result-age').innerHTML = age;
    document.getElementById('result-gender').innerHTML = gender;
    document.getElementById('result-birthday').innerHTML = birthday;
    document.getElementById('result-occupation').innerHTML = occupation;
    document.getElementById('result-phone').innerHTML = phone;
    document.getElementById('result-emailAddress').innerHTML = emailAddress;

})