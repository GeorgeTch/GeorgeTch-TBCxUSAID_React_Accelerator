// "use client";
// import { useState } from "react";

import { useTranslations } from "next-intl";

// function LoginForm({ handleLogin }) {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
function LoginForm() {
  const t = useTranslations("Login");
  return (
    <form
      className="login-form"
      // onSubmit={(e) => {
      //   e.preventDefault();
      // }}
      action="/api/login"
      method="POST"
    >
      <label htmlFor="userName">{t("username")}</label>
      <input
        type="text"
        id="userName"
        name="username"
        placeholder="Enter Your Username"
        // value={userName}
        // onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="password">{t("password")}</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        // onClick={() => handleLogin(userName, password)}
      >
        {t("login")}
      </button>
    </form>
  );
}

export default LoginForm;
