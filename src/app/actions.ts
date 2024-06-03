"use server";

import { revalidatePath } from "next/cache";
import {
  createUser,
  deleteUser,
  updateUser,
  createCartItem,
  resetCart,
  cartItemDecrement,
  removeCartItem,
} from "./api/api-functions";

export async function createUserAction(formdata: FormData) {
  const { name, email, age } = Object.fromEntries(formdata);
  await createUser(name as string, email as string, age as string);
  console.log(name, email, age);
  revalidatePath("/admin");
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
  console.log("user: ", id);
  revalidatePath("/admin");
}

export async function updateUserAction(formdata: FormData) {
  const { id, name, email, age } = Object.fromEntries(formdata);
  await updateUser(
    id as string,
    name as string,
    email as string,
    age as string
  );
  console.log(id, name, email, age);
  revalidatePath("/admin");
}

export async function createCartItemAction(productId: number) {
  await createCartItem(productId);
  revalidatePath("/");
}

export async function resetCartAction() {
  await resetCart();
  revalidatePath("/cart");
}

export async function cartItemDecrementAction(productId: number) {
  await cartItemDecrement(productId);
  revalidatePath("/cart");
}

export async function removeCartItemAction(productId: number) {
  await removeCartItem(productId);
  revalidatePath("/cart");
}

// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

// export async function login(username, password) {
//   "use server";
//   try {
//     const response = await fetch("https://dummyjson.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(
//         `Login failed, can't fetch user information statuscode: ${response.status}`
//       );
//     }

//     const user = await response.json();
//     const cookiesStore = cookies();
//     cookiesStore.set("auth", JSON.stringify(user));
//   } catch (error) {
//     console.error("Login Failed: ", error);
//   }
// }

// export async function logout() {
//   "use server";
//   // try {
//   const cookiesStore = cookies();
//   cookiesStore.delete("auth");
//   console.log("User logged out");
//   redirect("/login");
//   // } catch (error) {
//   //   console.error("Logout failed:", error);
//   // }
// }
