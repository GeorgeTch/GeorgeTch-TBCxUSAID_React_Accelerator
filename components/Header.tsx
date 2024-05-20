import Link from "next/link";
import Image from "next/image";
import Logout from "./Logout";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  // async function handleLogout() {
  //   "use server";
  //   await logout();
  // }
  const t = useTranslations("Index");
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image src="/logo.png" width={70} height={70} alt="Company Logo" />
          </Link>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link href="/">{t("Header.home")}</Link>
            </li>
            <li>
              <Link href="/profile">{t("Header.profile")}</Link>
            </li>
            <li>
              <Link href="/blog">{t("Header.blog")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("Header.contact")}</Link>
            </li>
            <li></li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/admin" className="border-lg">
            {t("Header.admin")}
          </Link>
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Logout
          // handleLogout={handleLogout}
          />
        </div>
      </div>
    </header>
  );
}
