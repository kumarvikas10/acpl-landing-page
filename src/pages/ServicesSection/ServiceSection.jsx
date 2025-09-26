import styles from "./ServicesSection.module.css";
import networkIcon from "../../assets/network.svg";
import detectionIcon from "../../assets/detection.svg";
import identityIcon from "../../assets/identity.svg";
import downloadIcon from "../../assets/download.svg";
import exposureIcon from "../../assets/exposure.svg";

const ServiceSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className="sectionHeader">
        <div className="badge--red">
          <span className="badge">OUR CYBERCARE PRO SERVICES</span>
        </div>
        <h2 className="sectionTitle">
          Strategic Cyber Defense
          <br />
          Built for the ANZ Market
        </h2>
        <p className="sectionSubtitle">
          From strategy to execution, we deliver secure, scalable, and compliant
          <br />
          solutions built for the unique needs of Australia and New Zealand
          businesses.
        </p>
      </div>
      <div className={styles.servicesGrid}>
        <div className={`${styles.serviceCard} card`}>
          <div className={styles.imgSection}>
            <img
              src={exposureIcon}
              alt="exposureIcon"
              className={styles.serviceIcon}
            />
          </div>
          <h3 className={styles.serviceTitle}>Cloud & Data Security</h3>
          <ul className={styles.serviceFeatures}>
            <li>SaaS Security (SASE, CASB, DLP)</li>
            <li>Cloud Compliance Monitoring</li>
            <li>Data Loss Prevention</li>
          </ul>
          <a href="#cloud-security" className="btn btn--primary btn--sm">
            Get Cloud Security Assessment
          </a>
        </div>

        <div className={`${styles.serviceCard} card`}>
          <div className={styles.imgSection}>
            <img
            src={networkIcon}
            alt="networkIcon"
            className={styles.serviceIcon}
          />
          </div>
          <h3 className={styles.serviceTitle}>
            Network & Infrastructure Defense
          </h3>
          <ul className={styles.serviceFeatures}>
            <li>Zero Trust Access</li>
            <li>Next-Gen Firewalls</li>
            <li>Threat Intelligence</li>
          </ul>
          <a href="#network-audit" className="btn btn--primary btn--sm">
            Schedule Network Audit
          </a>
        </div>

        <div className={`${styles.serviceCard} card`}>
          <div className={styles.imgSection}>
            <img
            src={detectionIcon}
            alt="detectionIcon"
            className={styles.serviceIcon}
          />
          </div>
          <h3 className={styles.serviceTitle}>Managed Detection & Response</h3>
          <ul className={styles.serviceFeatures}>
            <li>24/7 SOC Operations</li>
            <li>AI-powered Threat Detection</li>
            <li>Incident Response</li>
          </ul>
          <a href="#soc-trial" className="btn btn--primary btn--sm">
            Start SOC Trial
          </a>
        </div>

        <div className={`${styles.serviceCard} card`}>
          <div className={styles.imgSection}>
            <img
            src={identityIcon}
            alt="identityIcon"
            className={styles.serviceIcon}
          />
          </div>
          <h3 className={styles.serviceTitle}>Identity & Access Management</h3>
          <ul className={styles.serviceFeatures}>
            <li>Multi-Factor Authentication (MFA)</li>
            <li>Privileged Access Management (PAM)</li>
            <li>Single Sign-On (SSO)</li>
          </ul>
          <a href="#identity-assessment" className="btn btn--primary btn--sm">
            Request Identity Security Assessment
          </a>
        </div>
      </div>
      <div className={styles.portfolioCTA}>
        <a href="#download-portfolio" className="btn btn--secondary">
          <span>Download ACPL Service Portfolio</span>
          <img
            src={downloadIcon}
            alt="downloadIcon"
            className={styles.downloadIcon}
          />
        </a>
      </div>
    </section>
  );
};

export default ServiceSection;
