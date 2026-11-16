/* =========================================
   GLOW & GRACE
   PRODUCT DETAILS PAGE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* FAQ ACCORDION */

    const faqItems = document.querySelectorAll(".pdx-faq-item");

    faqItems.forEach(function (item) {

        const question = item.querySelector(".pdx-faq-question");

        if (!question) return;

        question.addEventListener("click", function () {

            const isOpen = item.classList.contains("active");

            faqItems.forEach(function (faq) {

                faq.classList.remove("active");

                const faqQuestion = faq.querySelector(".pdx-faq-question");

                if (faqQuestion) {
                    faqQuestion.setAttribute("aria-expanded", "false");
                }

            });

            if (!isOpen) {

                item.classList.add("active");

                question.setAttribute("aria-expanded", "true");

            }

        });

    });

});