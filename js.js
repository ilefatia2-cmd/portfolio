// ===== Mobile Menu =====
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("nav");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");

    if (menuIcon.classList.contains("bx-menu")) {
        menuIcon.classList.replace("bx-menu", "bx-x");
    } else {
        menuIcon.classList.replace("bx-x", "bx-menu");
    }
};

// ===== Close Menu When Clicking a Link =====
document.querySelectorAll("nav a").forEach(link => {
    link.onclick = () => {
        navbar.classList.remove("active");
        menuIcon.classList.replace("bx-x", "bx-menu");
    };
});

// ===== Active Navigation While Scrolling =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});

// ===== Fade-in Animation =====
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});