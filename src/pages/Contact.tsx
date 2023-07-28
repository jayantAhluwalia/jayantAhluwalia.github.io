import HomeLink from "../components/HomeLink";
import { contactDescription } from "../constant";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <div className="contact-cont">
        <p>{contactDescription}</p>
        <a href="https://www.linkedin.com/in/jayant-ahluwalia-418a46187/">
          Linkdin
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jayantahluwalia07@gmail.com">
          Email
        </a>
      </div>
      <HomeLink />
    </div>
  );
};

export default Contact;
