document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".pdx-faq-item");

    faqItems.forEach(function (item) {

        const question = item.querySelector(".pdx-faq-question");

        if (!question) return;

        question.addEventListener("click", function () {

            const isOpen = item.classList.contains("active");

            faqItems.forEach(function (faq) {
                faq.classList.remove("active");

                const btn = faq.querySelector(".pdx-faq-question");

                if (btn) {
                    btn.setAttribute("aria-expanded", "false");
                }
            });

            if (!isOpen) {
                item.classList.add("active");
                question.setAttribute("aria-expanded", "true");
            }

        });

    });

});