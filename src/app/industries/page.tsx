"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Operation Before We Quote",
      description: "A retail manager, a property manager, and a warehouse lead all work differently. Before we quote, we learn your access process, risk profile, and downtime constraints.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed Alarm Company · Bonded & Insured",
      description: "We're based in Waco, TX with licensed technicians and full insurance — the documentation multi-unit, retail, and logistics projects require.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Cameras, Access & Monitoring — One Vendor",
      description: "Whether your project needs storefront cameras, multi-unit access control, or warehouse monitoring — we handle it under one roof.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,    label: "B2B industries actively served across Central Texas", suffix: "",  duration: 2 },
    { icon: faChartLine, value: 400,  label: "Commercial security projects completed",  suffix: "+", duration: 3 },
    { icon: faClock,     value: 18,   label: "Years serving Central Texas organizations",           suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Our home base — serving retail, PM, and warehouse clients.", badge: "Headquarters" },
    { town: "Temple", benefit: "Commercial and multi-unit properties across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Retail, apartments, and light industrial facilities.", badge: "" },
    { town: "Hewitt", benefit: "Residential portfolios and suburban commercial.", badge: "" },
    { town: "Woodway", benefit: "Professional offices and premium rentals.", badge: "" },
    { town: "McGregor", benefit: "Industrial corridor and logistics sites.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Organization-specific scheduling", us: "✅ Built per project type", others: "❌ One-size-fits-all" },
    { feature: "Central Texas market knowledge", us: "✅ 18+ years in Waco", others: "❌ Out-of-area contractors" },
    { feature: "Licensed commercial crews", us: "✅ Always", others: "❌ Not always" },
    { feature: "Transparent, upfront pricing", us: "✅ Quote before work starts", others: "❌ Billable hours + surprises" },
    { feature: "Workmanship guaranteed", us: "✅ On every install", others: "❌ Limited or none" },
  ];

  const faq = [
    {
      question: "What types of organizations does WatchPoint Security work with?",
      answer: "We have dedicated experience with retail stores, property management companies, and warehouses & logistics — in addition to residential security systems.",
    },
    {
      question: "Do you build a custom proposal for each organization?",
      answer: "Yes. Every proposal is built around access rules, open hours, CapEx cycles, and risk priorities — not a generic residential quote.",
    },
    {
      question: "Do you serve organizations outside of Waco?",
      answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco.",
    },
    {
      question: "Can you handle multi-property or multi-building portfolios?",
      answer: "Yes — we build phased, portfolio-wide pricing and scheduling with a single dedicated point of contact.",
    },
    {
      question: "How do I know which program is right for my organization?",
      answer: "Start by clicking your industry below or contacting us directly. We'll recommend the approach that fits — no pressure.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <SectionIntro
        title="Industries We Serve Across Central Texas"
        subtitle="Security programs built for how your organization actually works — store hours, turnovers, and dock windows, not a generic residential quote."
      />
      <TrustBar headline="Trusted by retail, property managers, and warehouses across Central Texas since 2008" />
      <div className={styles.section}>
        <SectionIndustriesServed
          title="Browse by Industry"
          subtitle="Click your industry to see exactly what we build for organizations like yours."
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Commercial Reality" />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Commercial Coverage Areas" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Industry Program FAQs" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request a Commercial Security Quote" cityName="Waco" slug="/industries" spot="industries-index-form" formVariant={2} />
      </div>
      <CTABanner
        headline="Need Commercial Security That Fits Your Operation?"
        subline="Cameras, access control, and monitoring for retail, property management, and warehouses across Central Texas."
        primaryText="Call (254) 910-1212"
        primaryLink="tel:+12549101212"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
