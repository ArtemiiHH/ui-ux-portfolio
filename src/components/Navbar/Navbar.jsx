import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const LINKS_LEFT = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
];

const LINKS_RIGHT = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const sentinelRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      <header
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      >
        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.linkGroup}>
            {LINKS_LEFT.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#home" className={styles.avatarLink} aria-label="Back to top">
            <img
              src="https://picsum.photos/seed/mira-voss-avatar/80/80"
              alt=""
              className={styles.avatar}
              width={40}
              height={40}
            />
          </a>

          <ul className={styles.linkGroup}>
            {LINKS_RIGHT.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
