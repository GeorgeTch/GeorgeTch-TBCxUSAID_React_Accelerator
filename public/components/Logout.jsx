"use client";

function Logout({ handleLogout }) {
  const handleClick = async () => {
    await handleLogout();
  };
  return (
    <>
      <button
        className="logout-btn"
        onClick={() => {
          handleClick();
        }}
      >
        Log out
      </button>
    </>
  );
}

export default Logout;
