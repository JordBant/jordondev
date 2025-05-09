import { FC } from "react";
import "./Contact.scss";

export const Contact: FC = () => {
  return (
    <section className="contact-page">
      <section className="contact-container">
        <h1 className="contact-title">
          Connect
          <hr
            style={{
              padding: 0,
              margin: 0,
              marginTop: "10px",
              lineHeight: 0,
              width: "50%",
              justifySelf: "end",
            }}
          />
        </h1>
        <section className="contact-body">
          <ul className="contact-list">
            <li
              className="contact-list-item"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `
              mailto:jaybdev25@gmail.com?subject=Lets Connect!`;
              }}
            >
              <span className="blend-text">Email</span>
            </li>
            <li className="contact-list-item" onClick={() => window.open("http://linkedin.com/in/jbantin")}>
              <span className="blend-text">LinkedIn</span>
            </li>
            <li className="contact-list-item" onClick={() => window.open("https://github.com/JordBant")}>
              <span className="blend-text">Github</span>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

