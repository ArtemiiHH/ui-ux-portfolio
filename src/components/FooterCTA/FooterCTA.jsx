import styles from "./FooterCTA.module.css";
import avatarImage from "../../public/profile-avatar.png";

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export default function FooterCTA() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Open to new opportunities or side projects, feel free to drop me
            a line{" "}
            <a href="mailto:hey@artemii.design" className={styles.emailLink}>
              hey@artemii.design
            </a>
          </h2>
          <img
            src={avatarImage}
            alt="Artemii Barashkov"
            className={styles.avatar}
            width={72}
            height={72}
          />
        </div>

        <div className={styles.linksRow}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={styles.viewCv}
          >
            View CV
          </a>

          <div className={styles.socialsBlock}>
            <span className={styles.socialsLabel}>I'm also on:</span>
            <ul className={styles.socials}>
              {SOCIALS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialLink}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.copyright}>
          © {year} Artemii Barashkov — Based in Lisbon, Portugal
        </p>
      </div>
    </footer>
  );
}
