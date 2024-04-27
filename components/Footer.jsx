import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Index");
  return (
    <footer className="text">
      <a href="https://termify.io/terms-and-conditions-generator?gad_source=1&gclid=CjwKCAiA0bWvBhBjEiwAtEsoWzs2jSqzrLqZpJmdtm---oXR8xYTOLYo0L-QaQeKJSFxdm-dFJmo8RoCY9cQAvD_BwE">
        {t("Footer.terms")}
      </a>
      <a href="https://fsymbols.com/copyright/">{t("Footer.policy")}</a>
    </footer>
  );
}
