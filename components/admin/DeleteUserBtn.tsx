"use client";
import { revalidatePath } from "next/cache";
import deleteSvg from "../public/icons/delete.svg";

import { deleteUserAction } from "../../src/app/[locale]/(dashboard)/actions";

function DeleteUserBtn({ id }) {
  return (
    <button
      onClick={() => {
        deleteUserAction(id);
      }}
    >
      X
    </button>
  );
}

export default DeleteUserBtn;
{
  /* <div className="flex flex-col gap-4">
        <form
          action={createUserAction}
          className="flex flex-col gap-4 max-w-[250px]"
        >
          <input type="text" name="name" required />
          <input type="text" name="email" required />
          <button type="submit">Create User</button>
        </form>
        {users.map((user: User) => (
          <div
            key={user.id}
            className="flex items-center justify-between gap-5"
          >
            <div className="flex gap-4">
              <p className="font-bold">{user.name}</p>
              <p>{user.email}</p>
            </div>
            <DeleteUserBtn id={user.id} />
          </div>
        ))}
      </div> */
}
