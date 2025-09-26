import styles from './PartnerSection.module.css'
import partnersLogo from "../../assets/partners-logo.svg";

const PartnerSection = () => {
  return (
    <section className={styles.partnersSection}>
      <div className="sectionHeader">
        <div className="badge badge--red">
          <span>PARTNER ECOSYSTEM</span>
        </div>
        <h2 className="sectionTitle">
          Partnering with Industry Leaders
          <br className='removebr'/> for Cybersecurity Success
        </h2>
        <p className="sectionSubtitle">
          ACPL partners with leading OEMs to deliver tailored, cutting-edge
          cybersecurity across cloud, network, <br /> endpoint, and
          compliance—ensuring fast deployment, seamless integration, and
          expert-led security outcomes.
        </p>
      </div>
      <div className={styles.partnerStripWrap}>
        <div className={styles.partnerStripTrack}>
          <img
            src={partnersLogo}
            alt="Our technology partners"
            className={styles.partnerStripImg}
          />
          <img
            src={partnersLogo}
            alt=""
            aria-hidden="true"
            className={styles.partnerStripImg}
          />
        </div>
      </div>
      <div className={styles.partnerKpiGrid}>
        <div className={`${styles.partnerKpiCard} card`}>
          <h3 className={styles.kpiValue}>80%</h3>
          <p className={styles.kpiText}>
            Reduction in alert noise within 60 days of CyberCare deployment
          </p>
        </div>

        <div className={`${styles.partnerKpiCard} card`}>
          <h3 className={styles.kpiValue}>70%</h3>
          <p className={styles.kpiText}>
            Faster incident response time through automated playbooks
          </p>
        </div>

        <div className={`${styles.partnerKpiCard} card`}>
          <h3 className={styles.kpiValue}>35%</h3>
          <p className={styles.kpiText}>
            Policy optimization achieved on Day 1 of engagement
          </p>
        </div>

        <div className={`${styles.partnerKpiCard} card`}>
          <h3 className={styles.kpiValue}>24/7</h3>
          <p className={styles.kpiText}>
            APAC coverage with follow-the-sun engineering support
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
