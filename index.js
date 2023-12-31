const emailInput = document.getElementById("email");
const hiddenText = document.getElementById("error-message");
const button = document.getElementById("subscribe-button");
const dismissButton = document.getElementById("dismiss-button");
const successScreen = document.getElementById("success-screen");
const card = document.getElementById("card");
const emailReplace = document.getElementById("email-replace");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const re = /^\S+@\S+\.\S+$/;
  if (re.test(email)) {
    hiddenText.className = "error hidden";
    emailInput.className = "";
    emailReplace.innerText = email;
    card.className = "hidden";
    successScreen.className = "";
  } else {
    hiddenText.className = "error";
    emailInput.className = "error-box";
  }
});

dismissButton.addEventListener("click", (e) => {
  e.preventDefault();
  successScreen.className = "hidden";
  card.className = "";
});
