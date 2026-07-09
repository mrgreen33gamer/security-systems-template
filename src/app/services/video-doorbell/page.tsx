// WatchPoint Security — Video Doorbells Service Page
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

export default function VideoDoorbellPage() {

  const expectations = [
    { icon: faSearch,       title: "Placement & Wi-Fi Check", description: "We verify power, chime type, and signal strength so your doorbell actually stays online." },
    { icon: faFileContract, title: "Flat-Rate Install Price", description: "Hardware options and labor priced before we start — no surprise add-ons." },
    { icon: faCheckCircle,  title: "Chime & App Setup", description: "Indoor chime working, notifications configured, and a full app walkthrough for the household." },
    { icon: faShieldHalved, title: "Workmanship Guaranteed", description: "If our install work fails, we come back and make it right." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Often Same-Week Install", description: "Most residential video doorbell installs are quick once we confirm power and network." },
    { icon: faWrench,       title: "Wired & Battery Options", description: "We match the doorbell to your wiring, chime, and Wi-Fi — not just the latest gadget." },
    { icon: faShieldHalved, title: "Part of a Bigger System", description: "Pair with cameras and alarms for full package protection when you're ready." },
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
    { town: "Hewitt",       benefit: "Full Video Doorbells coverage throughout Hewitt.", badge: "" },
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
    { question: "How much does a video doorbell install cost?", answer: "Most installs range from roughly $150–$450 plus hardware depending on wiring and chime type. We quote flat-rate before starting." },
    { question: "What if my Wi-Fi is weak at the porch?", answer: "We check signal strength and recommend mesh nodes or placement fixes so the device stays reliable." },
    { question: "Do you install Ring, Nest, and other brands?", answer: "Yes — we install major consumer and pro brands and configure the app for your household." },
    { question: "Can it replace my mechanical chime?", answer: "Often yes. We'll confirm compatibility and set up digital or mechanical chime options." },
    { question: "Is a subscription required?", answer: "Some brands require cloud subscriptions for video history. We'll explain options clearly before you buy." },
    { question: "Can it integrate with my cameras?", answer: "Often yes within the same ecosystem. Ask us about pairing with a full camera system." },
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
        { label: "Video Doorbells" },
      ]} />

      <SectionIntro
        title="Video Doorbells in Waco, TX"
        subtitle="See and speak with visitors from your phone — professional install with chime setup, Wi-Fi optimization, and app walkthrough."
      />

      <TrustBar headline="Professional video doorbell installs across Waco, Hewitt, Woodway & beyond" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Get a Video Doorbell" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Call WatchPoint for Doorbells" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="/services/video-doorbell" title="Where We Install Video Doorbells" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Video Doorbells FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Free Video Doorbells Quote" cityName="Waco" slug="/services/video-doorbell" spot="video-doorbell-form" formVariant={2} />
      </div>

      <CTABanner
        headline="See Who's at the Door — From Anywhere?"
        subline="Same-day appointments across Central Texas. Flat-rate pricing. Workmanship guaranteed."
        primaryText="Call (254) 910-1212"
        primaryLink="tel:+12549101212"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}