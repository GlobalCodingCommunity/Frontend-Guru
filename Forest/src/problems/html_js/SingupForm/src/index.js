import "./styles.css";

/**
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {string} passwordConfirm
 */
async function submitForm(username, email, password, passwordConfirm) {
  try {
    const response = await fetch(
      "https://questions.greatfrontend.com/api/questions/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirm: passwordConfirm,
        }),
      }
    );

    const { message } = await response.json();
    alert(message);
  } catch (_) {
    alert("Error submitting form!");
  }
}

// Write any JavaScript here.
(() => {
  console.log("sup");
  document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    console.log(email, username, password, confirmPassword);

    if (password !== confirmPassword) {
      // remove class
      const errorMessageDiv = document.getElementById("error-message");
      errorMessageDiv.classList.remove("hidden");

      const addClassHidden = () => {
        errorMessageDiv.classList.add("hidden");
      };

      setTimeout(() => {
        addClassHidden();
      }, 3000);
    }

    await submitForm(username, email, password, confirmPassword);
  });
})();
