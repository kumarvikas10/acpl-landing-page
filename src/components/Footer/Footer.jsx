import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Visit{" "}
        <a
          className={styles.footerLink}
          href="https://www.acplglobal.com/"
          target="_blank"
          rel="noreferrer"
        >
          ACPL Global
        </a>{" "}
        Website to Explore More About Our Services.
      </p>
    </footer>
  );
};

export default Footer;
