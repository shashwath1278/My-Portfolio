import React, { useRef, useState } from 'react';
import './Contactme.css';
import emailjs from '@emailjs/browser';
import {useTheme} from '../Themecontext'; // Ensure this provides the `theme` and `toggleTheme` functionality

const Contactme = () => {
  const form = useRef();
  const [popup, setPopup] = useState(null);
  const { theme } = useTheme(); // Retrieve the current theme

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pu713iv', 'template_mrytgfq', form.current, {
        publicKey: 'kkUw1wkLlQ2d5XaNX',
      })
      .then(
        () => {
          setPopup('Email sent successfully!');
          setTimeout(() => setPopup(null), 4000); // Close the popup after 4 seconds
          alert('Thank you! Your message has been sent.');
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          setPopup(`Failed to send email: ${error.text}`);
          setTimeout(() => setPopup(null), 4000); // Close the popup after 4 seconds
          alert('Sorry, there was an issue sending your message. Please try again later.');
          form.current.reset(); // Clear the form fields
        }
      );
  };

  return (
    <>
      <section id="contact-me" className={`socials ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <div className="social">
          <h1>Feel free to reach out!</h1>

          <div className="item">
            <h2>Mail</h2>
            <span>drs.prabhu2018@gmail.com</span>
          </div>
          <div className="item">
            <h2>LinkedIn</h2>
            <span>Shashwath Prabhu</span>
          </div>
          <div className="item">
            <h2>GitHub</h2>
            <span>shashwath1278</span>
          </div>
        </div>

        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required placeholder="Name" />
            <label>Email</label>
            <input type="email" name="user_email" required placeholder="Email" />
            <label>Message</label>
            <textarea rows="6" name="message" placeholder="Message" />
            <button type="submit" value="Send">
              Submit
            </button>
          </form>
        </div>

        {popup && <div className="popup">{popup}</div>}
      </section>
    </>
  );
};

export default Contactme;
