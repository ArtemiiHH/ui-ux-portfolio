import { Navigate, Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import FooterCTA from "../../components/FooterCTA/FooterCTA.jsx";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import { getProjectBySlug } from "../../data/projects.js";
import styles from "./ProjectDetail.module.css";

function GalleryImage({ src, alt, delay }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "isVisible" : ""} ${styles.galleryItem}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

function ContentSection({ heading, paragraphs, list, delay }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section
      ref={ref}
      className={`reveal ${isVisible ? "isVisible" : ""} ${styles.contentSection}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <h2 className={styles.contentHeading}>{heading}</h2>
      {paragraphs?.map((paragraph, index) => (
        <p key={index} className={styles.contentParagraph}>
          {paragraph}
        </p>
      ))}
      {list && (
        <ul className={styles.contentList}>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { page } = project;

  return (
    <>
      <Navbar />
      <main>
        <header className={styles.header}>
          <div className={styles.inner}>
            <Link to="/#work" className={styles.backLink}>
              <ArrowLeft size={16} strokeWidth={2} />
              Back to Work
            </Link>

            <span className={styles.eyebrow}>{page.eyebrow}</span>
            <h1 className={styles.title}>{page.title}</h1>
            <p className={styles.subtitle}>{page.subtitle}</p>

            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>{page.role}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>{page.timeline}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Tools</span>
                <span className={styles.metaValue}>{page.tools}</span>
              </div>
            </div>
          </div>
        </header>

        <section className={styles.gallerySection}>
          <div className={styles.inner}>
            <div
              className={
                page.gallery.length === 1
                  ? styles.gallerySingle
                  : styles.galleryGrid
              }
            >
              {page.gallery.map((image, index) => (
                <GalleryImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  delay={index * 80}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contentWrap}>
          <div className={styles.contentInner}>
            {page.sections.map((section, index) => (
              <ContentSection key={section.heading} {...section} delay={index * 60} />
            ))}

            <ul className={styles.tags}>
              {page.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <FooterCTA />
    </>
  );
}
