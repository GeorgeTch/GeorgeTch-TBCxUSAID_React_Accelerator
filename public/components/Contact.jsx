function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-info-box">
          <h3>Address</h3>
          <p>1234 Elm Street Springfield, IL 62701 United States</p>
        </div>
        <div className="contact-info-box">
          <h3>Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="contact-info-box">
          <h3>Email</h3>
          <p>randomuser123@example.com</p>
        </div>
      </div>
      <p className="bg-red-600 text-4xl">
        For inquiries, please fill out the form below:
      </p>
      <form className="contact-form" action="#">
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-input">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
