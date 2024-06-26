import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const apiKey = process.env.REACT_APP_WEB3_FORMS_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", apiKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const res = await response.json();

      if (response.ok && res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
          buttonsStyling: true,
          confirmButtonColor: "#333"
        });
      } else {
        throw new Error(res.message || "Failed to send the message");
      }
    } catch (error) {
      console.log("Error", error);
      Swal.fire({
        title: "Error!",
        text: error.toString(),
        icon: "error",
        buttonsStyling: true,
        confirmButtonColor: "#333"
      });
    }
  };

  return (
    <div className="contacts-page">
      <h1>Contact Me</h1>
      <p>
        Please contact me directly at {" "}
        <a className="underline" href="mailto:fxthienan@gmail.com">
          fxthienan@gmail.com
        </a>{" "}
        or through this form.

      </p>
      <form className="contact-form" onSubmit={onSubmit}>
        <label htmlFor="name">Name*</label>
        <input type="text" name="name" required autoComplete='off' placeholder='Your Name...'/>

        <label htmlFor="email">Email*</label>
        <input type="email" name="email" required placeholder='Your Email Address...'/>

        <label htmlFor="message">Message*</label>
        <textarea name="message" required rows="5" placeholder='Your Message...'/>

        <button type="submit">Send</button>
      </form>

      <ul className="social-links">
        <li>
          <a href="https://github.com/thienan11" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github fa-fw"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/thienan-tran" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        
      </ul>
    </div>
  );
}

export default Contact;