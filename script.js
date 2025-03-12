document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const recipeName = params.get("name");

    const recipes = {
        comingsoon1: { title: "Coming Soon...", description: "New recipe will be added soon!" },
        comingsoon2: { title: "Coming Soon...", description: "New recipe will be added soon!" },
        comingsoon3: { title: "Coming Soon...", description: "New recipe will be added soon!" },
        comingsoon4: { title: "Coming Soon...", description: "New recipe will be added soon!" }
    };

    if (recipeName in recipes) {
        document.getElementById("recipe-title").textContent = recipes[recipeName].title;
        document.getElementById("recipe-description").textContent = recipes[recipeName].description;
    } else {
        document.querySelector(".recipe-container").innerHTML = "<h1>Recipe Not Found</h1>";
    }
});

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


