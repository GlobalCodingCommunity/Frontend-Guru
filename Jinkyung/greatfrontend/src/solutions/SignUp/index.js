// index.js
import './styles.css';

export default function initSignup() {
  const $form = document.querySelector('form');
  const $passwordConfirmInput = document.getElementById('password-confirm-input');
  const $passwordMismatchError = document.getElementById('password-mismatch-error');

  if (!$form || !$passwordConfirmInput || !$passwordMismatchError) return;

  $form.addEventListener('submit', async (event) => {
    event.preventDefault();
    $passwordConfirmInput.removeAttribute('aria-invalid');
    $passwordMismatchError.classList.add('hidden');

    const formData = new FormData($form);
    const password = formData.get('password');
    const passwordConfirm = formData.get('password_confirm');

    if (password !== passwordConfirm) {
      $passwordConfirmInput.setAttribute('aria-invalid', 'true');
      $passwordMismatchError.classList.remove('hidden');
      return;
    }

    try {
      const response = await fetch('https://questions.greatfrontend.com/api/questions/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.get('username'),
          email: formData.get('email'),
          password,
          password_confirm: passwordConfirm,
        }),
      });
      const { message } = await response.json();
      alert(message);
    } catch (_) {
      alert('Error submitting form!');
    }
  });
}