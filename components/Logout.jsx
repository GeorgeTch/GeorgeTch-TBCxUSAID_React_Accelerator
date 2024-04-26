// "use client";
// import { useRouter } from "next/navigation";

// function Logout({ handleLogout }) {
//   const router = useRouter();

// const handleClick = async () => {
//   await handleLogout();
// };

function Logout() {
  return (
    <form action="/api/logout" method="POST">
      <button
        type="submit"
        className="logout-btn"
        // onClick={() => {
        //   handleClick();
        //   router.push("/login");
        // }}
      >
        Log out
      </button>
    </form>
  );
}

export default Logout;
