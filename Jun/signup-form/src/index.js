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
      },
    );

    const { message } = await response.json();
    alert(message);
  } catch (_) {
    alert("Error submitting form!");
  }
}
let data = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
function validate() {
  const { username, email, password, passwordConfirm } = data;
  // email format check
  return (
    password === passwordConfirm && RegExp("^[a-zA-Z0-9]+$").test(username)
  );
}
document.getElementById("user-name").addEventListener("change", (event) => {
  data.username = event.target.value;
});
document.getElementById("email").addEventListener("change", (event) => {
  data.email = event.target.value;
});
document.getElementById("password").addEventListener("change", (event) => {
  data.password = event.target.value;
});
document
  .getElementById("confirm-password")
  .addEventListener("change", (event) => {
    data.passwordConfirm = event.target.value;
  });

document.getElementById("sign-up").addEventListener("click", (event) => {
  event.preventDefault();
  if (validate()) {
    submitForm(data);
  }
});
