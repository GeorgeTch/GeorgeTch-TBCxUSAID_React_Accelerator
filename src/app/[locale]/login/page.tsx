// "use server";
import { cookies } from "next/headers";
import "../../../../styles/login.css";
import LoginForm from "../../../../components/LoginForm";
// import { login } from "../../../(dashboard)/actions";
import { redirect } from "next/navigation";

async function LoginPage() {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get("auth");
  // console.log("coockie on login page: ", cookie);

  if (cookie) {
    // console.log("trying to redirect from login page to home");
    redirect("/");
  }

  // const handleLogin = async (username, password) => {
  //   "use server";
  //   await login(username, password);
  // };

  return (
    <div className="login-page">
      <LoginForm
      // handleLogin={handleLogin}
      />
    </div>
  );
}

export default LoginPage;
