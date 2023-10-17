const passwordInput = document.getElementById("passwordInput");
const submitButton = document.getElementById("submitButton");
const errorMessage = document.getElementById("errorMessage");
let incorrectAttempts = 0; 

function handlePasswordSubmission() {
    const password = passwordInput.value.trim();

    if (password === "Andria") {
        window.location.href = "salami.html";
    } else {
        errorMessage.classList.remove("hidden");
        alert("შეიყვანე სწორი პაროლი :))");
        incorrectAttempts++; 

        if (incorrectAttempts % 2 == 0) {
            alert("პაროლის გასაგებად დაუკავშირდით \n FB: Andria Amiranashvili \n FB: Temo Maghlakelidze");
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
