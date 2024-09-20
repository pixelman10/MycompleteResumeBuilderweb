document.getElementById("generate")?.addEventListener("click", function () {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const skillsInput = document.getElementById("skills") as HTMLTextAreaElement;
    const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
    const educationInput = document.getElementById("education") as HTMLTextAreaElement;
    const summaryInput = document.getElementById("summary") as HTMLTextAreaElement;
    const hobbiesInput = document.getElementById('hobbies') as HTMLTextAreaElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const skills = skillsInput.value;
    const experience = experienceInput.value;
    const education = educationInput.value;
    const summary = summaryInput.value;
    const hobbies = hobbiesInput.value;

    if (name && email && phone && skills && experience && education && summary && hobbies) {
        (document.getElementById("outputName") as HTMLParagraphElement).textContent = `Name: ${name}`;
        (document.getElementById("outputEmail") as HTMLParagraphElement).textContent = `Email: ${email}`;
        (document.getElementById("outputPhone") as HTMLParagraphElement).textContent = `Phone: ${phone}`;
        (document.getElementById("outputSkills") as HTMLParagraphElement).textContent = `Skills: ${skills}`;
        (document.getElementById("outputExperience") as HTMLParagraphElement).textContent = `Experience: ${experience}`;
        (document.getElementById("outputEducation") as HTMLParagraphElement).textContent = `Education: ${education}`;
        (document.getElementById("outputSummary") as HTMLParagraphElement).textContent = `Summary: ${summary}`;
        (document.getElementById("outputHobbies") as HTMLParagraphElement).textContent = `Hobbies: ${hobbies}`;

        (document.getElementById("resumeContainer") as HTMLDivElement).style.display = "block";
        
        makeFieldsEditable();
    } else {
        alert("Please fill out all fields!");
    }
});

function makeFieldsEditable() {
    const editButtons = document.querySelectorAll(".edit-btn");

    editButtons.forEach(button => {
        const editButton = button as HTMLButtonElement;
        editButton.addEventListener("click", function () {
            const fieldId = editButton.getAttribute("data-edit");
            const field = document.getElementById(fieldId as string) as HTMLParagraphElement;

            let currentText = field.textContent?.split(": ")[1] || "";
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

function saveField(field: HTMLParagraphElement, input: HTMLInputElement, button: HTMLButtonElement) {
    const newValue = input.value;
    const label = field.id.split("output")[1];
    field.textContent = `${label}: ${newValue}`;
    button.textContent = "Edit";
}

// Copy link to clipboard functionality
document.getElementById("copyLink")?.addEventListener("click", function () {
    const generatedLinkElement = document.getElementById("generatedLink") as HTMLElement;
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
document.getElementById("printPDF")?.addEventListener("click", function () {
    const resumeContent = document.getElementById("resumeContainer") as HTMLElement;
    const originalContent = document.body.innerHTML;
  
    // Hide buttons during print
    const buttons = document.querySelectorAll("button, #generatedLink, #copyLink, #resumeTitle") as NodeListOf<HTMLElement>;
    buttons.forEach(button => button.style.display = "none");
    
  //This is pdf result styling:
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

document.getElementById("generateLink")?.addEventListener("click", function () {
    const name = (document.getElementById("outputName") as HTMLElement).textContent;
    const email = (document.getElementById("outputEmail") as HTMLElement).textContent;
    const phone = (document.getElementById("outputPhone") as HTMLElement).textContent;
    const skills = (document.getElementById("outputSkills") as HTMLElement).textContent;
    const experience = (document.getElementById("outputExperience") as HTMLElement).textContent;
    const education = (document.getElementById("outputEducation") as HTMLElement).textContent;
    const summary = (document.getElementById("outputSummary") as HTMLElement).textContent;
  
    // Create a URL with query parameters
    const baseUrl = window.location.origin + '/resumePreview.html';
    const link = `${baseUrl}?name=${encodeURIComponent(name ?? '')}&email=${encodeURIComponent(email ?? '')}&phone=${encodeURIComponent(phone ?? '')}&skills=${encodeURIComponent(skills ?? '')}&experience=${encodeURIComponent(experience ?? '')}&education=${encodeURIComponent(education ?? '')}&summary=${encodeURIComponent(summary ?? '')}`;
  
    // Display the generated link
    const generatedLinkElement = document.getElementById("generatedLink") as HTMLElement;
    generatedLinkElement.textContent = link;
  
    // Show the "Copy Link" button after generating the link
    const copyLinkButton = document.getElementById("copyLink") as HTMLButtonElement;
    copyLinkButton.style.display = "inline-block";  // Make the button visible
});