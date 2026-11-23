console.log("Elevora JavaScript Connected Successfully!");

let cards = document.querySelectorAll(".feature-card");
console.log(cards.length);

let message = document.querySelector("#feature-message");

let resetBtn = document.querySelector("#reset-btn");

cards.forEach((card) => {

    card.addEventListener("click", function() {

        let featureName = card.querySelector("h3").textContent;

        message.textContent = "You Selected " + featureName;

        cards.forEach((item) => {
            item.classList.remove("selected");
        });


        card.classList.add("selected");

        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
        
    });

});

resetBtn.addEventListener("click", function() {

    cards.forEach((card) => {
        card.classList.remove("selected");
    });

    message.textContent = "";

});


//Skill Tracker
let skillInput = document.querySelector("#skill-input");
let addSkillBtn = document.querySelector("#add-skill-btn");
let skillList = document.querySelector("#skill-list");

addSkillBtn.addEventListener("click", function() {

    let skillName = skillInput.value.trim();

    if(skillName === "") {
        alert("Please enter a skill");
        return;
    }

    let li = document.createElement("li");

    let skillText = document.createElement("span");
    skillText.textContent = skillName;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-skill-btn");

    completeBtn.addEventListener("click", function() {
        li.classList.toggle("completed");

        if(li.classList.contains("completed")) {
            completeBtn.textContent = "Completed";
        } else {
            completeBtn.textContent = "Complete";
        }
    });

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.append(skillText, completeBtn, deleteBtn);

    skillList.appendChild(li);

    skillInput.value = "";

});