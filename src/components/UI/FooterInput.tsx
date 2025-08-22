"use client";
import React, { useState } from "react";
import "../UI/button.css";

export default function FooterInput({
  title,
  mail,
  messages,
  button,
  pl1,
  pl2,
  ...props
}: any) {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e: any) => {
    e.preventDefault();

    try {
      // Send contact email to business via mail service
      const businessEmailResponse = await fetch(
        "https://saibaitour.mn/mail-service/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "no-reply@saibaitour.mn", // FROM no-reply address
            to: "info@saibaitour.mn", // TO business email
            subject: `New Contact Form Submission from ${name} ${last}`,
            html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name} ${last}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr>
            <p><em>This email was sent from your website contact form.</em></p>
            <p><strong>Reply to:</strong> ${email}</p>
            <p><strong>Customer Email:</strong> ${email}</p>
          `,
          }),
        }
      );

      if (!businessEmailResponse.ok) {
        throw new Error("Failed to send business email");
      }

      // Send confirmation email to customer
      const customerEmailResponse = await fetch(
        "https://saibaitour.mn/mail-service/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "no-reply@saibaitour.mn", // FROM no-reply address
            to: email, // TO user's email
            subject: "Thank you for contacting Saibaitour",
            html: `
            <h2>Thank you for contacting us!</h2>
            <p>Dear ${name} ${last},</p>
            <p>We have received your message and will get back to you within 24 hours.</p>
            <p><strong>Your message:</strong></p>
            <p>${message}</p>
            <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
            <p>Best regards,<br>The Saibaitour Team</p>
            <hr>
            <p><small>This is an automated confirmation email. Please do not reply to this email.</small></p>
          `,
          }),
        }
      );

      if (!customerEmailResponse.ok) {
        throw new Error("Failed to send confirmation email");
      }

      alert("Message sent successfully!");

      // Reset form
      setName("");
      setLast("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong, please try again!");
    }
  };

  return (
    <form onSubmit={sendMail}>
      <div>
        <div style={{ display: "flex", width: "48%" }}>
          <label
            style={{ color: "#fff" }}
            className="footer_containers_text"
            htmlFor="name"
          >
            {title}
          </label>
          <label htmlFor="last"></label>
        </div>
        <div style={{ display: "flex", gap: "3%" }}>
          <div>
            <div style={{ border: "1px solid #fff1b5" }}>
              <input
                type="text"
                id="name"
                placeholder={pl1}
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="footer_input_field"
              />
            </div>
          </div>
          <div style={{ border: "1px solid #fff1b5" }}>
            <input
              type="text"
              id="last"
              placeholder={pl2}
              required
              value={last}
              onChange={(e) => {
                setLast(e.target.value);
              }}
              className="footer_input_field"
            />
          </div>
        </div>
      </div>
      <div>
        <label
          style={{ color: "#fff" }}
          className="footer_containers_text"
          htmlFor="email"
        >
          {mail}
        </label>
        <div style={{ border: "1px solid #fff1b5" }}>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div>
        <label
          style={{ color: "#fff" }}
          className="footer_containers_text"
          htmlFor="message"
        >
          {messages}
        </label>
        <div>
          <textarea
            rows={5}
            name="message"
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          style={{ marginTop: "5%", marginBottom: "5%" }}
          className="myButton "
        >
          {button}
        </button>
      </div>
    </form>
  );
}
