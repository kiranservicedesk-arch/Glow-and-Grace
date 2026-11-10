function goToSkinConcerns() {

    const form = document.getElementById("skinProfileForm");

    if (!form.reportValidity()) {
        return;
    }

    // Next section will be connected here.
    document.getElementById("skin-concerns")?.scrollIntoView({
        behavior: "smooth"
    });
}
// =========================================
// SKIN CONCERNS SELECTION
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const concernCheckboxes = document.querySelectorAll(
        'input[name="skinConcerns"]'
    );

    const countText = document.getElementById("selectedConcernCount");
    const clearButton = document.getElementById("clearConcerns");

    function updateConcernCount() {

        const selected = document.querySelectorAll(
            'input[name="skinConcerns"]:checked'
        ).length;

        countText.textContent =
            selected + (selected === 1
                ? " concern selected"
                : " concerns selected");
    }

    concernCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", updateConcernCount);
    });

    clearButton.addEventListener("click", function () {
        concernCheckboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });

        updateConcernCount();
    });

    updateConcernCount();

});


// =========================================
// CONTINUE TO NEXT SECTION
// =========================================

function goToSkinHabits() {

    const nextSection = document.getElementById("skin-habits");

    if (nextSection) {
        nextSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// =========================================
// SECTION 4 - SKIN HABITS NAVIGATION
// =========================================

function goToSkinPreferences() {

    const requiredGroups = [
        "waterIntake",
        "sleepHours",
        "sunExposure",
        "sunscreenUse"
    ];

    for (const group of requiredGroups) {

        const selected = document.querySelector(
            `input[name="${group}"]:checked`
        );

        if (!selected) {
            alert("Please answer all lifestyle questions before continuing.");
            return;
        }
    }

    const lifestyle = document.getElementById("skinLifestyle");

    if (!lifestyle.value) {
        lifestyle.focus();
        alert("Please select your daily lifestyle.");
        return;
    }

    const nextSection = document.getElementById("skin-preferences");

    if (nextSection) {
        nextSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// =========================================
// SECTION 5 - VALIDATE PREFERENCES
// =========================================

function generateSkinResult() {

    const requiredGroups = [
        "productTexture",
        "routineType",
        "skinGoal"
    ];

    for (const group of requiredGroups) {

        const selected = document.querySelector(
            `input[name="${group}"]:checked`
        );

        if (!selected) {
            alert("Please complete all required skincare preferences.");
            return;
        }
    }

    // At least one ingredient is optional.
    // Move to the results section.
    const resultsSection = document.getElementById("skin-results");

    if (resultsSection) {
        resultsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}
// =========================================
// SECTION 6 - GENERATE PERSONALIZED RESULTS
// =========================================

function generateSkinResult() {

    // Validate Section 5
    const requiredGroups = [
        "productTexture",
        "routineType",
        "skinGoal"
    ];

    for (const group of requiredGroups) {
        const selected = document.querySelector(
            `input[name="${group}"]:checked`
        );

        if (!selected) {
            alert("Please complete all required skincare preferences.");
            return;
        }
    }

    // Get answers from previous sections
    const getValue = (selector) => {
        return document.querySelector(selector)?.value || "Not available";
    };

    const skinType = getValue("#skinType");
    const age = getValue("#skinAge");
    const routine = getValue("#skinRoutine");
    const sensitivity = getValue("#skinSensitivity");

    const texture = getValue(
        'input[name="productTexture"]:checked'
    );

    const goal = getValue(
        'input[name="skinGoal"]:checked'
    );

    const water = getValue(
        'input[name="waterIntake"]:checked'
    );

    const sleep = getValue(
        'input[name="sleepHours"]:checked'
    );

    const sun = getValue(
        'input[name="sunExposure"]:checked'
    );

    const sunscreen = getValue(
        'input[name="sunscreenUse"]:checked'
    );

    const lifestyle = getValue("#skinLifestyle");

    const concerns = [
        ...document.querySelectorAll(
            'input[name="skinConcerns"]:checked'
        )
    ].map(item => item.value);

    const ingredients = [
        ...document.querySelectorAll(
            'input[name="ingredients"]:checked'
        )
    ].map(item => item.value);

    // Display profile
    const profileResults = {
        resultSkinType: skinType,
        resultAge: age,
        resultRoutine: routine,
        resultSensitivity: sensitivity,
        resultGoal: goal,
        resultTexture: texture,
        resultWater: water,
        resultSleep: sleep,
        resultSun: sun,
        resultSunscreen: sunscreen
    };

    Object.entries(profileResults).forEach(([id, value]) => {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = value;
        }
    });

    // Display selected concerns
    const concernContainer = document.getElementById("resultConcerns");

    concernContainer.replaceChildren();

    if (concerns.length === 0) {
        addResultTag(concernContainer, "No specific concerns selected");
    } else {
        concerns.forEach(item => {
            addResultTag(concernContainer, item);
        });
    }

    // Display ingredient interests
    const ingredientContainer = document.getElementById("resultIngredients");

    ingredientContainer.replaceChildren();

    if (ingredients.length === 0) {
        addResultTag(ingredientContainer, "No ingredients selected");
    } else {
        ingredients.forEach(item => {
            addResultTag(ingredientContainer, item);
        });
    }

    // Generate morning and evening routines
    const morning = [
        {
            title: "Gentle Cleanser",
            description: "Cleanse your face gently without over-washing."
        }
    ];

    const evening = [
        {
            title: "Gentle Cleanser",
            description: "Remove daily buildup and cleanse your skin."
        }
    ];

    // Skin type recommendations
    if (skinType === "Dry") {
        morning.push({
            title: "Hydrating Serum",
            description: "Consider a hydrating formula to support skin moisture."
        });

        evening.push({
            title: "Nourishing Moisturizer",
            description: "Choose a comfortable moisturizer to support your skin barrier."
        });
    }

    else if (skinType === "Oily") {
        morning.push({
            title: "Lightweight Moisturizer",
            description: "Choose a light, non-greasy moisturizing formula."
        });

        evening.push({
            title: "Lightweight Hydration",
            description: "Use a suitable lightweight moisturizer."
        });
    }

    else if (skinType === "Combination") {
        morning.push({
            title: "Balanced Hydration",
            description: "Use a lightweight moisturizer suited to different facial areas."
        });

        evening.push({
            title: "Gentle Moisturizer",
            description: "Support hydration without making your skin feel heavy."
        });
    }

    else if (skinType === "Sensitive") {
        morning.push({
            title: "Gentle Moisturizer",
            description: "Prefer fragrance-free products with simple formulations."
        });

        evening.push({
            title: "Barrier Support",
            description: "Choose gentle products designed for sensitive skin."
        });
    }

    else {
        morning.push({
            title: "Daily Moisturizer",
            description: "Choose a moisturizer that feels comfortable on your skin."
        });

        evening.push({
            title: "Skin Hydration",
            description: "Maintain a simple moisturizing routine."
        });
    }

    // Goal-based recommendations
    if (goal === "Hydrated Skin") {
        morning.push({
            title: "Hydration Focus",
            description: "Consider ingredients such as hyaluronic acid if suitable for your skin."
        });
    }

    if (goal === "Clearer Looking Skin" ||
        concerns.includes("Acne and Breakouts")) {
        evening.push({
            title: "Blemish Care",
            description: "Consider gentle, suitable products and avoid harsh scrubbing."
        });
    }

    if (goal === "Even Skin Tone" ||
        concerns.includes("Dark Spots") ||
        concerns.includes("Pigmentation")) {
        morning.push({
            title: "Sun Protection",
            description: "Use broad-spectrum SPF 30 or higher and reapply as directed."
        });
    }

    if (goal === "Healthy Skin Glow" ||
        concerns.includes("Dullness")) {
        evening.push({
            title: "Consistent Skin Care",
            description: "Maintain gentle cleansing and moisturizing habits."
        });
    }

    // Sunscreen is included in every morning routine
    morning.push({
        title: "Broad-Spectrum Sunscreen",
        description: "Finish with SPF 30 or higher. Reapply as directed, especially outdoors."
    });

    // Display routine steps
    displayRoutine("morningRoutineList", morning);
    displayRoutine("eveningRoutineList", evening);

    // Generate lifestyle tips
    const tips = [
        "Keep your skincare routine simple and consistent.",
        "Introduce new products one at a time and patch test before regular use."
    ];

    if (water === "Less than 1 litre") {
        tips.push("If appropriate for you, consider improving your daily water intake gradually.");
    }

    if (sleep === "Less than 5 hours" || sleep === "5-6 hours") {
        tips.push("Try to maintain a regular sleep schedule and aim for sufficient rest.");
    }

    if (sun === "Several hours daily" ||
        sunscreen === "Never" ||
        sunscreen === "Occasionally") {
        tips.push("Make daily sun protection a priority, especially during outdoor activities.");
    }

    if (sensitivity === "Often" || sensitivity === "Sometimes") {
        tips.push("Choose gentle, fragrance-free products and avoid introducing several new products at once.");
    }

    if (lifestyle === "Mostly outdoors") {
        tips.push("Keep sun protection accessible and reapply sunscreen as directed while outdoors.");
    }

    displayTips(tips);

    // Scroll to results
    document.getElementById("skin-results").scrollIntoView({
        behavior: "smooth"
    });
}


// =========================================
// HELPER - DISPLAY RESULT TAGS
// =========================================

function addResultTag(container, text) {

    const tag = document.createElement("span");

    tag.className = "result-tag";
    tag.textContent = text;

    container.appendChild(tag);
}


// =========================================
// HELPER - DISPLAY ROUTINE
// =========================================

function displayRoutine(containerId, items) {

    const container = document.getElementById(containerId);

    container.replaceChildren();

    items.forEach((item, index) => {

        const step = document.createElement("div");
        step.className = "routine-step";

        const number = document.createElement("span");
        number.className = "routine-step-number";
        number.textContent = index + 1;

        const content = document.createElement("div");

        const title = document.createElement("strong");
        title.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        content.append(title, description);
        step.append(number, content);

        container.appendChild(step);
    });
}


// =========================================
// HELPER - DISPLAY PERSONALIZED TIPS
// =========================================

function displayTips(tips) {

    const container = document.getElementById("resultTips");

    container.replaceChildren();

    tips.forEach(tip => {

        const item = document.createElement("div");
        item.className = "result-tip";

        const icon = document.createElement("i");
        icon.className = "fa-solid fa-check";

        const text = document.createElement("p");
        text.textContent = tip;

        item.append(icon, text);

        container.appendChild(item);
    });
}


// =========================================
// RETAKE SKIN QUIZ
// =========================================

function restartSkinQuiz() {

    const profileForm = document.getElementById("skinProfileForm");

    if (profileForm) {
        profileForm.reset();
    }

    document.querySelectorAll(
        'input[name="skinConcerns"], ' +
        'input[name="waterIntake"], ' +
        'input[name="sleepHours"], ' +
        'input[name="sunExposure"], ' +
        'input[name="sunscreenUse"], ' +
        'input[name="productTexture"], ' +
        'input[name="routineType"], ' +
        'input[name="ingredients"], ' +
        'input[name="skinGoal"]'
    ).forEach(input => {
        input.checked = false;
    });

    const lifestyle = document.getElementById("skinLifestyle");
    const notes = document.getElementById("skinExtraNotes");

    if (lifestyle) lifestyle.value = "";
    if (notes) notes.value = "";

    // Reset Section 3 selection counter
    const count = document.getElementById("selectedConcernCount");

    if (count) {
        count.textContent = "0 concerns selected";
    }

    document.getElementById("skin-quiz-form").scrollIntoView({
        behavior: "smooth"
    });
}