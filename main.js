
document.addEventListener("DOMContentLoaded", function () {

    const root = document.documentElement;

    const homeButton = document.querySelector(".home-btn");
    const dropdown = document.querySelector(".dropdown");

    const rtlButton = document.getElementById("rtl-toggle");
    const themeButton = document.getElementById("theme-toggle");

    const menuButton = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("navLinks");


    // =====================================
    // CURRENT PAGE ACTIVE NAVIGATION
    // =====================================

    function setActiveNavigation() {

        const currentPage = window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

        const pageMap = {
            "": "home",
            "index.html": "home",
            "home2.html": "home",
            "about.html": "about",
            "skincare.html": "skincare",
            "products.html": "products",
            "blog.html": "blog",
            "contact.html": "contact"
        };

        const activePage = pageMap[currentPage] || "";

        // Remove previous active classes
        document.querySelectorAll(".nav-links a").forEach(function (link) {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        });

        // Highlight matching navigation link
        document.querySelectorAll(".nav-links a[data-page]").forEach(function (link) {

            if (link.dataset.page === activePage) {

                link.classList.add("active");
                link.setAttribute("aria-current", "page");

            }

        });

        // Home dropdown active for both home pages
        if (activePage === "home" && homeButton) {

            homeButton.classList.add("active");
            homeButton.setAttribute("aria-current", "page");

        }

    }

    setActiveNavigation();


    // =====================================
    // HOME DROPDOWN
    // =====================================

    if (homeButton && dropdown) {

        homeButton.setAttribute("aria-haspopup", "true");
        homeButton.setAttribute("aria-expanded", "false");

        homeButton.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen = dropdown.classList.toggle("active");

            homeButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (event) {

            if (!dropdown.contains(event.target)) {

                dropdown.classList.remove("active");

                homeButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

        // Close dropdown after selecting a page
        dropdown.querySelectorAll(".dropdown-menu a").forEach(function (link) {

            link.addEventListener("click", function () {

                dropdown.classList.remove("active");

                homeButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    // =====================================
    // MOBILE MENU
    // =====================================

    if (menuButton && navLinks) {

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");

        menuButton.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen = navLinks.classList.toggle("show");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuButton.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });

        // Close mobile menu after clicking page links
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                // Keep dropdown open/close behavior separate
                if (link.classList.contains("home-btn")) {
                    return;
                }

                navLinks.classList.remove("show");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuButton.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });

        // Close mobile menu when clicking outside
        document.addEventListener("click", function (event) {

            if (
                !navLinks.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                navLinks.classList.remove("show");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuButton.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        });

    }


    // =====================================
    // RTL / LTR TOGGLE
    // =====================================

    function updateDirectionButton() {

        if (!rtlButton) return;

        if (root.dir === "rtl") {

            rtlButton.setAttribute(
                "aria-label",
                "Switch to LTR"
            );

            rtlButton.setAttribute(
                "title",
                "Switch to LTR"
            );

        } else {

            rtlButton.setAttribute(
                "aria-label",
                "Switch to RTL"
            );

            rtlButton.setAttribute(
                "title",
                "Switch to RTL"
            );

        }

    }

    // Restore saved direction
    const savedDirection = localStorage.getItem("glowGraceDirection");

    if (savedDirection === "rtl" || savedDirection === "ltr") {
        root.dir = savedDirection;
    }

    updateDirectionButton();

    if (rtlButton) {

        rtlButton.addEventListener("click", function () {

            root.dir = root.dir === "ltr" ? "rtl" : "ltr";

            localStorage.setItem(
                "glowGraceDirection",
                root.dir
            );

            updateDirectionButton();

        });

    }


    // =====================================
    // DARK / LIGHT MODE
    // =====================================

    function updateThemeButton() {

        if (!themeButton) return;

        if (root.dataset.theme === "dark") {

            themeButton.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

            themeButton.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

            themeButton.setAttribute(
                "title",
                "Switch to light mode"
            );

        } else {

            themeButton.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

            themeButton.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

            themeButton.setAttribute(
                "title",
                "Switch to dark mode"
            );

        }

    }

    // Restore saved theme
    const savedTheme = localStorage.getItem("glowGraceTheme");

    if (savedTheme === "dark" || savedTheme === "light") {
        root.dataset.theme = savedTheme;
    }

    updateThemeButton();

    if (themeButton) {

        themeButton.addEventListener("click", function () {

            const newTheme =
                root.dataset.theme === "light" ? "dark" : "light";

            root.dataset.theme = newTheme;

            localStorage.setItem(
                "glowGraceTheme",
                newTheme
            );

            updateThemeButton();

        });

    }


    // =====================================
    // CONTACT FORM
    // =====================================

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            formMessage.textContent =
                "Thank you! Your message has been submitted.";

            contactForm.reset();

        });

    }


});
