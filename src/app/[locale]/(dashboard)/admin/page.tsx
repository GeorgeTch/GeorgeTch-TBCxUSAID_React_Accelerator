import { Users } from "../../../../../types/types";
import { getUsers } from "../../../api/api-functions";
import { BiUserPlus } from "react-icons/bi";
import UsersTable from "../../../../../components/admin/UsersTable";
import AddUserForm from "../../../../../components/admin/AddUserForm";

export const revalidate = 0;

export default async function AdminPage() {
  const users: Users = await getUsers();
  return (
    <div className="py-5 flex flex-col  w-[70%] mx-auto">
      <h1 className="text-xl md:text-2xl text-center font-bold py-10">
        User Management
      </h1>
      {/* 
      <div className="container mx-auto py-5">
        <AddUserForm />
      </div> */}

      <div className="container">
        {/* table */}
        <UsersTable users={users} />
      </div>
    </div>
  );
}
