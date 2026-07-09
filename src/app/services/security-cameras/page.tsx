// WatchPoint Security — Security Cameras Service Page
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

export default function SecurityCamerasPage() {

  const expectations = [
    { icon: faSearch,       title: "Coverage Mapping", description: "We walk your property, map entry points and blind spots, and recommend the right camera count — not the maximum." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Mount Anything", description: "You get a written price before any work starts. It doesn't change when the install takes longer than expected." },
    { icon: faCheckCircle,  title: "Clean Install & App Training", description: "Neat cable runs, weather-rated mounts, NVR or cloud setup, and a full walkthrough so your family can use the system." },
    { icon: faShieldHalved, title: "Workmanship Guaranteed", description: "Every install we complete is backed by our workmanship guarantee. If our work fails, we make it right." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Same-Day Appointments", description: "We answer 7 days a week. Many residential camera installs can be scheduled within a day or two." },
    { icon: faWrench,       title: "Wired & Wireless Options", description: "PoE wired systems for reliability, wireless where it fits — we recommend based on your property, not a sales quota." },
    { icon: faShieldHalved, title: "Licensed Alarm Company", description: "Every tech is licensed. You're never dealing with an unlicensed subcontractor on our jobs." },
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
    { town: "Hewitt",       benefit: "Full Security Cameras coverage throughout Hewitt.", badge: "" },
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
    { question: "How much do security cameras cost in Waco?", answer: "Most residential packages range from about $500–$2,500 installed depending on camera count, resolution, and recording type. We quote flat-rate before starting." },
    { question: "Wired or wireless — which is better?", answer: "PoE wired systems are the most reliable for permanent installs. Wireless works well for rentals and hard-to-wire spots. We'll recommend based on your home." },
    { question: "Can I view cameras from my phone?", answer: "Yes — every system we install includes remote viewing setup and a hands-on app walkthrough." },
    { question: "Do you install commercial cameras?", answer: "Yes — retail, warehouses, offices, and multi-unit properties. Call to discuss coverage and recording retention." },
    { question: "How many cameras do I need?", answer: "Most homes need 3–6 cameras for solid perimeter coverage. We'll map entry points with you — no upsell pressure." },
    { question: "Is monitoring required?", answer: "No. Cameras work standalone. Optional 24/7 monitoring is available if you want professional response." },
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
        { label: "Security Cameras" },
      ]} />

      <SectionIntro
        title="Security Cameras in Waco, TX"
        subtitle="HD indoor and outdoor cameras with night vision, remote viewing, and clear playback — designed for full property coverage."
      />

      <TrustBar headline="6,500+ Central Texas homes and businesses trust WatchPoint Security for camera systems" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Security Cameras" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls WatchPoint for Cameras" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="/services/security-cameras" title="Where We Install Security Cameras" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Security Cameras FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Free Security Cameras Quote" cityName="Waco" slug="/services/security-cameras" spot="security-cameras-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Ready for Clear, Reliable Camera Coverage?"
        subline="Same-day appointments across Central Texas. Flat-rate pricing. Workmanship guaranteed."
        primaryText="Call (254) 910-1212"
        primaryLink="tel:+12549101212"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}