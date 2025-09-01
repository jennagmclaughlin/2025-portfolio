import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import AnimatedCheckmark from "./AnimatedCheckmark";
import { motion } from "motion/react";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          form.current.reset();
          setIsSubmitted(true);
          console.log("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again.", error);
        }
      );
  };

  return (
    <div className="contact-container w-full lightMode-box-shadow relative flex justify-center items-center">
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 1 }}
        animate={{ opacity: isSubmitted ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          pointerEvents: isSubmitted ? "none" : "auto",
        }}
      >
        <div className="input-box">
          <label className="sr-only">Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Bruce Wayne"
            required
            className="lightMode-box-shadow"
          />
        </div>
        <div className="input-box">
          <label className="sr-only">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="email@address.com"
            required
            className="lightMode-box-shadow"
          />
        </div>
        <div className="input-box">
          <label className="sr-only">Subject</label>
          <input
            name="subject"
            type="subject"
            placeholder="Lorem ipsum dolor sit amet..."
            required
            className="lightMode-box-shadow"
          />
        </div>
        <div className="input-box">
          <label className="sr-only">Your Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Lorem ipsum dolor sit amet..."
            required
            className="lightMode-box-shadow"
          ></textarea>
        </div>
        <button
          type="submit"
          className="ctaButton rounded-lg bg-primary/30 cursor-pointer self-start"
        >
          Send message
        </button>
      </motion.form>

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute" }}
        >
          <AnimatedCheckmark />
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
