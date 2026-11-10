
/* =========================================
   CUSTOMER REVIEWS - REVEAL ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const reviewCards = document.querySelectorAll(".review-card");

    if (!reviewCards.length) return;

    if ("IntersectionObserver" in window) {

        const reviewObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("review-visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        reviewCards.forEach(function (card) {

            card.classList.add("review-hidden");

            reviewObserver.observe(card);

        });

    }

});
