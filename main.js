const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");
//const toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.addEventListener("click", function() {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        nav.style.display = "none";
    } else {
        this.classList.add("clicked");
        nav.style.display = "block";
    }
});

// reviews
const reviews = Array.from(document.querySelectorAll(".review"));
const bullets = Array.from(document.querySelectorAll(".bullet"));
bullets.forEach(bullet => {
    bullet.addEventListener("click", function() {
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active");
        }
        reviews.forEach(review => {
            if(this.id == review.dataset.id) {
                review.classList.remove("hide");
            } else {
                review.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});

// go up
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY == 0) {
        goUp.style.opacity = "0";
    } else if(this.scrollY > 500) {
        goUp.style.opacity = "1";
    }
});


