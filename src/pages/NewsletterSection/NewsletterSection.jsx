import styles from './NewsletterSection.module.css'

const NewsletterSection = () => {
  return (
    <section className={styles.newsletterSection}>
        <div className='sectionHeader'>
          <div className="badge badge--red">
            <span>NEWSLETTER</span>
          </div>
          <h2 className='sectionTitle'>
            Stay Ahead with Cybersecurity Insights
          </h2>
          <p className='sectionSubtitle'>
            Subscribe to our newsletter for the latest updates on cloud
            security, threat intelligence, compliance insights,
            <br /> expert strategies, and ANZ‑specific trends—plus exclusive
            access to monthly reports, blogs, and webinars.
          </p>
        </div>

        <form
          className={styles.newsletterForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            className={styles.newsletterInput}
            placeholder="Enter your email address"
            aria-label="Email address"
          />
          <button type="submit" className="btn btn--primary btn--pill">
            Subscribe
          </button>
        </form>
      </section>
  )
}

export default NewsletterSection