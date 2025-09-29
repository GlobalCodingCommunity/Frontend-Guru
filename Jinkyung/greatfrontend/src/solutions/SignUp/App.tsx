import React, { useEffect } from "react";
import "./styles.css";

export default function SignupPage() {
  useEffect(() => {
    import("./index.js").then((module) => module.default());
  }, []);

  return (
    <div id="signup-root">
      <form>
        <div>
          <label htmlFor="username-input">Username</label>
          <input id="username-input" name="username" required type="text" pattern="^[a-zA-Z0-9]+$" minLength={4} />
        </div>
        <div>
          <label htmlFor="email-input">Email</label>
          <input id="email-input" name="email" required type="email" />
        </div>
        <div>
          <label htmlFor="password-input">Password</label>
          <input id="password-input" name="password" required type="password" minLength={6} />
        </div>
        <div>
          <label htmlFor="password-confirm-input">Confirm Password</label>
          <input id="password-confirm-input" name="password_confirm" required type="password" minLength={6} />
          <div className="error hidden" id="password-mismatch-error">The passwords do not match</div>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}