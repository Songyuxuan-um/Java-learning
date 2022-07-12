// let feedbackList = JSON.parse(sessionStorage.getItem("feedbackList"));
// let feedback = document.querySelector("#feedback");
// if (feedbackList != null) {
//     for (let i = 0; i < feedbackList.length; i++) {
//         feedback.innerHTML = `<a href="#/" id="${i}" class="list-group-item list-group-item-custom list-group-item-action">
//         <button id="b${i}" type="button" class="btn-close btn-close-custom"  onclick="removeComment(this)"></button>
//         <div class="d-flex w-100 justify-content-between">
//             <h5 class="mb-1 fs-5">${feedbackList[i].title}</h5>
//             <small>3 days ago</small>
//         </div>
//         <small>${feedbackList[i].comments}</small>
//     </a> ` + feedback.innerHTML;
//     }
// }

function removeComment(element) {
    let feedback = document.querySelector("#feedback");
    let btnCloseId = element.id[1];
    let comment = document.getElementById(btnCloseId);
    comment.remove();
    // let feedbackList = JSON.parse(sessionStorage.getItem("feedbackList"));
    // feedbackList.splice(btnCloseId, 1); // Remove the comment at specific index
    // console.log(feedbackList);
    // sessionStorage.setItem("feedbackList", JSON.stringify(feedbackList));
}