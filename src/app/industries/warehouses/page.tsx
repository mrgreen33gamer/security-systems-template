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
  faWarehouse, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faVideo, faBell, faKey, faBroadcastTower,
} from "@fortawesome/free-solid-svg-icons";

export default function WarehousesIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Dock doors unwatched overnight", consequence: "Trailers, tools, and inventory walk when cameras don't cover docks and yards." },
    { icon: faFileInvoiceDollar, problem: "Loss events without evidence", consequence: "Missing or low-quality video makes claims and investigations harder." },
    { icon: faUsers, problem: "Contractor access chaos", consequence: "Too many shared keys and no audit trail for who entered when." },
    { icon: faWarehouse, problem: "Yard and perimeter blind spots", consequence: "Perimeter fencing alone doesn't document incidents or deter determined theft." },
    { icon: faClipboardList, problem: "Installers who disrupt operations", consequence: "Daytime work in active docks creates safety and throughput issues." },
    { icon: faHandshake, problem: "No monitoring when the site is empty", consequence: "Self-monitoring fails when no one is watching the app at 2 a.m." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Operations-Aware Scheduling", description: "We plan around shift changes, dock windows, and production so work stays safe." },
    { icon: faFileInvoiceDollar, title: "Industrial-Scale Quotes", description: "Multi-camera, multi-door, and monitoring scopes priced clearly for ownership." },
    { icon: faUsers, title: "Access Logs That Hold Up", description: "Fobs and keypads with audit trails for contractors and employees." },
  ];

  const processSteps = [
    { number: 1, title: "Site Survey", description: "Docks, yard, offices, and perimeter mapped for camera and access coverage.", icon: faSearch },
    { number: 2, title: "Security Design", description: "Recording retention, coverage angles, and access zones documented.", icon: faCalendarAlt },
    { number: 3, title: "Phased Install", description: "Work sequenced to keep docks open and crews productive.", icon: faRocket },
    { number: 4, title: "Monitor & Support", description: "Optional 24/7 monitoring and standing service agreements.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 75, label: "Warehouse & logistics sites protected", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Project completion satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years serving Central Texas industry", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Dock & yard coverage design", us: "✅ Industrial focus", others: "❌ Residential kits" },
    { feature: "After-hours / weekend installs", us: "✅ Available", others: "❌ Business hours only" },
    { feature: "Access control + cameras together", us: "✅ One project team", others: "❌ Separate vendors" },
    { feature: "Monitoring options", us: "✅ Flexible 24/7 plans", others: "❌ Forced contracts" },
    { feature: "Licensed & insured commercial work", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Do you install cameras for large warehouse facilities?", answer: "Yes — multi-camera systems covering docks, yards, interiors, and offices with appropriate recording retention." },
    { question: "Can work happen on nights or weekends?", answer: "Yes. We schedule around operations to avoid blocking active docks." },
    { question: "Do you provide insurance certificates?", answer: "Yes — COIs for facilities and risk teams are available on request." },
    { question: "Can contractors get temporary access credentials?", answer: "Yes — time-limited fobs/codes with audit logs are standard on commercial access projects." },
    { question: "What areas do you cover?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and surrounding Central Texas." },
  ];

  const services = [
    { icon: faVideo, title: "Security Cameras", body: "Docks, yards, interiors, and office coverage.", link: "/services/security-cameras" },
    { icon: faKey, title: "Access Control", body: "Employee and contractor credentialing with logs.", link: "/services/access-control" },
    { icon: faBell, title: "Burglar Alarms", body: "After-hours intrusion detection for offices and cages.", link: "/services/burglar-alarms" },
    { icon: faBroadcastTower, title: "Monitoring Plans", body: "24/7 monitoring when the site is empty.", link: "/services/monitoring-plans" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for industrial and logistics security.", badge: "Home Base" },
    { town: "McGregor", benefit: "Industrial corridor and fabrication sites.", badge: "" },
    { town: "Temple", benefit: "Distribution and light industrial facilities.", badge: "" },
    { town: "Killeen", benefit: "Warehouses and contractor yards.", badge: "" },
    { town: "Hewitt", benefit: "Suburban industrial parks.", badge: "" },
    { town: "Bellmead", benefit: "Corridor logistics and storage.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Warehouses & Logistics" }]} />
      <SectionIntro title="Security Systems for Warehouses & Logistics" subtitle="Dock, yard, and facility security — cameras, access control, alarms, and monitoring designed for industrial operations across Central Texas." />
      <TrustBar headline="Warehouses trust WatchPoint Security for coverage that fits real operations" />
      <div className={styles.section}><IndustryPainPoints industry="warehouses" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Logistics & Facilities Teams" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Warehouses Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/warehouses" title="Warehouse Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Warehouse Security FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Warehouse Security Quote" cityName="Waco" slug="industries/warehouses" spot="warehouse-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need Dock & Yard Coverage That Holds Up?" subline="COIs available. Operations-aware scheduling. Flat-rate project pricing." primaryText="Call (254) 910-1212" primaryLink="tel:+12549101212" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
