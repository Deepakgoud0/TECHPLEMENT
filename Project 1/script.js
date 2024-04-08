
let bookNowButtonEl = document.getElementById("goabookNowButton");
let bookNowButtonEl2 = document.getElementById("ladakhbookNowButton");
let bookNowButtonEl3 = document.getElementById("kodaikanalbookNowButton");
let bookNowButtonEl4 = document.getElementById("ootybookNowButton");
let registerCardEl = document.getElementById("registerCard");
let registerCardEl2 = document.getElementById("registerCard2");
let registerCardEl3 = document.getElementById("registerCard3");
let registerCardEl4 = document.getElementById("registerCard4");
let cardContainerEl = document.getElementById("card-container");



bookNowButtonEl.onclick = function() {
    registerCardEl.classList.remove("display");
    registerCardEl2.classList.add("display");
    registerCardEl3.classList.add("display");
    registerCardEl4.classList.add("display");
}

bookNowButtonEl2.onclick = function() {
    registerCardEl.classList.add("display");
    registerCardEl2.classList.remove("display");
    registerCardEl3.classList.add("display");
    registerCardEl4.classList.add("display");
}

bookNowButtonEl3.onclick = function() {
    registerCardEl.classList.add("display");
    registerCardEl2.classList.add("display");
    registerCardEl3.classList.remove("display");
    registerCardEl4.classList.add("display");
}

bookNowButtonEl4.onclick = function() {
    registerCardEl.classList.add("display");
    registerCardEl2.classList.add("display");
    registerCardEl3.classList.add("display");
    registerCardEl4.classList.remove("display");
}
