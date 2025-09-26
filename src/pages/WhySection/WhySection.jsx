import styles from "./WhySection.module.css";
import evolutionIcon from "../../assets/evolution.svg";
import exposureIcon from "../../assets/exposure.svg";
import gapsIcon from "../../assets/gaps.svg";
import itIcon from "../../assets/it.svg";
import { useState } from "react";

const WhySection = () => {
  const [activeStatCard, setActiveStatCard] = useState(0);
  const statCardsData = [
    {
      id: 0,
      icon: evolutionIcon,
      title: "Ransomware Evolution",
      value: "400%",
      subtitle: "Increase in 2024",
      details: {
        title: "Ransomware Evolution Crisis",
        items: [
          "AI-powered attacks bypass traditional signature detection",
          "Double & triple extortion targeting ANZ enterprises",
          "Average downtime: 23 days, costing $1.85M per incident",
        ],
        sidePanel: {
          title: "Recent ANZ Impact",
          data: [
            { label: "Healthcare Sector", value: "47 incidents" },
            { label: "Financial Services", value: "31 incidents" },
            { label: "Manufacturing", value: "28 incidents" },
          ],
        },
      },
    },
    {
      id: 1,
      icon: exposureIcon,
      title: "Cloud Exposure",
      value: "73%",
      subtitle: "of breaches",
      details: {
        title: "Cloud Security Blind Spots",
        items: [
          "Misconfigured SaaS apps exposing sensitive data",
          "Shadow IT creating ungoverned access points",
          "Multi-cloud complexity overwhelming security teams",
        ],
        sidePanel: {
          title: "Common Exposures",
          data: [
            { label: "Open S3 Buckets", value: "89% of orgs" },
            { label: "Weak IAM Policies", value: "76% of orgs" },
            { label: "Unencrypted Data", value: "62% of orgs" },
          ],
        },
      },
    },
    {
      id: 2,
      icon: gapsIcon,
      title: "Compliance Gaps",
      value: "$4.8M",
      subtitle: "avg. penalty",
      details: {
        title: "Regulatory Compliance Crisis",
        items: [
          "Privacy Act 1988 amendments increasing penalties",
          "APRA CPS 234 requiring continuous monitoring",
          "Notifiable data breach obligations expanding",
        ],
        sidePanel: {
          title: "ANZ Penalties (2024)",
          data: [
            { label: "Privacy Violations", value: "$2.2M avg" },
            { label: "Data Breaches", value: "$4.8M avg" },
            { label: "Regulatory Fines", value: "$7.1M avg" },
          ],
        },
      },
    },
    {
      id: 3,
      icon: itIcon,
      title: "IT Team Burnout",
      value: "68%",
      subtitle: "report burnout",
      details: {
        title: "IT Team Breaking Point",
        items: [
          "Managing 47+ security tools on average",
          "Alert fatigue causing 67% of threats to be missed",
          "Skills shortage: 3.5M unfilled cybersecurity roles",
        ],
        sidePanel: {
          title: "Team Challenges",
          data: [
            { label: "Tool Fragmentation", value: "47 avg tools" },
            { label: "False Positives", value: "85% of alerts" },
            { label: "Response Time", value: "197 days avg" },
          ],
        },
      },
    },
  ];
  const currentStatCard = statCardsData[activeStatCard];
  return (
    <section className={styles.whySection}>
      <div className="sectionHeader">
        <div className="badge--red">
          <span className="badge">THE PROBLEM STATEMENT</span>
        </div>
        <h2 className="sectionTitle">
          Why Traditional Defenses
          <br />
          are Failing Enterprises
        </h2>
        <p className="sectionSubtitle">
          Evolving attack surfaces and misconfigurations expose enterprises—
          <br />
          traditional tools lack the agility and intelligence to combat today's
          cyber risks.
        </p>
      </div>
      <div className={styles.statsGrid}>
        {statCardsData.map((stat, index) => (
          <div
            key={stat.id}
            className={`${styles.statCard} ${
              activeStatCard === index ? styles.active : ""
            } card`}
            onClick={() => setActiveStatCard(index)}
          >
            <img src={stat.icon} alt="statsIcon" className={styles.statIcon} />
            <p className={styles.statTitle}>{stat.title}</p>
            <h3 className={styles.statNumber}>{stat.value}</h3>
            <p className={styles.statSubtitle}>{stat.subtitle}</p>
            <div className={styles.statProgress}>
              <div className={styles.progressBar}></div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.detailSection}>
        <div className={styles.detailMain}>
          <h3 className={styles.detailTitle}>
            {currentStatCard.details.title}
          </h3>
          <ul className={styles.detailList}>
            {currentStatCard.details.items.map((item, index) => (
              <li key={index} className={styles.detailItem}>
                <span className={styles.bulletPoint}>●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.sidePanel}>
          <h4 className={styles.sidePanelTitle}>
            {currentStatCard.details.sidePanel.title}
          </h4>
          <div className={styles.sidePanelData}>
            {currentStatCard.details.sidePanel.data.map((item, index) => (
              <div key={index} className={styles.dataRow}>
                <span className={styles.dataLabel}>{item.label}</span>
                <span className={styles.dataValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
