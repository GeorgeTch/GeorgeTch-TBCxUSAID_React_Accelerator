"use client";
function Logout({ handleLogout }) {
  return (
    <div>
      <button className="logout-btn" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}

export default Logout;
