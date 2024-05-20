"use client";
import { BiUserPlus } from "react-icons/bi";

export default function AddUserBtn({ visible, setVisible }) {
  return (
    <div className="left flex gap-3 mb-5">
      <button
        onClick={() => setVisible(!visible)}
        className="flex items-center bg-gray-500 text-white px-4 py-2 border rounded-md hover:bg-gray-200 hover:border-gray-900 hover:text-gray-800"
      >
        Add User{" "}
        <span className="px-1">
          <BiUserPlus size={20}></BiUserPlus>
        </span>
      </button>
    </div>
  );
}
