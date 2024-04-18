import { cookies } from "next/headers";

export async function login(username, password) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  console.log(response);
  const user = response.json();
  const cookiesStore = cookies();
  cookiesStore.set("auth", JSON.stringify(user));
  cookiesStore.delete("auth");
}

export async function logout() {
  const cookiesStore = cookies();
  cookiesStore.remove("auth");
  redirect("/login");
}
