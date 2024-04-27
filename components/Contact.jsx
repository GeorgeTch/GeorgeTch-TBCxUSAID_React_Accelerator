import { useTranslations } from "next-intl";

function Contact() {
  const t = useTranslations("Contact");
  return (
    <div className="contact-container">
      <h2>{t("contactUs")}</h2>
      <div className="contact-info">
        <div className="contact-info-box">
          <h3>{t("address")}</h3>
          <p>1234 Elm Street Springfield, IL 62701 United States</p>
        </div>
        <div className="contact-info-box">
          <h3>{t("phone")}</h3>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="contact-info-box">
          <h3>{t("email")}</h3>
          <p>randomuser123@example.com</p>
        </div>
      </div>
      <p>{t("forInquiries")}</p>
      <form className="contact-form" action="#">
        <div className="form-input">
          <label htmlFor="name">{t("name")}:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-input">
          <label htmlFor="email">{t("email")}:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-input">
          <label htmlFor="message">{t("message")}:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">{t("submit")}</button>
      </form>
    </div>
  );
}

export default Contact;
