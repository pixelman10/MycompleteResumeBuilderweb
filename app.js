"use strict";
// Elements for diff sec:
const aboutSection = document.querySelector('.aboutBtn');
const educationSection = document.querySelector('.educationBtn');
const skillsSection = document.querySelector('.skillsBtn');
const experienceSection = document.querySelector('.experienceBtn');
// hide all sec initially:
function hideAllSections() {
    aboutSection.style.display = 'none';
    educationSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
}
// Function to show the relevant sec:
function showSection(section) {
    hideAllSections();
    section.style.display = 'block';
}
// Event listeners for the buttons
const aboutButton = document.querySelector('.about1');
const educationButton = document.querySelector('.edu1');
const skillsButton = document.querySelector('.skill1');
const experienceButton = document.querySelector('.exp1');
aboutButton.addEventListener('click', () => showSection(aboutSection));
educationButton.addEventListener('click', () => showSection(educationSection));
skillsButton.addEventListener('click', () => showSection(skillsSection));
experienceButton.addEventListener('click', () => showSection(experienceSection));
// Initially hide all sectioinn when page loads:
hideAllSections();
