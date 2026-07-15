const themeToggle = document.querySelector(".theme-toggle");


// We're doing the dark-themed stuff

const toggleTheme = () => {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
}

themeToggle.addEventListener("click", toggleTheme);