const themeToggle = document.querySelector(".theme-toggle");

const promptForm = document.querySelector(".prompt-form");
const promptInput = document.querySelector(".prompt-input");
const promptBtn = document.querySelector(".prompt-btn");

const modelSelect = document.getElementById("model-select");
const countSelect = document.getElementById("count-select");
const ratioSelect = document.getElementById("ratio-select");



// Prompt form

// Hnadles the form submissions

const handleFormSubmit = (e) => {
    e.preventDefault();


    // For the form values
    const selectedModel = modelSelect.value;
    const imageCount = parseInt(countSelect.value) || 1;
    const aspectRatio = ratioSelect.value || "1/1";
    const promptText = promptInput.value.trim();

    console.log(selectedModel, imageCount, aspectRatio, promptText)
}



promptForm.addEventListener("submit", handleFormSubmit);
















// Array of examples for the prompts

const examplePrompts = [
  "A ZayLevelTen-inspired fashion campaign in a futuristic Lagos street",
  "A Gen Z creative workspace with dual monitors, sneakers, iced coffee, and RGB lighting",
  "A cinematic luwa.mp4 style portrait with soft flash photography and moody night lighting",
  "Playboi Carti performing under red lights with an opium-inspired aesthetic",
  "Ken Carson in a cyberpunk city with neon signs and futuristic streetwear",
  "A luxury streetwear photoshoot featuring oversized hoodies, cargos, chrome jewelry, and designer sneakers",
  "A minimal black-and-silver tech setup with Apple products and ambient LED lighting",
  "A BOLAPSD brand campaign featuring premium oversized tees in a brutalist concrete studio",
  "A futuristic fashion editorial blending Y2K, opium aesthetic, and luxury streetwear",
  "A stylish creative director's office with moodboards, typography posters, cameras, and high-end fashion pieces"
];

// Fill the prompt input with random examples

promptBtn.addEventListener("click", () => {
    const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
    promptInput.value = prompt;
    promptInput.focus()
});




// We're doing the dark-themed stuff

const toggleTheme = () => {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

themeToggle.addEventListener("click", toggleTheme);