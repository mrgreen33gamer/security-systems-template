// WatchPoint Security — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faBolt,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2008",
      description: "WatchPoint Security was founded in Waco by Lena Ortiz, a Waco native and security systems specialist with 18+ years in the trade. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust in Your Home",
      description: "Every technician on our team is background-checked, licensed, and bonded & insured. We treat every home and business we enter with the same respect we'd want for our own families.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a 16-camera system when four cameras cover the property. We won't push monitoring contracts you don't need. Our reputation is built on straight talk.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 6500, label: "Security systems installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",           suffix: "%", duration: 2 },
    { icon: faClock,     value: 18,   label: "Years serving Central Texas families", suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot that fits your schedule.", icon: faClipboardCheck },
    { number: 2, title: "Assess Honestly", description: "A licensed tech walks your property and explains options in plain English — not just the most expensive package.", icon: faShieldHalved },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. You decide — zero pressure to proceed.", icon: faBolt },
    { number: 4, title: "Installed & Warrantied", description: "Quality gear, clean workmanship, 24/7 monitoring options · workmanship guaranteed.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About WatchPoint Security"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2008. Cameras · Alarms · Access Control · Smart Home — honest work at fair prices for the families and businesses we've called neighbors for 18 years."
      />

      <TrustBar headline="6,500+ Central Texas installs — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="18 Years, By the Numbers" metrics={metrics} cityName="Waco" />
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
        headline="Ready to Protect What Matters?"
        subline="Same-day appointments across Waco and Central Texas. Flat-rate pricing. Licensed alarm company · Bonded & insured."
        primaryText="Call (254) 910-1212"
        primaryLink="tel:+12549101212"
        secondaryText="Free Estimate"
        secondaryLink="/contact"
      />

    </main>
  );
}
