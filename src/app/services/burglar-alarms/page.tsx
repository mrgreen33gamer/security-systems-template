// WatchPoint Security — Burglar Alarms Service Page
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

export default function BurglarAlarmsPage() {

  const expectations = [
    { icon: faSearch,       title: "Zone-by-Zone Assessment", description: "We identify every entry point and high-risk area, then design a sensor layout that actually matches how your home is used." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "Equipment + install priced before we open a box. No surprise trip charges mid-job." },
    { icon: faCheckCircle,  title: "Programmed & Tested", description: "Panel programming, user codes, zone labels, and a full walk-test before we leave." },
    { icon: faShieldHalved, title: "Optional 24/7 Monitoring", description: "Professional monitoring available on flexible plans — never required as a multi-year lock-in." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Fast Response Scheduling", description: "Same-week installs for most residential alarm systems across the Waco metro." },
    { icon: faWrench,       title: "New Systems & Upgrades", description: "We replace aging panels, fix false alarms, and expand sensor coverage without forcing a full rip-and-replace." },
    { icon: faShieldHalved, title: "Licensed Alarm Company", description: "Proper licensing, bonding, and insurance — the credentials that matter for alarm work in Texas." },
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
    { town: "Hewitt",       benefit: "Full Burglar Alarms coverage throughout Hewitt.", badge: "" },
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
    { question: "How much does a burglar alarm cost in Waco?", answer: "Most residential systems range from roughly $400–$1,800 installed depending on sensor count and panel features. Monitoring is optional and priced separately." },
    { question: "Do I need a monitoring contract?", answer: "No. You can self-monitor via app alerts, or add optional 24/7 professional monitoring on flexible plans." },
    { question: "Can you fix false alarms?", answer: "Yes — common causes include bad sensors, pets, and poor placement. We'll diagnose and correct them." },
    { question: "Do you work with existing panels?", answer: "Often yes. If your panel is obsolete or unreliable, we'll quote an honest upgrade path." },
    { question: "Are outdoor sensors available?", answer: "Yes — perimeter and outdoor motion options for larger properties when they fit the design." },
    { question: "Is WatchPoint a licensed alarm company?", answer: "Yes — licensed, bonded, and insured. Credentials available on request." },
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
        { label: "Burglar Alarms" },
      ]} />

      <SectionIntro
        title="Burglar Alarms in Waco, TX"
        subtitle="Door/window sensors, motion detection, keypads, and sirens that deter break-ins and alert you — with optional 24/7 monitoring."
      />

      <TrustBar headline="Licensed alarm company protecting Central Texas homes since 2008" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for a Burglar Alarm" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Trusts WatchPoint for Alarms" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="/services/burglar-alarms" title="Where We Install Burglar Alarms" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Burglar Alarms FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Free Burglar Alarms Quote" cityName="Waco" slug="/services/burglar-alarms" spot="burglar-alarms-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Ready for Real Intrusion Protection?"
        subline="Same-day appointments across Central Texas. Flat-rate pricing. Workmanship guaranteed."
        primaryText="Call (254) 910-1212"
        primaryLink="tel:+12549101212"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}