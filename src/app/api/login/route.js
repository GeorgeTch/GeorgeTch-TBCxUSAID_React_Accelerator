import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(request) {
  const formData = await request.formData();
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
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

  if (response.ok) {
    redirect("/");
  }
}
