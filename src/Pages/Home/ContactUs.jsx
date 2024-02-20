import contactUsStyle from "../../assets/CSS/home/contactUs.module.css";

const ContactUs = () => {
  return (
    <>
      <div id={contactUsStyle.container}>
        <h1 className={contactUsStyle.title}>Contact Us</h1>
        <div className={contactUsStyle.underline}></div>
        <div className={contactUsStyle.iconWrapper}></div>
        <form
          action="#"
          method="post"
          className={contactUsStyle.contactForm}
          id={contactUsStyle.contactForm}
        >
          <div className={contactUsStyle.name}>
            <label htmlFor={contactUsStyle.nameInput}></label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id={contactUsStyle.nameInput}
              required=""
            />
          </div>
          <div className={contactUsStyle.email}>
            <label htmlFor={contactUsStyle.emailInput}></label>
            <input
              type="email"
              placeholder="E-mail "
              name="email"
              id={contactUsStyle.emailInput}
              required=""
            />
          </div>
          <div className={contactUsStyle.telephone}>
            <label htmlFor={contactUsStyle.telephoneInput}></label>
            <input
              type="text"
              placeholder=" number "
              name="telephone"
              id={contactUsStyle.telephoneInput}
              required=""
            />
          </div>
          <div className={contactUsStyle.subject}>
            <label htmlFor={contactUsStyle.subjectInput}></label>
            <select
              placeholder="Subject line"
              name="subject"
              id={contactUsStyle.subjectInput}
              required=""
            >
              <option disabled="" hidden="" selected="">
                Subject line
              </option>
              <option>I'd like to start a project</option>
              <option>I'd like to ask a question</option>
              <option>I'd like to make a proposal</option>
            </select>
          </div>
          <div className={contactUsStyle.message}>
            <label htmlFor={contactUsStyle.messageInput}></label>
            <textarea
              name="message"
              placeholder="What do you want to Contact us for?"
              id={contactUsStyle.messageInput}
              cols={30}
              rows={3}
              required=""
              defaultValue={""}
            />
          </div>
          <div className={contactUsStyle.submit}>
            <input
              type="submit"
              defaultValue="Send Message"
              id={contactUsStyle.formButton}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
