
/* =========================================
   GLOW & GRACE - SKIN QUIZ JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // GET ELEMENTS

    const questions = document.querySelectorAll(".question");

    const nextBtn = document.getElementById("nextBtn");

    const prevBtn = document.getElementById("prevBtn");

    const progress = document.getElementById("progress");

    const questionCount = document.getElementById("questionCount");

    const percentage = document.getElementById("percentage");

    const quizArea = document.getElementById("quizArea");

    const resultBox = document.getElementById("resultBox");

    const resultTitle = document.getElementById("resultTitle");

    const resultDescription =
        document.getElementById("resultDescription");

    const restartBtn = document.getElementById("restartBtn");


    // QUIZ SETTINGS

    let currentIndex = 0;

    const totalQuestions = questions.length;


    // =====================================
    // DISPLAY QUESTION
    // =====================================

    function displayQuestion() {

        questions.forEach(function (question, index) {

            question.classList.toggle(
                "active",
                index === currentIndex
            );

        });


        // UPDATE PROGRESS

        let percent = Math.round(
            ((currentIndex + 1) / totalQuestions) * 100
        );

        progress.style.width = percent + "%";

        questionCount.textContent =
            "Question " + (currentIndex + 1) +
            " of " + totalQuestions;

        percentage.textContent = percent + "%";


        // BUTTON SETTINGS

        prevBtn.disabled = currentIndex === 0;

        nextBtn.textContent =
            currentIndex === totalQuestions - 1
                ? "View My Result"
                : "Next Question";

    }


    // =====================================
    // CALCULATE SKIN TYPE
    // =====================================

    function calculateResult() {

        let scores = {

            dry: 0,

            oily: 0,

            combination: 0,

            normal: 0

        };


        // COLLECT ANSWERS

        for (let i = 1; i <= totalQuestions; i++) {

            const selected = document.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if (!selected) {

                alert("Please answer all questions.");

                return;

            }

            scores[selected.value]++;

        }


        // FIND HIGHEST SCORE

        const maxScore = Math.max(
            ...Object.values(scores)
        );

        const winners = Object.keys(scores).filter(
            function (type) {

                return scores[type] === maxScore;

            }
        );


        // TIE BREAKER

        const lastAnswer = document.querySelector(
            'input[name="q' + totalQuestions + '"]:checked'
        ).value;

        const finalType = winners.includes(lastAnswer)
            ? lastAnswer
            : winners[0];


        // SKIN TYPE DESCRIPTIONS

        const results = {

            dry: {

                title: "Dry Skin",

                description:
                    "Your skin may need extra hydration. Choose a gentle cleanser, nourishing moisturizer and daily sunscreen to support your skin barrier."

            },

            oily: {

                title: "Oily Skin",

                description:
                    "Your skin may produce excess oil. Try a gentle cleanser, lightweight moisturizer and non-comedogenic sunscreen."

            },

            combination: {

                title: "Combination Skin",

                description:
                    "Your skin may have both oily and dry areas. Choose balanced skincare products and adjust your routine according to different areas."

            },

            normal: {

                title: "Normal Skin",

                description:
                    "Your skin appears generally balanced. Maintain a simple routine with gentle cleansing, moisturizing and daily sunscreen."

            }

        };


        // SHOW RESULT

        resultTitle.textContent =
            results[finalType].title;

        resultDescription.textContent =
            results[finalType].description;


        // HIDE QUIZ

        quizArea.style.display = "none";


        // SHOW RESULT

        resultBox.style.display = "block";

    }


    // =====================================
    // NEXT BUTTON
    // =====================================

    nextBtn.addEventListener("click", function () {

        const selected = document.querySelector(
            'input[name="q' + (currentIndex + 1) + '"]:checked'
        );


        // VALIDATION

        if (!selected) {

            alert("Please select an answer before continuing.");

            return;

        }


        // NEXT QUESTION

        if (currentIndex < totalQuestions - 1) {

            currentIndex++;

            displayQuestion();

        }

        // FINAL RESULT

        else {

            calculateResult();

        }

    });


    // =====================================
    // PREVIOUS BUTTON
    // =====================================

    prevBtn.addEventListener("click", function () {

        if (currentIndex > 0) {

            currentIndex--;

            displayQuestion();

        }

    });


    // =====================================
    // RETAKE QUIZ
    // =====================================

    restartBtn.addEventListener("click", function () {


        // CLEAR ALL ANSWERS

        document.querySelectorAll(
            '#questionsContainer input[type="radio"]'
        ).forEach(function (input) {

            input.checked = false;

        });


        // RESET QUESTION INDEX

        currentIndex = 0;


        // HIDE RESULT

        resultBox.style.display = "none";


        // SHOW QUIZ

        quizArea.style.display = "block";


        // RESET PROGRESS

        displayQuestion();

    });


    // =====================================
    // INITIALIZE QUIZ
    // =====================================

    displayQuestion();

});
