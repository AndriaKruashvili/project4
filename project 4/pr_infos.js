const passwordInput = document.getElementById("passwordInput");
const submitButton = document.getElementById("submitButton");
const errorMessage = document.getElementById("errorMessage");
let incorrectAttempts = 0;

function handlePasswordSubmission() {
    const password = passwordInput.value.trim();

    if (password === "Subsub") {
        // Check if the current page is "pr_infos.html"
        if (window.location.pathname.endsWith("pr_infos.html")) {
            // Hide the container_parent
            const containerParent = document.getElementById("container_parent");
            if (containerParent) {
                containerParent.style.display = "none";
            }
        } else {
            // Redirect to "pr_infos.html"
            window.location.href = "pr_infos.html";
        }
    } else {
        errorMessage.classList.remove("hidden");
        alert("შეიყვანე სწორი პაროლი :))");
        incorrectAttempts++;

        if (incorrectAttempts % 2 == 0) {
            alert("პაროლის გასაგებად შეიძინეთ Subscription-ი \n FB: Andria Amiranashvili \n FB: Temo Maghlakelidze");
        }
    }
}

passwordInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        handlePasswordSubmission();
    }
});

submitButton.addEventListener("click", () => {
    handlePasswordSubmission();
});
