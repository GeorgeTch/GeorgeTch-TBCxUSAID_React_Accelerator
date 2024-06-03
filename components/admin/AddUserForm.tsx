"use client";
import { createUserAction, updateUserAction } from "../../src/app/actions";
import { BiUserPlus } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";

function AddUserForm({ selectedUser, setSelectedUser, visible, setVisible }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (selectedUser) {
      setVisible(true);
    }
  }, [selectedUser, setVisible]);

  const handleSubmit = async () => {
    const formData = new FormData(formRef.current);

    if (selectedUser) {
      formData.append("id", selectedUser.id);
      await updateUserAction(formData);
      setSelectedUser(null);
    } else {
      await createUserAction(formData);
    }

    formRef.current.reset();
    setVisible(false);
  };

  return (
    <>
      {/* <div className="left flex gap-3 mb-5">
        <button
          onClick={() => setVisible(!visible)}
          className="flex items-center bg-gray-500 text-white px-4 py-2 border rounded-md hover:bg-gray-200 hover:border-gray-900 hover:text-gray-800"
        >
          Add User{" "}
          <span className="px-1">
            <BiUserPlus size={20}></BiUserPlus>
          </span>
        </button>
      </div> */}
      {visible && (
        <form
          action={handleSubmit}
          ref={formRef}
          className="flex flex-col w-1/4 gap-3 py-5"
        >
          <div className="input-type">
            <input
              type="text"
              name="name"
              defaultValue={selectedUser ? selectedUser.name : ""}
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="input-type">
            <input
              type="text"
              name="email"
              defaultValue={selectedUser ? selectedUser.email : ""}
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="input-type">
            <input
              type="number"
              name="age"
              defaultValue={selectedUser ? selectedUser.age : ""}
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              placeholder="Age"
              required
            />
          </div>

          <button
            type="submit"
            className="flex w-2/6 justify-center bg-gray-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-gray-500 hover:text-gray-800"
          >
            {selectedUser ? "UPDATE" : "ADD"}
          </button>
        </form>
      )}
    </>
  );
}

export default AddUserForm;
