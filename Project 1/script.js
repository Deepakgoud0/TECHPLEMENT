
let bookNowButtonEl = document.getElementById("bookNowButton");
let registerCardEl = document.getElementById("registerCard");



bookNowButtonEl.onclick = function() {
    registerCardEl.classList.remove("display");
}
