import styles from "./CaseSection.module.css";
import healthcareIcon from "../../assets/healthcare.svg";
import bankIcon from "../../assets/bank.svg";
import cropIcon from "../../assets/crop.svg";
import { useState } from "react";

const CaseSection = () => {
  const [activeCase, setActiveCase] = useState(0);
  const caseCards = [
    {
      id: 0,
      icon: healthcareIcon,
      title: "Healthcare Network",
      meta: "Multi-site Medical Group",
      value: "Zero",
      metric: "Ransomware Incidents",
      details: {
        title: "Healthcare Network Transformation",
        meta: "Multi-site Medical Group • 1,200+ employees",
        bullets: [
          "Legacy systems vulnerable to ransomware",
          "Deployed Zero Trust + 24/7 SOC monitoring",
        ],
        cta: { label: "Read Full Case Study", href: "#case-healthcare" },
        results: [
          { value: "Zero", label: "Incidents" },
          { value: "100%", label: "HIPAA" },
          { value: "78%", label: "Faster" },
        ],
        quote: {
          text: "Zero incidents in 18 months. ACPL’s healthcare expertise is unmatched.",
          author: "Dr. Sarah Chen, CIO",
        },
      },
    },
    {
      id: 1,
      icon: bankIcon,
      title: "Regional Bank",
      meta: "Community Banking",
      value: "85%",
      metric: "Faster Detection",
      details: {
        title: "Regional Bank Security Overhaul",
        meta: "Community Banking • 45 branches • $2.8B assets",
        bullets: [
          "Slow response times (>4 hours) & APRA compliance gaps",
          "AI threat detection + real-time monitoring",
        ],
        cta: { label: "Read Full Case Study", href: "#case-bank" },
        results: [
          { value: "85%", label: "Faster" },
          { value: "12 min", label: "Response" },
          { value: "100%", label: "APRA" },
        ],
        quote: {
          text: "From reactive to proactive. We detect threats in minutes, not hours.",
          author: "Michael Torres, CISO",
        },
      },
    },
    {
      id: 2,
      icon: cropIcon,
      title: "Manufacturing Corp",
      meta: "Industrial Operations",
      value: "$2.4M",
      metric: "Cost Savings",
      details: {
        title: "Manufacturing Corp Digital Shield",
        meta: "Industrial Operations • 3,500+ employees • Global supply chain",
        bullets: [
          "OT/IT gaps & legacy industrial vulnerabilities",
          "Industrial IoT security + network segmentation",
        ],
        cta: { label: "Read Full Case Study", href: "#case-manufacturing" },
        results: [
          { value: "$2.4M", label: "Saved" },
          { value: "67%", label: "Less Down" },
          { value: "100%", label: "OT Cover" },
        ],
        quote: {
          text: "Saved millions in downtime. Their OT/IT integration is world‑class.",
          author: "James Mitchell, Head of IT Security",
        },
      },
    },
  ];
  const currentCase = caseCards[activeCase];
  return (
    <section className={styles.caseSection}>
      <div className="sectionHeader">
        <div className="badge badge--red">
          <span>CASE STUDY</span>
        </div>
        <h2 className="sectionTitle">Real Impact, Measurable Results</h2>
        <p className="sectionSubtitle">
          At ACPL Systems, our solutions don’t just protect — they transform.
          Explore real‑world case studies where we’ve <br />
          helped enterprises strengthen resilience, streamline compliance, and
          achieve measurable security outcomes.
        </p>
      </div>
      <div className={styles.caseGrid}>
        {caseCards.map((c, i) => (
          <div
            key={c.id}
            className={`${styles.caseCard} ${
              i === activeCase ? styles.active : ""
            } card`}
            onClick={() => setActiveCase(i)}
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && setActiveCase(i)
            }
          >
            <img src={c.icon} className={styles.caseIcon} alt="" />
            <h4 className={styles.caseTitle}>{c.title}</h4>
            <p className={styles.caseMeta}>{c.meta}</p>
            <h3 className={styles.caseNumber}>{c.value}</h3>
            <p className={styles.caseMetric}>{c.metric}</p>
            <div className={styles.caseProgress}>
              <div className={styles.caseBar} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.caseDetail}>
        <div className={styles.caseSummary}>
          <div className={styles.caseSummaryHead}>
            <div className={styles.caseSummaryIconWrap}>
              <img
                src={currentCase.icon}
                className={styles.caseSummaryIcon}
                alt=""
              />
            </div>
            <div>
              <h3 className={styles.caseDetailTitle}>
                {currentCase.details.title}
              </h3>
              <div className={styles.caseDetailMeta}>
                {currentCase.details.meta}
              </div>
            </div>
          </div>

          <div className={styles.caseDetailBlock}>
            <div className={styles.caseDetailLabel}>Challenge & Solution</div>
            <ul className={styles.caseDetailList}>
              {currentCase.details.bullets.map((b, idx) => (
                <li key={idx}>
                  <span className={styles.caseBullet}>●</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={currentCase.details.cta.href}
            className="btn btn--primary btn--sm"
          >
            {currentCase.details.cta.label}
          </a>
        </div>

        <div className={styles.caseResults}>
          <div className={styles.resultPills}>
            {currentCase.details.results.map((r, idx) => (
              <div key={idx} className={styles.resultPill}>
                <h4 className={styles.resultValue}>{r.value}</h4>
                <p className={styles.resultLabel}>{r.label}</p>
              </div>
            ))}
          </div>

          <div className={styles.caseQuote}>
            <h4 className={styles.caseQuoteText}>
              “{currentCase.details.quote.text}”
            </h4>
            <p className={styles.caseQuoteAuthor}>
              — {currentCase.details.quote.author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
