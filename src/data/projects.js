import tpgmsMockup from "../public/tpgms-mockup.png";

export const projects = [
  {
    slug: "tpgms-website-redesign",
    card: {
      title: "TPGMS — Website Redesign",
      subtitle:
        "Rebuilding a legacy forex marketing platform's web presence from the ground up.",
      tags: ["UI Design", "Web Design", "Fintech"],
      image: tpgmsMockup,
      alt: "TPGMS website redesign mockup",
      featured: true,
    },
    page: {
      eyebrow: "UI Design",
      title: "TPGMS — Website Redesign",
      subtitle:
        "A full visual and structural redesign of a legacy forex-industry platform offering SEO, SMM, marketing, and web analytics solutions.",
      role: "UI Designer, working within a project team",
      timeline: "6 weeks",
      tools: "Figma, Framer, Notion",
      gallery: [
        {
          src: "https://picsum.photos/seed/tpgms-home/900/650",
          alt: "TPGMS homepage — mockup coming soon",
        },
        {
          src: "https://picsum.photos/seed/tpgms-services/900/650",
          alt: "TPGMS services page — mockup coming soon",
        },
        {
          src: "https://picsum.photos/seed/tpgms-analytics/900/650",
          alt: "TPGMS analytics dashboard — mockup coming soon",
        },
        {
          src: "https://picsum.photos/seed/tpgms-mobile/900/650",
          alt: "TPGMS responsive mobile views — mockup coming soon",
        },
      ],
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "TPGMS is an established company in the forex space, offering SEO, social media marketing, broader marketing solutions, and web analytics to trading businesses. The existing site no longer matched the credibility of the services being sold — it looked dated, buried its offering behind unclear navigation, and gave visitors little reason to trust or explore further. I worked within the team to redesign the UI from the ground up, giving the platform a visual identity that reflects a modern, data-driven company.",
          ],
        },
        {
          heading: "The Challenge",
          list: [
            "An outdated visual language that undersold a company built on modern marketing and analytics services",
            "A dense, unclear service offering (SEO, SMM, marketing, web analytics) with no visual hierarchy to guide visitors",
            "Weak, inconsistent calls-to-action and unclear next steps for prospective clients",
            "No real responsive experience — the layout broke down on smaller screens",
          ],
        },
        {
          heading: "Process",
          list: [
            "Audited the existing site and benchmarked competitor platforms in the fintech/marketing-services space",
            "Reorganized the site's information architecture so services were grouped and scannable rather than buried in text",
            "Designed a new visual system — typography, color palette, and imagery direction — built to feel current and trustworthy",
            "Built a reusable component library (navigation, cards, buttons, forms) to keep the interface consistent as the site grows",
            "Designed fully responsive layouts across desktop, tablet, and mobile",
            "Prototyped key flows in Figma and ran an internal design review before handoff to development",
          ],
        },
        {
          heading: "The Solution",
          list: [
            "A modern, credible visual identity suited to a data- and marketing-driven company",
            "Clear service architecture, so visitors can immediately understand what TPGMS offers",
            "Stronger visual hierarchy directing attention toward key CTAs like contact and get a quote",
            "A consistent, scalable design system for future pages and campaigns",
          ],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "The result is a fully responsive design system now used across the marketing site, with a clear before-and-after shift in visual credibility and usability.",
          ],
        },
      ],
      tags: [
        "UI Design",
        "Web Design",
        "Redesign",
        "Fintech",
        "B2B",
        "Design System",
        "Responsive",
      ],
    },
  },
  {
    slug: "xm-trading-usability-testing",
    card: {
      title: "XM Trading Platform — Usability Testing",
      subtitle:
        "Watching real traders use the platform to uncover what helps them — and what gets in their way.",
      tags: ["UX Research", "Case Study", "Usability Testing", "Fintech"],
      image: tpgmsMockup,
      alt: "XM trading platform usability testing case study cover",
      featured: false,
    },
    page: {
      eyebrow: "UX Research / Case Study",
      title: "Usability Testing on XM's Trading Platform",
      subtitle:
        "A structured usability study identifying friction points and enablers in one of XM's core trading platforms — translated into UI recommendations that were implemented.",
      role: "UI/UX Designer, part of the research team",
      timeline: "4 weeks",
      tools: "Lookback, Figma, Notion",
      gallery: [
        {
          src: "https://picsum.photos/seed/xm-case-study/1400/800",
          alt: "XM trading platform usability testing session overview",
        },
      ],
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "As part of a small cross-functional team, I helped run structured usability testing on one of XM's main trading platforms. Rather than relying on assumptions about how traders use the product, we observed real users completing real tasks — watching where they hesitated, backtracked, or gave up, and where the interface actually worked in their favor. The findings were turned into edited video clips and written reports, and used to shape a set of UI recommendations that were carried forward into the product.",
          ],
        },
        {
          heading: "Objective",
          paragraphs: [
            "Identify where users struggled (friction points) and where the platform supported them well (enablers) within core flows — order placement, account funding, and platform navigation — in order to prioritize the improvements with the biggest impact on the trading experience.",
          ],
        },
        {
          heading: "Methodology",
          list: [
            "Recruited/selected users representative of the platform's real trader base",
            "Ran moderated usability sessions, observing users complete a defined set of core tasks",
            "Logged friction points and enablers in real time during each session",
            "Recorded sessions and edited them into short, focused clips highlighting key moments for stakeholders who couldn't attend live",
            "Synthesized session notes into structured written reports",
          ],
        },
        {
          heading: "Key Findings",
          list: [
            "Friction point: Several users struggled to locate the order confirmation button, often mistaking a secondary action for the primary one.",
            "Friction point: The deposit confirmation step wasn't fully trusted — a few participants repeated the action because there was no clear success state.",
            "Enabler: Users consistently praised the live price chart — it was the one part of the flow no one hesitated on.",
          ],
        },
        {
          heading: "Recommendations",
          paragraphs: [
            "Findings were translated into a prioritized set of UI recommendations for the product and design team, focused on the friction points with the highest impact on task completion and user confidence. Recommended restyling the primary CTA for stronger visual weight, and proposed adding an explicit success state to the deposit confirmation flow.",
          ],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "The recommendations were adopted into the platform's next release cycle, with the confirmation flow updates rolling out first — reducing confusion around whether an action had gone through.",
          ],
        },
        {
          heading: "Deliverables",
          list: [
            "Edited video clips of key usability moments, used in stakeholder reviews",
            "Written UX research reports documenting friction points and enablers",
            "A set of prioritized design recommendations",
          ],
        },
      ],
      tags: [
        "UX Research",
        "Usability Testing",
        "Case Study",
        "User Behavior",
        "Fintech",
        "Trading Platform",
        "UI Recommendations",
      ],
    },
  },
  {
    slug: "new-project-coming-soon",
    card: {
      title: "New Project — Coming Soon",
      subtitle: "A new project currently in progress.",
      tags: ["Coming Soon"],
      image: tpgmsMockup,
      alt: "Placeholder mockup for an upcoming project",
      featured: false,
    },
    page: {
      eyebrow: "Coming Soon",
      title: "New Project — Coming Soon",
      subtitle:
        "A new project currently in progress. The full case study will be published once the work wraps.",
      role: "TBD",
      timeline: "In progress",
      tools: "TBD",
      gallery: [
        {
          src: "https://picsum.photos/seed/new-project-1/900/650",
          alt: "Placeholder mockup — coming soon",
        },
        {
          src: "https://picsum.photos/seed/new-project-2/900/650",
          alt: "Placeholder mockup — coming soon",
        },
      ],
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "Details for this project are still being finalized. Check back soon for the full case study.",
          ],
        },
        {
          heading: "The Challenge",
          paragraphs: ["To be added once the project wraps."],
        },
        {
          heading: "Process",
          paragraphs: ["To be added once the project wraps."],
        },
        {
          heading: "The Solution",
          paragraphs: ["To be added once the project wraps."],
        },
        {
          heading: "Outcome",
          paragraphs: ["To be added once the project wraps."],
        },
      ],
      tags: ["Coming Soon"],
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
