// Elements for diff sec:
const aboutSection = document.querySelector('.aboutBtn') as HTMLElement;
const educationSection = document.querySelector('.educationBtn') as HTMLElement;
const skillsSection = document.querySelector('.skillsBtn') as HTMLElement;
const experienceSection = document.querySelector('.experienceBtn') as HTMLElement;

// hide all sec initially:
function hideAllSections() {
  aboutSection.style.display = 'none';
  educationSection.style.display = 'none';
  skillsSection.style.display = 'none';
  experienceSection.style.display = 'none';
}

// Function to show the relevant sec:
function showSection(section: HTMLElement) {
  hideAllSections();  
  section.style.display = 'block';  
}

// Event listeners for the buttons
const aboutButton = document.querySelector('.about1') as HTMLButtonElement;
const educationButton = document.querySelector('.edu1') as HTMLButtonElement;
const skillsButton = document.querySelector('.skill1') as HTMLButtonElement;
const experienceButton = document.querySelector('.exp1') as HTMLButtonElement;

aboutButton.addEventListener('click', () => showSection(aboutSection));
educationButton.addEventListener('click', () => showSection(educationSection));
skillsButton.addEventListener('click', () => showSection(skillsSection));
experienceButton.addEventListener('click', () => showSection(experienceSection));

// Initially hide all sectioinn when page loads:
hideAllSections();
