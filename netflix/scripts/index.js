// ==========================
// 1. VARIABLES
// ==========================

// const variable
const platformName = "NETFLEX";

// let variable
let userName = "Guest";
let watchCount = 0;

console.log("Platform:", platformName);
console.log("User:", userName);

// Display variables on page
const header = document.querySelector(".header");
let info = document.createElement("p");
info.innerText = `Welcome ${userName} to ${platformName} | Watched: ${watchCount}`;
header.appendChild(info);

// Update let variable dynamically
function updateWatchCount() {
    watchCount++;
    info.innerText = `Welcome ${userName} to ${platformName} | Watched: ${watchCount}`;
}

// Attempt to change const (will throw error in console)
try {
    platformName = "NEW NAME";
} catch (e) {
    console.log("Error: Cannot reassign const");
}

// ==========================
// 2. FUNCTIONS
// ==========================

// Function Declaration
function showWelcome() {
    alert("Welcome to NETFLEX 🎬");
}

// Function Expression
const changeUser = function(name) {
    userName = name;
    info.innerText = `Welcome ${userName} to ${platformName} | Watched: ${watchCount}`;
};

// Arrow Function
const addMovies = (a, b) => {
    return a + b;
};

// Function with return value
function getTotalMovies() {
    return addMovies(10, 5);
}

console.log("Total Movies:", getTotalMovies());

// ==========================
// 3. OBJECT
// ==========================

let movie = {
    name: "RRR",
    rating: 9,
    status: "Available"
};

// Dot notation
console.log(movie.name);

// Bracket notation
console.log(movie["rating"]);

// Display object data
let movieDiv = document.createElement("p");
movieDiv.innerText = `Movie: ${movie.name} | Rating: ${movie.rating} | Status: ${movie.status}`;
document.body.appendChild(movieDiv);

// Update object property
movie.rating = 10;
console.log("Updated Movie:", movie);

// ==========================
// 4. METHODS
// ==========================

let user = {
    name: "Guest",
    plan: "Basic",

    upgradePlan: function() {
        this.plan = "Premium";
        return `${this.name} upgraded to ${this.plan}`;
    }
};

// Call method
let methodResult = document.createElement("p");
methodResult.innerText = user.upgradePlan();
document.body.appendChild(methodResult);

// ==========================
// 5. POP-UP BOXES
// ==========================

// Alert
setTimeout(() => {
    alert("Enjoy watching on NETFLEX!");
}, 1000);

// Prompt
let enteredName = prompt("Enter your name:");
if (enteredName) {
    changeUser(enteredName);
}

// Confirm
let confirmUpgrade = confirm("Do you want to upgrade to Premium?");
if (confirmUpgrade) {
    alert(user.upgradePlan());
}

// ==========================
// 6. EVENTS & EVENT LISTENERS
// ==========================

// Click event (modify content)
document.querySelector(".home").addEventListener("click", function() {
    alert("Home clicked!");
    updateWatchCount();
});

// Mouseover event (modify style)
document.querySelector(".netflexlogo").addEventListener("mouseover", function() {
    this.style.transform = "scale(1.2)";
});

document.querySelector(".netflexlogo").addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
});

// Input event (create input dynamically)
let inputBox = document.createElement("input");
inputBox.placeholder = "Type something...";
document.body.appendChild(inputBox);

let liveText = document.createElement("p");
document.body.appendChild(liveText);

inputBox.addEventListener("input", function() {
    liveText.innerText = "You typed: " + this.value;
});

// Click event on images (reuse function)
let images = document.querySelectorAll("img");

images.forEach(img => {
    img.addEventListener("click", function() {
        updateWatchCount();
        this.style.border = "3px solid red";
    });
});