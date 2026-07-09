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
  faStore, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faVideo, faBell, faKey, faBroadcastTower,
} from "@fortawesome/free-solid-svg-icons";

export default function RetailIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Blind spots after closing", consequence: "Parking lots, stock rooms, and rear doors go unwatched when staff leave — inviting after-hours theft." },
    { icon: faFileInvoiceDollar, problem: "Shrink without usable video", consequence: "Low-resolution or incomplete camera coverage makes it hard to document incidents or train staff." },
    { icon: faUsers, problem: "Too many people with keys", consequence: "Manager turnover means keys walk out the door — access control solves rekeying forever." },
    { icon: faStore, problem: "Front entrance chaos", consequence: "Without a doorbell/camera at the entrance, staff can't verify deliveries or late visitors safely." },
    { icon: faClipboardList, problem: "No single vendor for cameras + alarms", consequence: "Coordinating separate camera and alarm contractors wastes management time." },
    { icon: faHandshake, problem: "Installers who don't understand retail hours", consequence: "Daytime installs that block customers create friction your store doesn't need." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "After-Hours Friendly Installs", description: "We schedule around open hours so your floor stays shoppable." },
    { icon: faFileInvoiceDollar, title: "Clear CapEx Pricing", description: "Camera counts, recording, and access control priced in writing before work starts." },
    { icon: faUsers, title: "Staff-Ready Systems", description: "Simple arm/disarm, clear zones, and training so your team actually uses the system." },
  ];

  const processSteps = [
    { number: 1, title: "Store Walkthrough", description: "We map entrances, stock rooms, POS areas, and exterior risk points.", icon: faSearch },
    { number: 2, title: "Retail Security Plan", description: "Cameras, alarms, and access options matched to your risk and budget.", icon: faCalendarAlt },
    { number: 3, title: "Install Off-Peak", description: "Work scheduled to minimize customer disruption.", icon: faRocket },
    { number: 4, title: "Train & Monitor", description: "Staff training plus optional 24/7 monitoring.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 120, label: "Retail locations protected", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Client satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years serving Central Texas businesses", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Retail-aware install scheduling", us: "✅ After-hours options", others: "❌ Daytime only" },
    { feature: "Cameras + alarms + access", us: "✅ One vendor", others: "❌ Multiple contractors" },
    { feature: "Flat-rate project pricing", us: "✅ Written before start", others: "❌ Open-ended T&M" },
    { feature: "Staff training included", us: "✅ Always", others: "❌ Optional / rushed" },
    { feature: "Licensed alarm company", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Do you work with multi-location retail chains?", answer: "Yes — we can standardize camera and access setups across multiple Central Texas locations." },
    { question: "Can installs happen after closing?", answer: "Yes. We regularly schedule after-hours work so the sales floor stays open." },
    { question: "Do you provide insurance certificates?", answer: "Yes — COIs for landlords and corporate risk teams are available on request." },
    { question: "Can you cover parking lots and loading areas?", answer: "Yes — exterior cameras and lighting recommendations are part of a full retail package." },
    { question: "What areas do you cover for retail work?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and surrounding Central Texas." },
  ];

  const services = [
    { icon: faVideo, title: "Security Cameras", body: "Sales floor, stock room, and exterior coverage.", link: "/services/security-cameras" },
    { icon: faBell, title: "Burglar Alarms", body: "After-hours intrusion detection that staff can arm easily.", link: "/services/burglar-alarms" },
    { icon: faKey, title: "Access Control", body: "Manager-only stock rooms and after-hours access logs.", link: "/services/access-control" },
    { icon: faBroadcastTower, title: "Monitoring Plans", body: "Optional 24/7 professional monitoring.", link: "/services/monitoring-plans" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for retail security projects.", badge: "Home Base" },
    { town: "Temple", benefit: "Strip centers and freestanding retail.", badge: "" },
    { town: "Killeen", benefit: "High-traffic retail near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Suburban retail and plazas.", badge: "" },
    { town: "Woodway", benefit: "Boutique and professional storefronts.", badge: "" },
    { town: "Bellmead", benefit: "Corridor retail and service shops.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Retail Stores" }]} />
      <SectionIntro title="Security Systems for Retail Stores" subtitle="Cameras, alarms, access control, and monitoring built around open hours, shrink risk, and staff simplicity — across Central Texas." />
      <TrustBar headline="Retail owners trust WatchPoint Security for after-hours installs and clear coverage" />
      <div className={styles.section}><IndustryPainPoints industry="retail" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Retail Operators" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Retail Stores Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/retail" title="Retail Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Retail Security FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Retail Security Quote" cityName="Waco" slug="industries/retail" spot="retail-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need Cameras That Actually Cover Shrink Risk?" subline="COIs available. After-hours installs. Flat-rate project pricing." primaryText="Call (254) 910-1212" primaryLink="tel:+12549101212" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
