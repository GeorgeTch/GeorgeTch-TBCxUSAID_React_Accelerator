import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(username, password) {
  "use server";
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Login failed, can't fetch user information statuscode: ${response.status}`
      );
    }

    const user = await response.json();
    const cookiesStore = cookies();
    cookiesStore.set("auth", JSON.stringify(user));
  } catch (error) {
    console.error("Login Failed: ", error);
  }
}

export async function logout() {
  "use server";
  try {
    const cookiesStore = cookies();
    cookiesStore.delete("auth");
    console.log("User logged out");
    redirect("/login");
  } catch (error) {
    console.error("Logout failed:", error);
  }
}
