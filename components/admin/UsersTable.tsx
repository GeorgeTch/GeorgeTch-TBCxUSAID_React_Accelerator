"use client";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useState } from "react";
import { User } from "../../types/types";
import {
  deleteUserAction,
  updateUserAction,
} from "../../src/app/[locale]/(dashboard)/actions";
import AddUserForm from "./AddUserForm";
import AddUserBtn from "./AddUserBtn";

export default function UsersTable({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <AddUserBtn visible={visible} setVisible={setVisible} />

      <AddUserForm
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        visible={visible}
        setVisible={setVisible}
      />
      <table className="min-w-full table-auto ">
        <thead className="">
          <tr className="bg-gray-800">
            <th className="px-16 py-2">
              <span className="text-gray-200">Name</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Email</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Age</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200 dark:bg-gray-500">
          {users.map((user: User) => (
            <tr key={user.id} className="text-center">
              <td className="px-16 py-2 flex flex-row items-center">
                <span className="text-center ml-2 font-semibold">
                  {user.name}
                </span>
              </td>
              <td className="px-16 py-2">
                <span>{user.email}</span>
              </td>
              <td className="px-16 py-2">
                <span>{user.age}</span>
              </td>

              <td className="px-16 py-2 flex justify-around gap-5">
                <button
                  onClick={() => setSelectedUser(user)}
                  className="cursor bg-gray-50 rounded-xl"
                >
                  <BiEdit size={20} color={"rgb(34,197,94)"}></BiEdit>
                </button>
                <button
                  onClick={() => deleteUserAction(user.id)}
                  className="cursor  bg-gray-50 rounded-xl"
                >
                  <BiTrash size={20} color={"rgb(244,63,94)"}></BiTrash>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
