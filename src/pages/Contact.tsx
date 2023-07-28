import HomeLink from "../components/HomeLink";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <div className="contact-cont">
        <p>
          I am readily available for new opportunities and collaborations, eager
          to embark on inspiring projects. If you have any questions, proposals,
          or just want to connect, don't hesitate to reach out. Let's bring
          innovative ideas to life and make a meaningful impact together.
          Looking forward to hearing from you soon! Feel free to drop me a
          message via Linkdin, email, or any preferred means of communication.
        </p>
        <a href="https://www.linkedin.com/in/jayant-ahluwalia-418a46187/">
          Linkdin
        </a>
        <a href="mailto:jayantahluwalia07@gmail.com">Email</a>
      </div>
      <HomeLink />
    </div>
  );
};

export default Contact;
