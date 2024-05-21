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
