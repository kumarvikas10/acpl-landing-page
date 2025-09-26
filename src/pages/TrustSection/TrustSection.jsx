import styles from "./TrustSection.module.css";
import ausMap from "../../assets/ausmap.svg";

const TrustSection = () => {
  const mapPoints = [
    { id: "darwin", label: "Darwin", threats: 28, left: "52%", top: "10%" },
    { id: "perth", label: "Perth", threats: 12, left: "18%", top: "60%" },
    { id: "adelaide", label: "Adelaide", threats: 19, left: "59%", top: "70%" },
    {
      id: "melbourne",
      label: "Melbourne",
      threats: 22,
      left: "69%",
      top: "82%",
    },
    { id: "brisbane", label: "Brisbane", threats: 18, left: "85%", top: "49%" },
  ];
  return (
    <section className={styles.trustSection}>
      <div className={styles.trustGrid}>
        <div className="sectionHeader">
          <div className="badge--red badge--left">
            <span className="badge">WHY ACPL IN ANZ</span>
          </div>
          <h2 className="sectionTitle">
            Your Trusted Cybersecurity Partner,
            <br className="removebr" /> Now Local to You
          </h2>
          <p className="sectionSubtitle">
            As a leading cybersecurity services provider with a strong global
            presence and deep vendor partnerships, ACPL Systems is proud to
            expand into Australia and New Zealand. From Zero Trust architecture
            to managed cloud security, we bring global expertise with local
            focus.
          </p>

          <ul className={styles.trustBullets}>
            <li>Offices across India and global delivery support</li>
            <li>
              Partnered with Microsoft, Zscaler, Netskope, Palo Alto Networks,
              Crowdstrike, Qualys and more
            </li>
            <li>
              300+ certified engineers across cloud, identity, and network
              security
            </li>
            <li>
              Proven delivery across BFSI, healthcare, telecom, and critical
              infrastructure
            </li>
          </ul>
          <a href="#read-more" className="btn btn--primary">
            Read More
          </a>
        </div>
        <div className={styles.trustMapWrap}>
          <img
            src={ausMap}
            alt="Australia map"
            className={styles.trustMapImg}
          />
          {mapPoints.map((p) => (
            <button
              key={p.id}
              type="button"
              className={styles.mapPin}
              style={{ left: p.left, top: p.top }}
              data-bs-toggle="popover"
              data-bs-trigger="hover focus"
              data-bs-placement="top"
              title={p.label}
              data-bs-content={`${p.threats} active threats`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
