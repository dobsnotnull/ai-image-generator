const themeToggle = document.querySelector(".theme-toggle");
const promptInput = document.querySelector(".prompt-input");
const promptBtn = document.querySelector(".prompt-btn");

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