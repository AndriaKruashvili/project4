document.addEventListener("DOMContentLoaded", function () {
    // Get references to the Welcome Box and Rules Box
    const welcomeBox = document.getElementById("welcomeBox");
    const rulesBox = document.getElementById("rulesBox");

    // Get a reference to the "Rules" button
    const toggleRulesButton = document.getElementById("toggleRulesButton");

    // Get a reference to the "Continue" button
    const continueButton = document.getElementById("continueButton");

    // Get a reference to the checkbox
    const checkbox = document.getElementById("one");

    // Flag to keep track of the current state
    let rulesVisible = false;

    // Function to toggle the z-index values of the boxes and button state
    function toggleZIndex() {
        if (rulesVisible) {
            welcomeBox.style.zIndex = 1;
            rulesBox.style.zIndex = 2;
            continueButton.setAttribute("disabled", true);
        } else {
            welcomeBox.style.zIndex = 2;
            rulesBox.style.zIndex = 1;
            continueButton.removeAttribute("disabled");
        }
        rulesVisible = !rulesVisible;
    }

    // Function to enable or disable the "Continue" button based on checkbox state
    function toggleButtonState() {
        if (!rulesVisible && checkbox.checked) {
            continueButton.removeAttribute("disabled");
        } else {
            continueButton.setAttribute("disabled", true);
        }
    }

    // Add a click event listener to the "Rules" button
    toggleRulesButton.addEventListener("click", toggleZIndex);

    // Add a change event listener to the checkbox
    checkbox.addEventListener("change", toggleButtonState);

    // Add a click event listener to the "Continue" button
    continueButton.addEventListener("click", () => {
        if (checkbox.checked) {
            // Navigate to the "home.html" file in the same folder
            window.location.href = "home.html";
        } else {
            alert("გთხოვთ დაეთანხმეთ წესებს სანამ საიტით სარგებლობას გადაწყვეტთ.");
        }
    });

    // Initially, set the Welcome Box on top and disable the "Continue" button
    welcomeBox.style.zIndex = 2;
    rulesBox.style.zIndex = 1;
    continueButton.setAttribute("disabled", true);
});
