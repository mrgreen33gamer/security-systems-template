// WatchPoint Security — Access Control Service Page
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

export default function AccessControlPage() {

  const expectations = [
    { icon: faSearch,       title: "Door & Workflow Review", description: "We map who needs access, when, and which doors matter — then design readers and credentials around that workflow." },
    { icon: faFileContract, title: "Clear Project Pricing", description: "Hardware, wiring, programming, and training priced upfront in a written quote." },
    { icon: faCheckCircle,  title: "Programmed Permissions", description: "User lists, schedules, and audit trails set up so you control access without rekeying locks." },
    { icon: faShieldHalved, title: "Workmanship Guaranteed", description: "Clean installs with documentation and training for your managers." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Minimal Downtime", description: "We schedule installs around your business hours so doors stay usable." },
    { icon: faWrench,       title: "From One Door to Many", description: "Single smart locks up to multi-door commercial systems with audit logs." },
    { icon: faShieldHalved, title: "Licensed & Insured", description: "Commercial-ready credentials for property managers and facilities teams." },
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
    { town: "Hewitt",       benefit: "Full Access Control coverage throughout Hewitt.", badge: "" },
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
    { question: "What types of access control do you install?", answer: "Keypads, fobs, cards, smart locks, and multi-door commercial systems with scheduling and audit logs." },
    { question: "Can I remove access when an employee leaves?", answer: "Yes — digital credentials can be disabled instantly. No rekeying required." },
    { question: "Do you integrate with existing doors?", answer: "Usually yes. We evaluate electric strikes, maglocks, and existing hardware first." },
    { question: "Is this only for large businesses?", answer: "No — small offices and retail benefit hugely from even a single controlled entrance." },
    { question: "How long does installation take?", answer: "A single door can often be done in a day. Multi-door sites are phased by priority." },
    { question: "Do you train managers?", answer: "Yes — we walk through adding users, schedules, and reports before we leave." },
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
        { label: "Access Control" },
      ]} />

      <SectionIntro
        title="Access Control in Waco, TX"
        subtitle="Keypads, fobs, card readers, and smart locks so the right people get in — and everyone else stays out."
      />

      <TrustBar headline="Access control for offices, multi-unit, and commercial spaces across Central Texas" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens on an Access Control Project" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Organizations Choose WatchPoint" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="/services/access-control" title="Where We Install Access Control" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Access Control FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Free Access Control Quote" cityName="Waco" slug="/services/access-control" spot="access-control-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Ready to Ditch Keys for Real Access Control?"
        subline="Same-day appointments across Central Texas. Flat-rate pricing. Workmanship guaranteed."
        primaryText="Call (254) 910-1212"
        primaryLink="tel:+12549101212"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}