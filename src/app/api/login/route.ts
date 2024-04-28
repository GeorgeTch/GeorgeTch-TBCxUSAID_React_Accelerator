import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface UserResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });
  const user: UserResponse = await response.json();

  if (!response.ok) {
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
