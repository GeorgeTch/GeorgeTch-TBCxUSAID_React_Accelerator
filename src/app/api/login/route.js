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
  const user = await response.json();

  if (!response.ok) {
    console.log(user.message);
    redirect("/login");
  }
  const cookiesStore = cookies();
  cookiesStore.set("auth", JSON.stringify(user));

  if (user.username === formData.get("username")) {
    redirect("/");
  } else {
    redirect("/login");
  }
}
