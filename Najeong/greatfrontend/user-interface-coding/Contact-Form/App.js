import submitForm, { SUBMIT_URL } from "./submitForm";

export default function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
      method="post"
      action={SUBMIT_URL}
    >
      <div>
        <label htmlFor="name">name</label>
        <input id="name" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input id="email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="message">message</label>
        <textarea id="message" name="message" />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
