// WatchPoint Security — Monitoring Plans Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faVideo, faBell, faKey, faDoorOpen, faHome, faBroadcastTower,
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function MonitoringPlansPage() {

  const expectations = [
    { icon: faSearch,       title: "System Readiness Check", description: "We verify sensors, cameras, and connectivity so monitoring actually works when it matters." },
    { icon: faFileContract, title: "Clear Plan Pricing", description: "Month-to-month and flexible options explained upfront — no hidden multi-year traps." },
    { icon: faCheckCircle,  title: "Contacts & Protocols", description: "Emergency contacts, call lists, and response preferences configured for your household or business." },
    { icon: faShieldHalved, title: "Tested End-to-End", description: "We test signals and response pathways so you know the system is live." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "24/7 Professional Response", description: "When an alarm triggers, trained operators follow your protocol." },
    { icon: faWrench,       title: "Works With Our Installs", description: "Best paired with WatchPoint cameras and alarm systems for seamless support." },
    { icon: faShieldHalved, title: "No Forced Contracts", description: "Flexible plans. We earn your business every month — not with a 36-month lock-in." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Contact us by phone, text, or online. We'll schedule you in — usually same-day during business hours.", icon: faHeadset },
    { number: 2, title: "Site Assessment", description: "On time, in uniform. We map coverage needs and explain options clearly.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "We show you the exact price before any work begins. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Install & Train", description: "Installed with quality gear, fully tested, app walkthrough, workmanship guaranteed.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 6500, label: "Security systems installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate", suffix: "%", duration: 2 },
    { icon: faClock,     value: 18,   label: "Years serving Waco-area homes & businesses", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest dispatch, most available techs.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full Monitoring Plans coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Same-day security service for Woodway neighborhoods.", badge: "" },
    { town: "Bellmead",     benefit: "On our regular route — quick turnaround guaranteed.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-day availability.", badge: "" },
    { town: "Temple",       benefit: "Full security service coverage for Bell County homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts", us: "✅ Always written", others: "❌ Hourly + estimate only" },
    { feature: "Licensed alarm company technicians", us: "✅ All techs", others: "❌ Not always" },
    { feature: "Workmanship guaranteed", us: "✅ Every job", others: "❌ Rare or none" },
    { feature: "Same-day service available", us: "✅ 7 days/week", others: "❌ M–F business hours" },
    { feature: "No multi-year monitoring lock-in required", us: "✅ Flexible plans", others: "❌ Often forced contracts" },
  ];

  const faq = [
    { question: "Is monitoring required with a WatchPoint install?", answer: "No. Many customers self-monitor. Professional monitoring is optional." },
    { question: "Do I need a multi-year contract?", answer: "No. We offer flexible plans without long-term lock-in requirements." },
    { question: "What happens when an alarm goes off?", answer: "Operators follow your contact list and dispatch protocols based on the signal type and your preferences." },
    { question: "Can I monitor cameras and alarms together?", answer: "Yes — packages can include both intrusion and video-related alerting depending on equipment." },
    { question: "Does monitoring work during power outages?", answer: "Battery backups and cellular backup options improve resilience. We'll recommend what fits your risk level." },
    { question: "Can businesses get monitoring too?", answer: "Yes — retail, warehouses, offices, and multi-site properties." },
  ];

  const crossServices = [
    { icon: faVideo, title: "Security Cameras", body: "HD indoor/outdoor cameras with night vision and remote viewing.", link: "/services/security-cameras" },
    { icon: faBell, title: "Burglar Alarms", body: "Sensors, panels, and sirens that deter and detect.", link: "/services/burglar-alarms" },
    { icon: faKey, title: "Access Control", body: "Keypads, fobs, and smart locks for the right people only.", link: "/services/access-control" },
    { icon: faBroadcastTower, title: "Monitoring Plans", body: "Optional 24/7 professional monitoring — flexible plans.", link: "/services/monitoring-plans" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Monitoring Plans" },
      ]} />

      <SectionIntro
        title="Monitoring Plans in Waco, TX"
        subtitle="Optional 24/7 professional monitoring with rapid dispatch pathways. Flexible plans — no long-term lock-in required."
      />

      <TrustBar headline="Flexible monitoring options for homes and businesses across Central Texas" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Add Monitoring" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why WatchPoint Monitoring Feels Different" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="/services/monitoring-plans" title="Where We Install Monitoring Plans" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Monitoring Plans FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Free Monitoring Plans Quote" cityName="Waco" slug="/services/monitoring-plans" spot="monitoring-plans-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Want 24/7 Eyes on Your System?"
        subline="Same-day appointments across Central Texas. Flat-rate pricing. Workmanship guaranteed."
        primaryText="Call (254) 910-1212"
        primaryLink="tel:+12549101212"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}