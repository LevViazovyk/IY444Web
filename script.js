document.addEventListener("DOMContentLoaded", function() {
    var quizTrigger = document.getElementById("quizTrigger");
    var quizContainer = document.getElementById("quizContainer");

    if (quizTrigger) {
        quizTrigger.addEventListener("click", function() {
            quizContainer.classList.toggle("open");
            quizTrigger.classList.toggle("open");
        });
    }

    var toggleButton = document.querySelector(".toggle-button");
    var navbarLinks = document.querySelector(".navbar-links");

    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
            navbarLinks.classList.toggle("active");
        });
    }




    var searchBar = document.querySelector(".search-bar");
    var searchButton = document.querySelector(".search-button");

    if (searchBar && searchButton) {
        searchButton.addEventListener("click", function() {
            var searchTerm = searchBar.value.toLowerCase();
            if (searchTerm !== "") {
                localStorage.setItem("searchQuery", searchTerm);
                window.location.href = "recipes.html";
            }
        });

        searchBar.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                searchButton.click();
            }
        });
    }





    var recipeCards = document.querySelectorAll(".recipe-card");
    var searchQuery = localStorage.getItem("searchQuery");

    if (searchQuery && recipeCards.length > 0) {
        for (var i = 0; i < recipeCards.length; i++) {
            var title = recipeCards[i].getAttribute("data-title");
            if (title.includes(searchQuery)) {
                recipeCards[i].style.display = "flex";
            } else {
                recipeCards[i].style.display = "none";
            }
        }

        var visible = false;
        for (var j = 0; j < recipeCards.length; j++) {
            if (recipeCards[j].style.display !== "none") {
                visible = true;
                break;
            }
        }

        if (!visible) {
            var message = document.createElement("p");
            message.textContent = "No recipes found for: " + searchQuery;
            message.style.fontSize = "20px";
            message.style.color = "#872904";
            message.style.textAlign = "center";
            message.style.marginTop = "20px";

            var container = document.querySelector(".recipes-container");
            if (container) {
                container.appendChild(message);
            }
        }
        localStorage.removeItem("searchQuery");
    }


    var buttons = document.querySelectorAll(".check-answer");

    for (var b = 0; b < buttons.length; b++) {
        buttons[b].onclick = function() {
            var form = this.parentElement;
            var selected = form.querySelector("input[type='radio']:checked");
            var result = form.querySelector(".quiz-result");

            if (selected.value === "correct") {
                result.innerText = "Nice! That's right.";
                result.style.color = "green";
            } else {
                result.innerText = "Nope. Try again.";
                result.style.color = "red";
            }
        };
    }

});
