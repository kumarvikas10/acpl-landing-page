import styles from "./HeroSection.module.css";
import globeIcon from "../../assets/globe.svg";
import lockIcon from "../../assets/lock.svg";
import flashIcon from "../../assets/flash.svg";
import clientsIcon from "../../assets/clients.svg";
import partnersIcon from "../../assets/partners.svg";
import experienceIcon from "../../assets/experience.svg";
import engineerIcon from "../../assets/engineer.svg";
import heroBg from "../../assets/hero-background-1.png";

const HeroSection = () => {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
      <div className={styles.trustBadges}>
        <div className={styles.trustBadge}>
          <img src={globeIcon} alt="globeIcon" className={styles.trustIcon} />
          <span>Trusted by Fortune 500s</span>
        </div>
        <span>|</span>
        <div className={styles.trustBadge}>
          <img src={lockIcon} alt="lockIcon" className={styles.trustIcon} />
          <span>ISO 27001 Certified</span>
        </div>
        <span>|</span>
        <div className={styles.trustBadge}>
          <img src={flashIcon} alt="flashIcon" className={styles.trustIcon} />
          <span>24/7 SOC Monitoring</span>
        </div>
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Built for Tomorrow's Threats.
          <br />
          <span className={styles.heroTitleRed}> Delivered Today with CyberCare.
          </span>
        </h1>

        <div className={styles.statsGrid}>
          <div className='card'>
            <img
              src={clientsIcon}
              alt="clientsIcon"
              className={styles.statIcon}
            />
            <h3 className={styles.statNumber}>400+</h3>
            <p className={styles.statLabel}>Active Clients</p>
          </div>

          <div className='card'>
            <img
              src={partnersIcon}
              alt="partnersIcon"
              className={styles.statIcon}
            />
            <h3 className={styles.statNumber}>30+</h3>
            <p className={styles.statLabel}>Technology Partners</p>
          </div>

          <div className='card'>
            <img
              src={experienceIcon}
              alt="experienceIcon"
              className={styles.statIcon}
            />
            <h3 className={styles.statNumber}>35+</h3>
            <p className={styles.statLabel}>Years of Experience</p>
          </div>

          <div className='card'>
            <img
              src={engineerIcon}
              alt="engineerIcon"
              className={styles.statIcon}
            />
            <h3 className={styles.statNumber}>300+</h3>
            <p className={styles.statLabel}>Certified Engineers</p>
          </div>
        </div>

        <div className={styles.ctaButtons}>
          <a href="#contact" className="btn btn--primary">
            Talk to a Regional Expert
          </a>
          <a href="#global" className="btn btn--secondary">
            Visit ACPL Global
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
