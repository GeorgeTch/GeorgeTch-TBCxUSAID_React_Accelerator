export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getUsers() {
  const response = await fetch(BASE_URL + "/api/get-users");
  console.log(BASE_URL);
  const { users } = await response.json();
  return users.rows;
}

export async function createUser(name: string, email: string, age: string) {
  return await fetch(BASE_URL + "/api/add-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}

export async function deleteUser(id: number) {
  return await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
}

export async function updateUser(
  id: string,
  name: string,
  email: string,
  age: string
) {
  return await fetch(BASE_URL + `/api/edit-user/${id}`, {
    method: "PUT",
    body: JSON.stringify({ id, name, email, age }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getCartItems() {
  try {
    const response = await fetch(BASE_URL + "/api/get-cart-items");
    const { cart } = await response.json();
    console.log(cart);
    return cart.rows;
  } catch (error) {
    console.error("Can't fetch cart data: ", error);
  }
}

export async function createCartItem(productId: number) {
  const response = await fetch(`${BASE_URL}/api/create-cart-item`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });

  return response;
}

export async function resetCart() {
  const response = await fetch(`${BASE_URL}/api/reset-cart`, {
    method: "DELETE",
  });

  return response;
}

export async function cartItemDecrement(productId: number) {
  return await fetch(`${BASE_URL}/api/decrease-cart-item-qty/${productId}`, {
    method: "POST",
    body: JSON.stringify({ productId }),
  });
}

export async function removeCartItem(productId: number) {
  const response = await fetch(`${BASE_URL}/api/remove-cart-item`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });
  return response.json();
}
