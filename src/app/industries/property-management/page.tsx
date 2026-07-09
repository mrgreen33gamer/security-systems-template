"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faVideo, faBell, faKey, faBroadcastTower,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagementIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "No portfolio camera/access standard", consequence: "Each building has different equipment and passwords — support tickets explode." },
    { icon: faFileInvoiceDollar, problem: "Security costs hit CapEx with no plan", consequence: "Reactive installs after incidents land as emergency invoices instead of budgeted upgrades." },
    { icon: faUsers, problem: "Keys and fobs out of control", consequence: "Turnover means rekeying costs and unknown copies floating around." },
    { icon: faBuilding, problem: "Common areas go unwatched", consequence: "Laundry, mail, parking, and package rooms become liability hotspots." },
    { icon: faClipboardList, problem: "No single vendor for multi-property work", consequence: "Coordinating separate quotes and crews for each building wastes management time." },
    { icon: faHandshake, problem: "Vendors don't understand PM workflows", consequence: "Access notices, owner approvals, and make-ready timelines all move on their own schedule." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Portfolio-Wide Security Planning", description: "Phased schedules across units and buildings — common areas, entrances, and CapEx upgrades." },
    { icon: faFileInvoiceDollar, title: "Locked-In, Multi-Unit Pricing", description: "Volume-friendly rates and clear scopes so ownership sees predictable numbers." },
    { icon: faUsers, title: "Resident-Friendly Scheduling", description: "We coordinate access windows so your office isn't fielding angry calls." },
  ];

  const processSteps = [
    { number: 1, title: "Portfolio Assessment", description: "We walk buildings, document risk points, and prioritize common areas.", icon: faSearch },
    { number: 2, title: "Phased Plan & Quote", description: "Multi-property pricing and a schedule synced to CapEx cycles.", icon: faCalendarAlt },
    { number: 3, title: "Execute by Building", description: "Crews move property-by-property with consistent equipment standards.", icon: faRocket },
    { number: 4, title: "Standing Support", description: "Optional monitoring and maintenance so issues stay on a plan.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 90, label: "Multi-unit properties protected", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 20, label: "PM companies on standing service", suffix: "+", duration: 2 },
    { icon: faClock, value: 18, label: "Years serving Central Texas properties", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Multi-unit security planning", us: "✅ Full portfolio plan", others: "❌ One-off calls only" },
    { feature: "Locked multi-unit pricing", us: "✅ Volume-friendly rates", others: "❌ Re-quoted every ticket" },
    { feature: "Single point of contact", us: "✅ Dedicated project lead", others: "❌ Different tech each time" },
    { feature: "Resident communication support", us: "✅ Built into scheduling", others: "❌ Minimal notice" },
    { feature: "Licensed & insured", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Do you work with property managers on multi-unit portfolios?", answer: "Yes — apartments, duplexes, HOA common areas, and scattered-site residential portfolios are core B2B work for us." },
    { question: "Can you standardize cameras and access across a complex?", answer: "Yes. Consistent equipment, credentialing, and documentation are part of our multi-unit approach." },
    { question: "Do you provide insurance certificates?", answer: "Yes — COIs for property managers and ownership groups are available on request." },
    { question: "Can you prioritize make-ready security issues?", answer: "Yes. We schedule around your turnover calendar and can often turn units same-week." },
    { question: "What areas do you cover for PM work?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and surrounding Central Texas." },
  ];

  const services = [
    { icon: faVideo, title: "Security Cameras", body: "Common areas, parking, and package rooms.", link: "/services/security-cameras" },
    { icon: faKey, title: "Access Control", body: "Fobs and keypads for building entrances.", link: "/services/access-control" },
    { icon: faBell, title: "Burglar Alarms", body: "Office and amenity intrusion protection.", link: "/services/burglar-alarms" },
    { icon: faBroadcastTower, title: "Monitoring Plans", body: "Optional 24/7 professional monitoring.", link: "/services/monitoring-plans" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for multi-unit and scattered-site PM work.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular multi-family coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Apartments and rental portfolios near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Suburban rental portfolios.", badge: "" },
    { town: "Woodway", benefit: "Premium rentals and townhomes.", badge: "" },
    { town: "Bellmead", benefit: "Scattered-site residential portfolios.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Property Management" }]} />
      <SectionIntro title="Security Systems for Property Management" subtitle="Portfolio-wide cameras, access control, alarms, and monitoring for multi-unit and scattered-site properties across Central Texas." />
      <TrustBar headline="Property managers trust WatchPoint Security for portfolios and standing service" />
      <div className={styles.section}><IndustryPainPoints industry="property management" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Property Managers" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Property Managers Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/property-management" title="PM Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Property Management FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a PM Portfolio Quote" cityName="Waco" slug="industries/property-management" spot="pm-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Security Vendor Who Understands Portfolios?" subline="COIs available. Volume pricing. Single point of contact." primaryText="Call (254) 910-1212" primaryLink="tel:+12549101212" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
