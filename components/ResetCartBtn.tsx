"use client";

import { resetCartAction } from "../src/app/actions";

export default function ResetCartBtn() {
  async function handleReset() {
    await resetCartAction();
  }
  return (
    <div>
      <button
        onClick={handleReset}
        className="mb-4 w-32 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition duration-200"
      >
        Reset Cart
      </button>
    </div>
  );
}
