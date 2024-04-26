"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

function LanguageSwitcher() {
  const router = useRouter();
  const activeLocale = useLocale();
  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`);
  };
  return (
    <select
      className="border-2 rounded hover:opacity-60 cursor-pointer"
      onChange={onSelectChange}
      defaultValue={activeLocale}
    >
      <option value="en">English</option>
      <option value="ka">Georgian</option>
    </select>
  );
}

export default LanguageSwitcher;
