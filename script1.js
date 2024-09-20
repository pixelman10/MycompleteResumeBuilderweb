"use strict";
var _a, _b, _c, _d;
(_a = document.getElementById("generate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const skillsInput = document.getElementById("skills");
    const experienceInput = document.getElementById("experience");
    const educationInput = document.getElementById("education");
    const summaryInput = document.getElementById("summary");
    const hobbiesInput = document.getElementById('hobbies');
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const skills = skillsInput.value;
    const experience = experienceInput.value;
    const education = educationInput.value;
    const summary = summaryInput.value;
    const hobbies = hobbiesInput.value;
    if (name && email && phone && skills && experience && education && summary && hobbies) {
        document.getElementById("outputName").textContent = `Name: ${name}`;
        document.getElementById("outputEmail").textContent = `Email: ${email}`;
        document.getElementById("outputPhone").textContent = `Phone: ${phone}`;
        document.getElementById("outputSkills").textContent = `Skills: ${skills}`;
        document.getElementById("outputExperience").textContent = `Experience: ${experience}`;
        document.getElementById("outputEducation").textContent = `Education: ${education}`;
        document.getElementById("outputSummary").textContent = `Summary: ${summary}`;
        document.getElementById("outputHobbies").textContent = `Hobbies: ${hobbies}`;
        document.getElementById("resumeContainer").style.display = "block";
        makeFieldsEditable();
    }
    else {
        alert("Please fill out all fields!");
    }
});
function makeFieldsEditable() {
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach(button => {
        const editButton = button;
        editButton.addEventListener("click", function () {
            var _a;
            const fieldId = editButton.getAttribute("data-edit");
            const field = document.getElementById(fieldId);
            let currentText = ((_a = field.textContent) === null || _a === void 0 ? void 0 : _a.split(": ")[1]) || "";
            let input = document.createElement("input");
            input.type = "text";
            input.value = currentText;
            input.style.width = "80%";
            field.innerHTML = "";
            field.appendChild(input);
            editButton.textContent = "Save";
            input.focus();
            input.addEventListener("blur", function () {
                saveField(field, input, editButton);
            });
            input.addEventListener("keypress", function (e) {
                if (e.key === "Enter") {
                    saveField(field, input, editButton);
                }
            });
        });
    });
}
function saveField(field, input, button) {
    const newValue = input.value;
    const label = field.id.split("output")[1];
    field.textContent = `${label}: ${newValue}`;
    button.textContent = "Edit";
}
// Copy link to clipboard functionality
(_b = document.getElementById("copyLink")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    const generatedLinkElement = document.getElementById("generatedLink");
    const link = generatedLinkElement.textContent;
    if (link) {
        navigator.clipboard.writeText(link).then(() => {
            alert("Link copied to clipboard!");
        }).catch(() => {
            alert("Failed to copy the link.");
        });
    }
});
// Print resume as PDF without buttons or links
(_c = document.getElementById("printPDF")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    const resumeContent = document.getElementById("resumeContainer");
    const originalContent = document.body.innerHTML;
    // Hide buttons during print
    const buttons = document.querySelectorAll("button, #generatedLink, #copyLink, #resumeTitle");
    buttons.forEach(button => button.style.display = "none");
    const style = document.createElement("style");
    style.innerHTML = `
      
       body {
    background-color: #f4f4f9; 
    color: #333333; 
    font-family: 'Arial', 'Helvetica', sans-serif;
    padding: 40px;
    max-width: 90%; 
    margin: auto;
    }


    .resume-content {
    width: 80%; 
    background: #ffffff; 
    padding: 40px 50px; 
    border-radius: 15px; 
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15); 
    border: 4px solid #003366; 
    margin: 20px auto; 
    }


   .resume-content h1 {
    text-align: center;
    font-size: 38px; 
    color: #003366; 
    font-weight: bold; 
    text-transform: uppercase; 
    letter-spacing: 1.5px; 
   }


  .resume-content p {
    margin-bottom: 20px; 
    border-bottom: 2px solid #003366; 
    font-size: 20px; 
    font-style: italic;
    color: #555555; 
    padding-bottom: 10px; 
  }


    `;
    document.head.appendChild(style);
    // Print only the resume
    const resumeHtml = resumeContent.innerHTML;
    document.body.innerHTML = resumeHtml;
    window.print();
    // Restore original content and buttons
    document.body.innerHTML = originalContent;
    buttons.forEach(button => button.style.display = "inline-block");
});
