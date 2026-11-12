
const productData = {

    "vitamin-c": {
        name: "Vitamin C Brightening Serum",
        category: "FACE SERUM",
        breadcrumb: "Serums",
        price: "₹599",
        image: "Images/pp7.jpg",
        description: "A lightweight serum formulated with Vitamin C to support brighter, more even-looking skin. A thoughtful addition to your everyday skincare routine.",
        skin: "Normal & Dull Skin",
        type: "Face Serum"
    },

    "hyaluronic": {
        name: "Hyaluronic Hydration Serum",
        category: "FACE SERUM",
        breadcrumb: "Serums",
        price: "₹549",
        image: "Images/pp8.jpg",
        description: "A moisture-focused serum that helps keep skin hydrated, soft and comfortable.",
        skin: "All Skin Types",
        type: "Face Serum"
    },

    "cleanser": {
        name: "Gentle Daily Face Cleanser",
        category: "FACE CLEANSER",
        breadcrumb: "Cleansers",
        price: "₹349",
        image: "Images/pp9.jpg",
        description: "A mild daily cleanser that removes impurities while maintaining skin's natural moisture.",
        skin: "Normal & Sensitive Skin",
        type: "Face Cleanser"
    },

    "moisturizer": {
        name: "Daily Hydration Cream",
        category: "MOISTURIZER",
        breadcrumb: "Moisturizers",
        price: "₹449",
        image: "Images/pp10.jpg",
        description: "A nourishing moisturizer designed to provide lasting hydration and maintain soft, smooth skin.",
        skin: "Dry & Normal Skin",
        type: "Moisturizer"
    },

    "sunscreen": {
        name: "Daily Shield SPF 50",
        category: "SUNSCREEN",
        breadcrumb: "Sunscreens",
        price: "₹499",
        image: "Images/pp11.jpg",
        description: "A daily sunscreen formulated to help protect skin from harmful UVA and UVB rays.",
        skin: "All Skin Types",
        type: "Sunscreen"
    },

    "niacinamide": {
        name: "Niacinamide Skin Serum",
        category: "FACE SERUM",
        breadcrumb: "Serums",
        price: "₹499",
        image: "Images/pp12.jpg",
        description: "A lightweight serum designed to support balanced-looking skin and improve uneven skin texture.",
        skin: "Oily & Combination Skin",
        type: "Face Serum"
    }

};

const params = new URLSearchParams(window.location.search);

const productId = params.get("id") || "vitamin-c";

const product = productData[productId] || productData["vitamin-c"];

document.getElementById("detailProductName").textContent =
    product.name;

document.getElementById("detailCategory").textContent =
    product.category;

document.getElementById("detailBreadcrumb").textContent =
    product.breadcrumb;

document.getElementById("detailProductPrice").textContent =
    product.price;

document.getElementById("detailProductDescription").textContent =
    product.description;

document.getElementById("detailSkinType").textContent =
    product.skin;

document.getElementById("detailProductType").textContent =
    product.type;

const productImage =
    document.getElementById("detailProductImage");

productImage.src = product.image;
productImage.alt = product.name;
