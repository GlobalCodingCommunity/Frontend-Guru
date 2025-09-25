import "./styles.css";

/**
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {string} passwordConfirm
 */
async function submitForm(username, email, password, passwordConfirm) {
  try {
    const response = await fetch("https://questions.greatfrontend.com/api/questions/sign-up", {
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
    });

    const { message } = await response.json();
    alert(message);
  } catch (_) {
    alert("Error submitting form!");
  }
}

// Write any JavaScript here.
let data = {
  username: "",
  email: "",
  password: "",
  password_confirm: "",
};

document.getElementById("username").addEventListener("change", e => {
  e.preventDefault();
  data.username = e.target.value;
});

document.getElementById("email").addEventListener("change", e => {
  e.preventDefault();
  data.email = e.target.value;
});

document.getElementById("password").addEventListener("change", e => {
  e.preventDefault();
  data.password = e.target.value;
});

document.getElementById("password_confirm").addEventListener("change", e => {
  e.preventDefault();
  data.password_confirm = e.target.value;
});

document.getElementById("sign_up").addEventListener("click", e => {
  e.preventDefault();

  if (data.password === data.password_confirm && RegExp("^[a-zA-Z0-9]+$").test(username)) {
    submitForm(data.username, data.email, data.password, data.password_confirm);
  }
});
