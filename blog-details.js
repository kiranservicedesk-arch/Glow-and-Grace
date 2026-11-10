/* =========================================
   GLOW & GRACE - DYNAMIC BLOG DETAILS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const articles = {

        /* =====================================
           FEATURED ARTICLES - SECTION 2
        ===================================== */

        "skin-type": {
            title: "The Ultimate Guide to Understanding Your Skin Type",
            category: "SKINCARE GUIDES",
            date: "November 06, 2026",
            time: "8 Min Read",
            image: "Images/blog-skin-type.jpg",
            intro: "Understanding your skin type is the foundation of creating a skincare routine that truly works for you.",
            opening: "Every person's skin has its own characteristics. Learning whether your skin is dry, oily, combination, sensitive or normal can help you make more informed skincare choices.",
            sections: [
                {
                    heading: "1. Understanding Dry Skin",
                    paragraphs: [
                        "Dry skin may feel tight, rough or flaky, especially after cleansing. A gentle cleanser and nourishing moisturizer can help support skin comfort.",
                        "Look for hydrating ingredients such as hyaluronic acid and ceramides when choosing skincare products."
                    ]
                },
                {
                    heading: "2. Understanding Oily Skin",
                    paragraphs: [
                        "Oily skin often produces excess sebum, which can create a shiny appearance. Lightweight skincare products may be a comfortable choice.",
                        "Avoid over-cleansing and harsh routines that can leave your skin feeling uncomfortable."
                    ]
                },
                {
                    heading: "3. Combination Skin",
                    paragraphs: [
                        "Combination skin commonly has an oilier T-zone and drier cheeks. A balanced routine with lightweight hydration can help address different areas."
                    ]
                },
                {
                    heading: "4. Sensitive and Normal Skin",
                    paragraphs: [
                        "Sensitive skin may react to certain ingredients or environmental factors. Introduce new products gradually and choose gentle formulas.",
                        "Normal skin generally feels balanced, but it still benefits from cleansing, moisturizing and daily sun protection."
                    ]
                },
                {
                    heading: "How to Understand Your Skin",
                    paragraphs: [
                        "Observe how your skin feels after cleansing and throughout the day. Notice areas that become oily, dry or uncomfortable.",
                        "Your skin can change with seasons, age and lifestyle, so review your routine when its needs change."
                    ]
                }
            ],
            conclusion: "Your skin type is a helpful starting point, not a permanent label. Pay attention to your skin and build a simple routine around its changing needs."
        },


        "ingredients": {
            title: "7 Skincare Ingredients Your Skin Will Love",
            category: "INGREDIENT SPOTLIGHT",
            date: "November 05, 2026",
            time: "6 Min Read",
            image: "Images/blog-ingredients.jpg",
            intro: "Get familiar with popular skincare ingredients and understand the role they can play in your everyday routine.",
            opening: "Skincare labels can feel confusing when you are faced with unfamiliar ingredient names. Learning about common ingredients can make choosing products easier.",
            sections: [
                {
                    heading: "1. Hyaluronic Acid",
                    paragraphs: [
                        "Hyaluronic acid is a humectant that attracts and holds water. It is commonly used in hydrating serums and moisturizers."
                    ]
                },
                {
                    heading: "2. Vitamin C",
                    paragraphs: [
                        "Vitamin C is an antioxidant used in skincare products designed to support a brighter-looking complexion."
                    ]
                },
                {
                    heading: "3. Niacinamide",
                    paragraphs: [
                        "Niacinamide, a form of vitamin B3, is used in formulas designed to support the skin barrier and improve the appearance of uneven skin tone."
                    ]
                },
                {
                    heading: "4. Ceramides",
                    paragraphs: [
                        "Ceramides are lipids naturally found in the skin barrier. Skincare formulas containing ceramides can help support moisture retention."
                    ]
                },
                {
                    heading: "5. Aloe Vera",
                    paragraphs: [
                        "Aloe vera is commonly included in soothing skincare products and lightweight gels."
                    ]
                },
                {
                    heading: "6. Peptides",
                    paragraphs: [
                        "Peptides are short chains of amino acids used in skincare formulas, particularly those focused on the appearance of firmness."
                    ]
                },
                {
                    heading: "7. Glycerin",
                    paragraphs: [
                        "Glycerin is a well-known humectant that helps attract water to the skin and is suitable for many moisturizing formulas."
                    ]
                }
            ],
            conclusion: "Choose ingredients based on your skin's needs, introduce new products gradually, and remember that a simple routine can be just as thoughtful as a complicated one."
        },


        "routine": {
            title: "Building a Simple Morning & Night Skincare Routine",
            category: "DAILY ROUTINES",
            date: "November 04, 2026",
            time: "7 Min Read",
            image: "Images/blog-routine.jpg",
            intro: "A consistent morning and evening routine can make skincare easier, more enjoyable and easier to maintain.",
            opening: "You do not need a shelf full of products to care for your skin. A few thoughtfully selected essentials can create a practical daily routine.",
            sections: [
                {
                    heading: "Your Morning Routine",
                    paragraphs: [
                        "Start with a gentle cleanser or rinse, depending on your skin's needs. Follow with a suitable moisturizer.",
                        "Finish with broad-spectrum sunscreen. Apply it as directed and reapply as recommended, especially when spending time outdoors."
                    ]
                },
                {
                    heading: "Your Evening Routine",
                    paragraphs: [
                        "Remove makeup and sunscreen with a suitable cleansing step. Follow with a gentle cleanser if needed.",
                        "Apply your chosen treatment product, then finish with moisturizer to support the skin barrier overnight."
                    ]
                },
                {
                    heading: "Keep Your Routine Practical",
                    paragraphs: [
                        "Choose products that suit your skin type and lifestyle. Avoid adding several new products at once.",
                        "Give products time to fit into your routine, and pay attention to how your skin responds."
                    ]
                }
            ],
            conclusion: "The best routine is one you can follow consistently. Start with the essentials and make changes only when your skin needs them."
        },


        /* =====================================
           LATEST ARTICLES - SECTION 3
        ===================================== */

        "sunscreen": {
            title: "Why Daily Sunscreen Deserves a Place in Your Routine",
            category: "SKINCARE TIPS",
            date: "November 05, 2026",
            time: "5 Min Read",
            image: "Images/blog-sunscreen.jpg",
            intro: "Daily sun protection is an important part of a balanced skincare routine, whatever your skin type.",
            opening: "Sunscreen is more than a seasonal product. Everyday exposure to ultraviolet radiation makes sun protection an important habit throughout the year.",
            sections: [
                {
                    heading: "Understanding Sun Protection",
                    paragraphs: [
                        "UVA and UVB rays affect the skin in different ways. Choosing a broad-spectrum sunscreen helps protect against both types of ultraviolet radiation."
                    ]
                },
                {
                    heading: "Choosing a Suitable Formula",
                    paragraphs: [
                        "Consider your skin type, preferred texture and daily activities when selecting sunscreen. Some people prefer lightweight lotions, while others enjoy gel or cream formulas."
                    ]
                },
                {
                    heading: "Make It a Daily Habit",
                    paragraphs: [
                        "Apply sunscreen according to its label instructions. Reapply as directed, especially after swimming, sweating or towel drying.",
                        "Hats, protective clothing and shade can also support your sun protection habits."
                    ]
                }
            ],
            conclusion: "Make sun protection a regular part of your morning routine and choose a formula you feel comfortable using consistently."
        },


        "dry-skin": {
            title: "Simple Ways to Care for Dry Skin",
            category: "SKIN CONCERNS",
            date: "November 04, 2026",
            time: "6 Min Read",
            image: "Images/blog-dry-skin.jpg",
            intro: "Discover gentle skincare habits and moisturizing ingredients that can help dry skin feel more comfortable.",
            opening: "Dry skin can feel tight, rough or flaky. A gentle routine focused on hydration and moisture retention can help support skin comfort.",
            sections: [
                {
                    heading: "Choose a Gentle Cleanser",
                    paragraphs: [
                        "Look for a cleanser that removes daily buildup without leaving your skin feeling stripped. Avoid overly harsh cleansing habits."
                    ]
                },
                {
                    heading: "Layer Hydration Thoughtfully",
                    paragraphs: [
                        "Ingredients such as glycerin and hyaluronic acid attract water, while richer moisturizers can help reduce moisture loss."
                    ]
                },
                {
                    heading: "Protect Your Skin Barrier",
                    paragraphs: [
                        "Ceramides are commonly used in moisturizers designed to support the skin barrier. Apply moisturizer consistently, especially after cleansing."
                    ]
                }
            ],
            conclusion: "A gentle cleanser, a suitable moisturizer and daily sun protection can form a simple starting point for caring for dry skin."
        },


        "niacinamide": {
            title: "Niacinamide: A Versatile Ingredient for Everyday Skincare",
            category: "INGREDIENTS",
            date: "November 03, 2026",
            time: "5 Min Read",
            image: "Images/blog-niacinamide.jpg",
            intro: "Learn what niacinamide is, why it appears in so many skincare formulas and how to introduce it thoughtfully.",
            opening: "Niacinamide is a form of vitamin B3 that has become a popular ingredient in everyday skincare. It is included in serums, moisturizers and other cosmetic products.",
            sections: [
                {
                    heading: "What Does Niacinamide Do?",
                    paragraphs: [
                        "Niacinamide is used in skincare products designed to support the skin barrier and improve the appearance of uneven skin tone."
                    ]
                },
                {
                    heading: "How to Include It in Your Routine",
                    paragraphs: [
                        "Follow the directions on your chosen product. Many niacinamide formulas are designed for regular use, but it is best to introduce new products gradually."
                    ]
                },
                {
                    heading: "Choosing a Product",
                    paragraphs: [
                        "Consider the complete formula, your skin preferences and the other products in your routine. More ingredients do not automatically mean better results."
                    ]
                }
            ],
            conclusion: "Niacinamide can be a useful ingredient to explore, but choose a formula that suits your skin and introduce it with care."
        },


        "night-routine": {
            title: "Creating a Relaxing Evening Skincare Ritual",
            category: "DAILY ROUTINES",
            date: "November 02, 2026",
            time: "5 Min Read",
            image: "Images/blog-night-routine.jpg",
            intro: "Turn your evening skincare steps into a simple, calming ritual that fits naturally into your day.",
            opening: "An evening skincare routine is an opportunity to remove the day's buildup and prepare your skin for overnight care. It can also become a relaxing moment for yourself.",
            sections: [
                {
                    heading: "Begin with a Fresh Cleanse",
                    paragraphs: [
                        "Remove makeup, sunscreen and daily buildup using a cleanser suited to your skin. Keep the process gentle and avoid unnecessary scrubbing."
                    ]
                },
                {
                    heading: "Choose Your Treatment",
                    paragraphs: [
                        "If you use a serum or treatment product, follow its instructions and avoid combining too many active ingredients without understanding how they work together."
                    ]
                },
                {
                    heading: "Finish with Moisture",
                    paragraphs: [
                        "Apply a moisturizer that feels comfortable on your skin. A consistent final step can help support your skin barrier."
                    ]
                }
            ],
            conclusion: "Keep your evening ritual simple and comfortable. A routine that fits your lifestyle is easier to maintain."
        },


        "wellness": {
            title: "Everyday Lifestyle Habits That Support Healthy-Looking Skin",
            category: "BEAUTY & WELLNESS",
            date: "October 31, 2026",
            time: "6 Min Read",
            image: "Images/blog-beauty-wellness.jpg",
            intro: "Skincare is not only about products. Everyday lifestyle habits can also play a role in how your skin looks and feels.",
            opening: "A thoughtful skincare routine works alongside everyday habits. Rest, balanced meals and sun protection all contribute to a broader approach to wellbeing.",
            sections: [
                {
                    heading: "Make Time for Rest",
                    paragraphs: [
                        "Consistent sleep habits support general wellbeing. Create a relaxing bedtime routine and aim for a regular sleep schedule."
                    ]
                },
                {
                    heading: "Stay Hydrated",
                    paragraphs: [
                        "Drink water regularly throughout the day according to your needs. Hydration supports overall health, although drinking extra water alone is not a replacement for topical moisturizers."
                    ]
                },
                {
                    heading: "Build Balanced Habits",
                    paragraphs: [
                        "Enjoy a varied diet, stay physically active in ways that suit you and make time to relax. Small habits can be easier to maintain than sudden lifestyle changes."
                    ]
                }
            ],
            conclusion: "Think of skincare as one part of your overall wellbeing. Small, consistent habits can make your daily routine feel more balanced."
        },


        "skincare-mistakes": {
            title: "Common Skincare Mistakes and How to Avoid Them",
            category: "SKINCARE TIPS",
            date: "October 29, 2026",
            time: "5 Min Read",
            image: "Images/blog-skincare-mistakes.jpg",
            intro: "A few simple adjustments can help make your skincare routine more comfortable, practical and consistent.",
            opening: "It is easy to assume that more products or more steps will lead to better skincare. In reality, a complicated routine can sometimes make it harder to understand what your skin needs.",
            sections: [
                {
                    heading: "Using Too Many Products at Once",
                    paragraphs: [
                        "Introducing several new products together makes it difficult to identify which product your skin responds to. Add new products one at a time."
                    ]
                },
                {
                    heading: "Skipping Sunscreen",
                    paragraphs: [
                        "Daily sun protection is an important skincare habit. Choose a broad-spectrum sunscreen and follow its application and reapplication directions."
                    ]
                },
                {
                    heading: "Over-Cleansing and Scrubbing",
                    paragraphs: [
                        "Harsh cleansing and frequent exfoliation can leave skin feeling uncomfortable. Choose gentle products and avoid excessive scrubbing."
                    ]
                },
                {
                    heading: "Expecting Instant Results",
                    paragraphs: [
                        "Skincare products often need consistent use over time. Follow product instructions and avoid changing your routine too frequently."
                    ]
                }
            ],
            conclusion: "A simple routine, gentle habits and realistic expectations can help you build a more thoughtful approach to skincare."
        },


        /* =====================================
           EDITOR'S PICKS - SECTION 4
        ===================================== */

        "skincare-routine": {
            title: "The Art of Building a Skincare Routine That Works",
            category: "SKINCARE ESSENTIALS",
            date: "November 06, 2026",
            time: "7 Min Read",
            image: "Images/editors-featured.jpg",
            intro: "Discover how to create a balanced skincare routine that supports your skin's needs without making things complicated.",
            opening: "A good skincare routine does not need to be complicated. Understanding your skin, choosing suitable products and following a few consistent steps can make daily skincare easier.",
            sections: [
                {
                    heading: "Start by Understanding Your Skin",
                    paragraphs: [
                        "Notice whether your skin tends to feel dry, oily, sensitive or balanced. This can help guide your product choices."
                    ]
                },
                {
                    heading: "Focus on the Essentials",
                    paragraphs: [
                        "A gentle cleanser, moisturizer and broad-spectrum sunscreen are useful starting points for many everyday routines."
                    ]
                },
                {
                    heading: "Add Products with a Purpose",
                    paragraphs: [
                        "If you want to address a particular concern, consider introducing one suitable treatment product at a time. Follow the product directions."
                    ]
                },
                {
                    heading: "Stay Consistent",
                    paragraphs: [
                        "Give your routine time and observe how your skin responds. Adjust your choices when your skin's needs or preferences change."
                    ]
                }
            ],
            conclusion: "The right skincare routine is not about having the most products. It is about choosing suitable essentials and using them consistently."
        },


        "gentle-cleansing": {
            title: "Why Gentle Cleansing Is the First Step to Healthy Skin",
            category: "DAILY SKINCARE",
            date: "November 06, 2026",
            time: "5 Min Read",
            image: "Images/editors-cleanser.jpg",
            intro: "Learn why choosing the right cleanser can make a meaningful difference in your daily skincare routine.",
            opening: "Cleansing is one of the simplest steps in skincare, but the cleanser you choose matters. A suitable formula should remove daily buildup while leaving your skin feeling comfortable.",
            sections: [
                {
                    heading: "Choose a Cleanser for Your Skin",
                    paragraphs: [
                        "Dry skin may prefer a creamy cleanser, while some people with oily skin enjoy lightweight gel textures. Personal comfort and the complete formula matter."
                    ]
                },
                {
                    heading: "Avoid Over-Cleansing",
                    paragraphs: [
                        "Cleansing too frequently or using harsh products can leave skin feeling dry and uncomfortable. Follow a routine that suits your needs."
                    ]
                },
                {
                    heading: "Follow with Moisturizer",
                    paragraphs: [
                        "After cleansing, apply a suitable moisturizer to help maintain skin comfort and support the skin barrier."
                    ]
                }
            ],
            conclusion: "A gentle cleanser that suits your skin is a practical foundation for a comfortable everyday skincare routine."
        },


        "hydration": {
            title: "The Secret to Keeping Your Skin Soft and Hydrated",
            category: "SKIN HYDRATION",
            date: "November 06, 2026",
            time: "6 Min Read",
            image: "Images/editors-hydration.jpg",
            intro: "Explore simple hydration habits and ingredients that help maintain your skin's moisture balance.",
            opening: "Hydrated skin often feels more comfortable and supple. Choosing the right moisturizer and understanding hydrating ingredients can help you create a routine that supports moisture retention.",
            sections: [
                {
                    heading: "Understand Hydrating Ingredients",
                    paragraphs: [
                        "Hyaluronic acid and glycerin are humectants that attract water. They are commonly used in serums and moisturizers."
                    ]
                },
                {
                    heading: "Support Your Skin Barrier",
                    paragraphs: [
                        "Ingredients such as ceramides are used in skincare formulas designed to support the skin barrier. A suitable moisturizer can help reduce moisture loss."
                    ]
                },
                {
                    heading: "Choose a Texture You Enjoy",
                    paragraphs: [
                        "Lightweight gels, lotions and richer creams offer different textures. Choose one that feels comfortable for your skin and climate."
                    ]
                }
            ],
            conclusion: "Hydration is about finding a balance of products and habits that keep your skin feeling comfortable throughout the day."
        },


        "healthy-habits": {
            title: "Everyday Habits That Help Your Skin Look Its Best",
            category: "BEAUTY & WELLNESS",
            date: "November 06, 2026",
            time: "4 Min Read",
            image: "Images/editors-glow.jpg",
            intro: "Small lifestyle choices and consistent skincare habits can support a healthy-looking complexion over time.",
            opening: "Healthy-looking skin is supported by more than a collection of skincare products. Everyday habits can make your routine feel more balanced and sustainable.",
            sections: [
                {
                    heading: "Keep Your Routine Consistent",
                    paragraphs: [
                        "Choose a few skincare essentials and follow their directions regularly. Consistency can make your routine easier to maintain."
                    ]
                },
                {
                    heading: "Make Sun Protection a Habit",
                    paragraphs: [
                        "Use a broad-spectrum sunscreen as directed and combine it with shade and protective clothing when appropriate."
                    ]
                },
                {
                    heading: "Support Your Overall Wellbeing",
                    paragraphs: [
                        "Prioritize regular rest, balanced meals, hydration and enjoyable physical activity. These habits support general wellbeing."
                    ]
                }
            ],
            conclusion: "You do not need to change everything at once. Start with small habits that fit naturally into your everyday life."
        }

    };


    /* =====================================
       GET SELECTED ARTICLE
    ===================================== */

    const params = new URLSearchParams(window.location.search);
    const articleKey = params.get("article");
    const article = articles[articleKey];


    /* =====================================
       HTML ELEMENTS
    ===================================== */

    const hero = document.querySelector(".bd-hero");
    const title = document.getElementById("articleTitle");
    const category = document.getElementById("articleCategory");
    const intro = document.getElementById("articleIntro");
    const date = document.getElementById("articleDate");
    const readTime = document.getElementById("articleReadTime");
    const image = document.getElementById("articleImage");
    const opening = document.getElementById("articleOpening");
    const sections = document.getElementById("articleSections");
    const conclusion = document.getElementById("articleConclusion");
    const related = document.getElementById("relatedArticles");


    /* =====================================
       INVALID ARTICLE
    ===================================== */

    if (!article) {

        document.title = "Article Not Found | Glow & Grace";

        title.textContent = "Article Not Found";
        category.textContent = "GLOW & GRACE JOURNAL";

        intro.textContent =
            "The article you are looking for could not be found. Explore our journal for more skincare inspiration.";

        date.textContent = "";
        readTime.textContent = "";

        image.src = "Images/blog-editorial-hero.jpg";
        image.alt = "Glow and Grace skincare journal";

        opening.innerHTML = `
            <p>
                This article may have moved or the link may be incorrect.
                Visit our blog to explore the latest skincare articles.
            </p>
        `;

        sections.innerHTML = "";

        conclusion.textContent =
            "Explore our journal for more skincare tips and inspiration.";

        related.innerHTML = `
            <div class="bd-related-card">
                <div class="bd-related-info">
                    <h3>Explore Our Skincare Journal</h3>
                    <a href="blog.html">VIEW ALL ARTICLES</a>
                </div>
            </div>
        `;

        return;
    }


    /* =====================================
       UPDATE HERO AND ARTICLE DETAILS
    ===================================== */

    document.title = article.title + " | Glow & Grace";

    title.textContent = article.title;
    category.textContent = article.category;
    intro.textContent = article.intro;

    date.textContent = article.date;
    readTime.textContent = article.time;

    image.src = article.image;
    image.alt = article.title;

    opening.innerHTML = `<p>${article.opening}</p>`;

    conclusion.textContent = article.conclusion;


    /* =====================================
       GENERATE ARTICLE SECTIONS
    ===================================== */

    sections.innerHTML = article.sections.map(function (section) {

        const paragraphs = section.paragraphs.map(function (paragraph) {
            return `<p>${paragraph}</p>`;
        }).join("");

        return `
            <div class="bd-article-section">

                <h2>${section.heading}</h2>

                ${paragraphs}

            </div>
        `;

    }).join("");


    /* =====================================
       GENERATE RELATED ARTICLES
    ===================================== */

    const allKeys = Object.keys(articles);

    const currentIndex = allKeys.indexOf(articleKey);

    const relatedKeys = [];

    for (let i = 1; i <= 3; i++) {

        const nextIndex = (currentIndex + i) % allKeys.length;

        relatedKeys.push(allKeys[nextIndex]);

    }

    related.innerHTML = relatedKeys.map(function (key) {

        const item = articles[key];

        const articleURL =
            "blog-details.html?article=" + encodeURIComponent(key);

        return `
            <article class="bd-related-card">

                <a href="${articleURL}" class="bd-related-image">

                    <img src="${item.image}"
                         alt="${item.title}"
                         loading="lazy">

                </a>

                <div class="bd-related-info">

                    <span>${item.category}</span>

                    <h3>${item.title}</h3>

                    <a href="${articleURL}">
                        READ ARTICLE
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>

                </div>

            </article>
        `;

    }).join("");

});