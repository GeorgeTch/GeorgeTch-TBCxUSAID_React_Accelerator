// "use client";
// import { useRouter } from "next/navigation";

import { useTranslations } from "next-intl";

// function Logout({ handleLogout }) {
//   const router = useRouter();

// const handleClick = async () => {
//   await handleLogout();
// };

function Logout() {
  const t = useTranslations("Index");
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
        {t("Header.logout")}
      </button>
    </form>
  );
}

export default Logout;
