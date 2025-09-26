import styles from "./ContactSection.module.css";
import mailIcon from "../../assets/mail.svg";
import phoneIcon from "../../assets/phone.svg";
import locationIcon from "../../assets/location.svg";
import contactBg from "../../assets/contactBg.png";

const ContactSection = () => {
  return (
    <section
      className={styles.contactSection} style={{ backgroundImage: `url(${contactBg})` }}
      id="contact"
    >
      <div className={styles.contactWrap}>
        <div className={styles.contactGrid}>
          <aside className={styles.contactPanel}>
            <h3 className={styles.contactHeading}>
              Ready to Take Control of Your
              <br className='removebr' />
              Enterprise Security?
            </h3>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <img src={mailIcon} alt="" />
              </div>
              <div className={styles.contactBody}>
                <h4 className={styles.contactTitle}>Send Us Email</h4>
                <p className={styles.contactText}>
                  Have detailed inquiries or need a customized solution? Drop us
                  an email and our team will get back to you as soon as
                  possible.
                </p>
                <a href="mailto:info@acpl.com" className={styles.contactLink}>
                  info@acpl.com
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <img src={phoneIcon} alt="" />
              </div>
              <div className={styles.contactBody}>
                <h4 className={styles.contactTitle}>Make A Call</h4>
                <p className={styles.contactText}>
                  Prefer to speak with an expert? Give us a call, and our team
                  will assist with the right cybersecurity solutions and
                  support.
                </p>
                <a href="tel:+61410485811" className={styles.contactLink}>
                  +61 410 485 811
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <img src={locationIcon} alt="" />
              </div>
              <div className={styles.contactBody}>
                <h4 className={styles.contactTitle}>Visit Us</h4>
                <p className={styles.contactText}>
                  ACPL Systems Pvt Ltd, 697 Collins Street, Melbourne Quarter
                  Two, Melbourne, Australia - 209
                </p>
              </div>
            </div>
          </aside>
          <div className={styles.contactFormWrap}>
            <h3 className={styles.formHeading}>
              Questions or Comments?
              <br />
              <span className={styles.formHeadingRed}>Get in Touch</span>
            </h3>

            <form
              className={styles.contactForm}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={styles.formRow}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="First Name*"
                  required
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Last Name*"
                  required
                />
              </div>

              <div className={styles.formRow}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Company Name*"
                  required
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Your Location*"
                  required
                />
              </div>
              <div className={styles.formRow}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Country Code*"
                  required
                />
                <input
                  className={styles.input}
                  type="tel"
                  placeholder="Phone Number*"
                  required
                />
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email Address*"
                  required
                />
              </div>
              <textarea
                className={styles.textarea}
                rows={5}
                placeholder="Description*"
                required
              />

              <button type="submit" className="btn btn--primary btn--pill">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
