// WatchPoint Security — Services Index
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro         from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar             from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs          from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline      from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics        from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials         from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection     from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ                  from "#/PageComponents/FAQ/FAQ";
import CTABanner            from "#/PageComponents/CTABanner/CTABanner";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faVideo, faBell, faKey, faDoorOpen, faHome, faBroadcastTower,
  faTrophy, faChartLine, faClock, faShieldHalved, faUsers, faClipboardCheck,
  faHeadset, faSearch, faFileContract, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faVideo,         title: "Security Cameras",     body: "Indoor and outdoor HD cameras with night vision, remote viewing, and clear playback — designed for full property coverage.", link: "/services/security-cameras" },
    { icon: faBell,          title: "Burglar Alarms",       body: "Door/window sensors, motion detection, sirens, and keypads that deter break-ins and alert you in real time.", link: "/services/burglar-alarms" },
    { icon: faKey,           title: "Access Control",       body: "Keypads, fobs, card readers, and smart locks for offices, multi-unit properties, and commercial spaces.", link: "/services/access-control" },
    { icon: faDoorOpen,      title: "Video Doorbells",      body: "See and speak with visitors from your phone — professional install with chime setup and app walkthrough.", link: "/services/video-doorbell" },
    { icon: faHome,   title: "Smart Home Security",  body: "Integrate cameras, alarms, locks, and sensors into one app-controlled system tailored to your household.", link: "/services/smart-home-security" },
    { icon: faBroadcastTower, title: "Monitoring Plans",     body: "Optional 24/7 professional monitoring with flexible plans — no long-term lock-in required.", link: "/services/monitoring-plans" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "Firm price before we pull wire or mount a camera. No hourly billing, no surprise add-ons mid-job." },
    { icon: faShieldHalved,   title: "Licensed Alarm Company",  description: "Every tech is licensed, bonded, and insured. No unlicensed freelancers on your property." },
    { icon: faUsers,          title: "Locally Owned Since 2008", description: "Founded in Waco by Lena Ortiz. Every decision is made locally — not by a national call center." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot.", icon: faHeadset },
    { number: 2, title: "On-Site Assessment", description: "A licensed tech walks the property and explains options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. Zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Installed & Explained", description: "Clean install, full system test, app training, workmanship guaranteed.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 6500, label: "Security systems installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",        suffix: "%", duration: 2 },
    { icon: faClock,     value: 18,   label: "Years of local security systems experience", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "How much does a security system cost in Waco?", answer: "Residential camera packages often start around $500–$2,500 installed depending on camera count and type. Alarm and access control vary by property size. We always provide a flat-rate written quote before any work begins." },
    { question: "Do you work with existing equipment?", answer: "Often yes — we can integrate or upgrade existing cameras and panels when it makes sense. We'll tell you honestly if a full replacement is smarter." },
    { question: "What does a monitoring plan include?", answer: "Optional 24/7 professional monitoring with alarm response pathways. Flexible month-to-month options available — no multi-year lock-in required." },
    { question: "Do you offer same-day service?", answer: "Yes — same-day service is available for many installs and repairs, 7 days a week including evenings. Call (254) 910-1212 anytime." },
    { question: "Are you licensed and insured?", answer: "Yes — WatchPoint Security is a licensed alarm company, bonded and insured." },
    { question: "Do you offer a warranty?", answer: "Yes — workmanship guaranteed on every install, with optional 24/7 monitoring plans." },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="Security System Services for Waco & Central Texas"
        subtitle="Cameras, alarms, access control, video doorbells, smart home security, and monitoring — done right, priced upfront, backed by workmanship guaranteed."
      />

      <TrustBar headline="6,500+ Central Texas installs by WatchPoint Security" />

      <div className={styles.section}>
        <ServiceCardComponent heading="All Our Services" cards={services} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose WatchPoint" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Security Service FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/services" spot="services-index-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need Security Service Today?"
        subline="Same-day appointments available. Flat-rate pricing. 24/7 monitoring options · Workmanship guaranteed."
        primaryText="Call (254) 910-1212"
        primaryLink="tel:+12549101212"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
