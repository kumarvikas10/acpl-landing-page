import styles from './DeliverySection.module.css'
import discoverIcon from "../../assets/discover.svg";
import designIcon from "../../assets/design.svg";
import deployIcon from "../../assets/deploy.svg";
import manageIcon from "../../assets/manage.svg";

const DeliverySection = () => {
  return (
    <section className={styles.deliverySection}>
      <div className="sectionHeader">
        <div className="badge badge--red">
          <span>OUR DELIVERY APPROACH</span>
        </div>
        <h2 className="sectionTitle">
          A Proven Approach to
          <br />
          Cybersecurity Excellence
        </h2>
        <p className="sectionSubtitle">
          Our delivery methodology combines strategy, precision, and agility
          <br />
          to help you achieve measurable security outcomes at every stage.
        </p>
      </div>

      <div className={styles.deliveryGrid}>
        <div className={styles.deliveryCard} tabIndex={0}>
          <h4 className={styles.stepNumber}>1</h4>
          <img
            src={discoverIcon}
            alt="discoverIcon"
            className={styles.stepIcon}
          />
          <h3 className={styles.stepTitle}>Discover & Assess</h3>
          <p className={styles.stepDescription}>
            We identify security gaps and align with business goals.
          </p>
        </div>

        <div className={styles.deliveryCard} tabIndex={0}>
          <h4 className={styles.stepNumber}>2</h4>
          <img src={designIcon} alt="designIcon" className={styles.stepIcon} />
          <h3 className={styles.stepTitle}>Design & Plan</h3>
          <p className={styles.stepDescription}>
            We tailor solutions based on risks, compliance, and objectives.
          </p>
        </div>

        <div className={styles.deliveryCard} tabIndex={0}>
          <h4 className={styles.stepNumber}>3</h4>
          <img src={deployIcon} alt="deployIcon" className={styles.stepIcon} />
          <h3 className={styles.stepTitle}>Deploy & Integrate</h3>
          <p className={styles.stepDescription}>
            We implement secure systems ensuring performance and seamless
            integration.
          </p>
        </div>

        <div className={styles.deliveryCard} tabIndex={0}>
          <h4 className={styles.stepNumber}>4</h4>
          <img src={manageIcon} alt="manageIcon" className={styles.stepIcon} />
          <h3 className={styles.stepTitle}>Manage & Evolve</h3>
          <p className={styles.stepDescription}>
            We continuously monitor, optimize, and adapt to new threats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
