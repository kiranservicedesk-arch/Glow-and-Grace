
document.addEventListener("DOMContentLoaded", function () {

    // Keep all static product sections visible
    const productSections = document.querySelectorAll(
        ".pdx-overview"
    );

    productSections.forEach(function (section) {
        section.style.display = "";
        section.style.visibility = "visible";
        section.style.opacity = "1";
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".pdx-faq-item");

    faqItems.forEach(function (item) {
        const question = item.querySelector(".pdx-faq-question");

        if (!question) return;

        question.addEventListener("click", function () {

            const isOpen = item.classList.contains("active");

            faqItems.forEach(function (faq) {
                faq.classList.remove("active");

                const button = faq.querySelector(".pdx-faq-question");

                if (button) {
                    button.setAttribute("aria-expanded", "false");
                }
            });

            if (!isOpen) {
                item.classList.add("active");
                question.setAttribute("aria-expanded", "true");
            }
        });
    });

});
