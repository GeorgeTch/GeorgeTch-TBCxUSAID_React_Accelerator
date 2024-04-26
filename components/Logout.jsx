"use client";
import { useRouter } from "next/navigation";

function Logout({ handleLogout }) {
  const router = useRouter();

  const handleClick = async () => {
    await handleLogout();
  };
  return (
    <>
      <button
        className="logout-btn"
        onClick={() => {
          handleClick();
          router.push("/login");
        }}
      >
        Log out
      </button>
    </>
  );
}

export default Logout;
