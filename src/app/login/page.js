"use server";
import { cookies } from "next/headers";
import "../../../public/styles/login.css";
import LoginForm from "../../../components/LoginForm";
import { login } from "../(dashboard)/actions";
import { redirect } from "next/navigation";

async function LoginPage() {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get("auth");
  console.log(cookie);

  if (cookie) {
    redirect("/");
  }

  const handleLogin = async (username, password) => {
    await login(username, password);
  };

  return (
    <div className="login-page">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
