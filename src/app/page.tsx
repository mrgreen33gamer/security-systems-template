// WatchPoint Security — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faVideo, faBell, faKey, faDoorOpen, faHome, faBroadcastTower,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faClipboardCheck, faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faVideo,
      title: "Security Cameras",
      body: "Indoor and outdoor HD cameras with night vision, remote viewing, and clear playback. Designed and installed for full coverage of homes and businesses.",
      link: "/services/security-cameras",
    },
    {
      icon: faBell,
      title: "Burglar Alarms",
      body: "Door/window sensors, motion detection, sirens, and keypad systems that deter break-ins and alert you — and optional monitoring — in real time.",
      link: "/services/burglar-alarms",
    },
    {
      icon: faKey,
      title: "Access Control",
      body: "Keypads, fobs, card readers, and smart locks so the right people get in and everyone else stays out — for offices, multi-unit, and commercial spaces.",
      link: "/services/access-control",
    },
    {
      icon: faDoorOpen,
      title: "Video Doorbells",
      body: "See and speak with visitors from your phone. Professional install with chime setup, Wi-Fi optimization, and app walkthrough.",
      link: "/services/video-doorbell",
    },
    {
      icon: faHome,
      title: "Smart Home Security",
      body: "Integrate cameras, alarms, locks, and sensors into one app-controlled system. Automation rules that fit how your household actually lives.",
      link: "/services/smart-home-security",
    },
    {
      icon: faBroadcastTower,
      title: "Monitoring Plans",
      body: "Optional 24/7 professional monitoring with rapid dispatch pathways. Flexible plans — no long-term lock-in required.",
      link: "/services/monitoring-plans",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 6500, label: "Security systems installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 18,   label: "Years protecting Central Texas homes & businesses", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price before we pull wire or mount a camera. No hourly billing, no surprise add-ons mid-job.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed Alarm Company",
      description: "Every tech is licensed, bonded, and insured. No unlicensed freelancers installing systems that matter to your safety.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2008",
      description: "We're not a national call-center brand. WatchPoint Security was founded in Waco by Lena Ortiz. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "On-Site Security Assessment",
      description: "A licensed tech walks your property, maps coverage gaps, and explains options in plain English — not just the most expensive package.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Installed, Tested, Explained",
      description: "Clean install, full system test, app setup, and training. 24/7 monitoring options available. Workmanship guaranteed.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Site Assessment",
      description: "We design for real coverage — not maximum camera count. You see the plan and pricing before we install anything.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Install",
      description: "Neat cable runs, patched drywall where needed, and a tidy job site. Your home or business left better than we found it.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work begins. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Quality Gear & Training",
      description: "Reliable cameras, sensors, and panels from trusted brands — fully tested with a walkthrough so your family knows the system.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available techs in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",      badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and businesses.",               badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                  badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",      badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",           badge: "" },
  ];

  const faq = [
    {
      question: "How much does a security system cost in Waco?",
      answer: "Most residential camera packages start around $500–$2,500 installed depending on camera count and type. Alarm systems and access control vary by size of property. We always provide a flat-rate written quote before any work begins.",
    },
    {
      question: "Do you offer same-day or emergency service?",
      answer: "Yes — same-day service is available for many installs and repairs, 7 days a week including evenings. Call us at (254) 910-1212 anytime.",
    },
    {
      question: "How quickly can you start my project?",
      answer: "Most residential installs are scheduled within a few days. Larger commercial access-control and multi-camera projects may take 1–2 weeks depending on equipment lead time.",
    },
    {
      question: "What security services do you offer?",
      answer: "Security cameras, burglar alarms, access control, video doorbells, smart home security integration, and monitoring plans.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes — WatchPoint Security is a licensed alarm company, bonded and insured. Credentials available on request.",
    },
    {
      question: "Do you offer monitoring and a warranty?",
      answer: "Yes — optional 24/7 professional monitoring plans plus workmanship guaranteed on every install we complete.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>

      <WelcomePage />

      <TrustBar
        headline="Waco's trusted security systems company — licensed, insured, and warrantied on every job"
      />

      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Security Solutions for Home & Business"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes WatchPoint Security Different"
        />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Request Service or a Free Quote"
          cityName="Waco"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Need Cameras, Alarms, or Access Control? We're Ready."
        subline="Same-day appointments across Waco, Hewitt, Woodway, Temple, and all of Central Texas. Flat-rate pricing. 24/7 monitoring options · Workmanship guaranteed."
        primaryText="Call (254) 910-1212"
        primaryLink="tel:+12549101212"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath=""
          title="Serving All of Central Texas"
        />
      </div>

      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Service Call, Every Time"
          expectations={expectations}
        />
      </div>

      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Security Questions — Answered Straight"
        />
      </div>

      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>

    </main>
  );
}
