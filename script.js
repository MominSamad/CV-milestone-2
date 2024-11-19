const form = document.getElementById("cvForm");
const generateCVBtn = document.getElementById("generateCV");
const addSkillBtn = document.getElementById("addSkillBtn");
const skillInput = document.getElementById("skillInput");
const skillsList = document.getElementById("skillsList");
const outputDiv = document.getElementById("output");

let skills = [];

// Add skill functionality
addSkillBtn.addEventListener("click", () => {
  const skill = skillInput.value.trim();
  if (skill) {
    skills.push(skill);

    // Add skill to list
    const skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);

    skillInput.value = ""; // Clear input
  } else {
    alert("Please enter a skill.");
  }
});

// Generate CV
generateCVBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const experience = document.getElementById("experience").value.trim();
  const education = document.getElementById("education").value.trim();

  if (!name || !email || !phone || !experience || !education) {
    alert("Please fill out all fields.");
    return;
  }

  const skillsHTML = skills.length
    ? `<h4>Skills:</h4><ul>${skills.map(skill => `<li>${skill}</li>`).join("")}</ul>`
    : "";

  outputDiv.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h4>Experience:</h4>
    <p>${experience}</p>
    <h4>Education:</h4>
    <p>${education}</p>
    ${skillsHTML}
  `;
});
