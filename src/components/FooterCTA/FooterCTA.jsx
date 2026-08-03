import { Linkedin, Youtube, Instagram } from "lucide-react";
import styles from "./FooterCTA.module.css";

function ThreadsIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2c-4.5 0-7 2.7-7 7.2 0 3.9 2 6 5 6.6 2 .4 2.7 1.1 2.7 2.1 0 1.3-1.2 2.1-2.9 2.1-1.9 0-3.1-.9-3.4-2.4" />
      <path d="M9.5 11c1.5-.6 3.4-.6 4.8.3 1.6 1 2.2 2.8 1.5 4.6-.8 2.1-3 3.1-5.3 2.9" />
    </svg>
  );
}

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "Threads", href: "https://threads.net", Icon: ThreadsIcon },
];

export default function FooterCTA() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <img
          src="https://picsum.photos/seed/mira-voss-avatar/80/80"
          alt=""
          className={styles.avatar}
          width={56}
          height={56}
        />

        <h2 className={styles.heading}>
          <span className={styles.line}>Hey, thanks for stopping by.</span>
          <span className={styles.line}>Let's build something good.</span>
        </h2>

        <p className={styles.paragraph}>
          I take on a small number of projects at a time. If this sounds
          like a fit, book a short call and we'll figure out the rest.
        </p>

        <a href="mailto:hello@miravoss.design" className={styles.ctaButton}>
          Book a Call
        </a>

        <ul className={styles.socials}>
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={styles.socialLink}
              >
                <Icon size={22} strokeWidth={1.75} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
