console.log("Elevora JavaScript Connected Successfully!");


//Feature cards


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


//Save skills

function saveSkills(){

    let skills = [];

    let allSkills = skillList.querySelectorAll("li");

    allSkills.forEach((li) => {

        let skillName = li.querySelector("span").textContent;

        let isCompleted = li.classList.contains("completed");

        skills.push({
            name: skillName,
            completed: isCompleted
        });

    });

    localStorage.setItem("skills", JSON.stringify(skills));

}



//Display saved skill

function displaySkill(skill) {

    let li = document.createElement("li");

    let skillText = document.createElement("span");
    skillText.textContent = skill.name;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = skill.completed ? "Completed" : "Complete";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-skill-btn");


    if(skill.completed){
        li.classList.add("completed");
    }


    //Complete Button

    completeBtn.addEventListener("click", function(){

        li.classList.toggle("completed");

        
        skill.completed = li.classList.contains("completed");

        completeBtn.textContent = skill.completed ? "Completed" : "Complete";

        saveSkills();

    });



    //Delete Button

    deleteBtn.addEventListener("click", function(){
            
        li.remove();

        saveSkills();

    });


    let buttonContainer = document.createElement("div");
    
    buttonContainer.classList.add("skill-buttons");

    buttonContainer.append(completeBtn, deleteBtn);

    li.append(skillText, buttonContainer);

    skillList.appendChild(li);

}



//Load saved skill

function loadSkills() {

    let savedSkills = JSON.parse(localStorage.getItem("skills")) || [];

    savedSkills.forEach((skill) => {

        displaySkill(skill);

    });

}



//Add skill

addSkillBtn.addEventListener("click", function() {

    let skillName = skillInput.value.trim();

    if(skillName === "") {

        alert("Please enter a skill");

        return;

    }


    let newSkill = {
        name: skillName,
        completed: false
    };

    displaySkill(newSkill);

    skillInput.value = "";

    saveSkills();

});

    
    
//Load skills when Elevora opens 

loadSkills();

