// Security Systems Hero — Floor Plan with Sensors, Keypad, Camera Arcs
// Trade-specific blueprint (not generic house). Draw-in + setTimeout safety.
'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function BlueprintSchematic({ label }: { label: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = Array.from(svg.querySelectorAll<SVGGeometryElement>('[data-draw]'));

    paths.forEach((el, i) => {
      const length = typeof el.getTotalLength === 'function' ? el.getTotalLength() : 400;
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      el.style.animation = `blueprintDraw 1.55s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
      el.style.animationDelay = `${0.28 + i * 0.055}s`;
      window.setTimeout(() => {
        el.style.strokeDashoffset = '0';
      }, 2200 + i * 40);
    });
  }, []);

  return (
    <div className={styles.schematicWrap} role="img" aria-label={label}>
      <div className={styles.schematicGrid} aria-hidden="true" />
      <div className={styles.rBadge} aria-hidden="true">
        ZONE MAP
      </div>
      <svg
        ref={svgRef}
        className={styles.schematic}
        viewBox="0 0 360 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Building outer walls */}
        <rect data-draw x="36" y="44" width="288" height="232" className={styles.traceMain} />

        {/* Interior rooms */}
        <line data-draw x1="36" y1="140" x2="200" y2="140" className={styles.traceDim} />
        <line data-draw x1="200" y1="44" x2="200" y2="276" className={styles.traceDim} />
        <line data-draw x1="200" y1="180" x2="324" y2="180" className={styles.traceDim} />
        <line data-draw x1="120" y1="140" x2="120" y2="276" className={styles.traceDim} />

        {/* Front door swing */}
        <path data-draw d="M160 276 L160 258 Q175 242 190 258 L190 276" className={styles.traceAccent} />
        <line data-draw x1="160" y1="276" x2="190" y2="276" className={styles.traceAccent} />

        {/* Window openings */}
        <line data-draw x1="60" y1="44" x2="100" y2="44" className={styles.traceAccent} />
        <line data-draw x1="230" y1="44" x2="280" y2="44" className={styles.traceAccent} />
        <line data-draw x1="324" y1="80" x2="324" y2="120" className={styles.traceAccent} />
        <line data-draw x1="70" y1="276" x2="105" y2="276" className={styles.traceDim} />

        {/* Camera FOV arcs — corners */}
        <path data-draw d="M52 58 Q90 70 95 105" className={styles.traceAccent} />
        <path data-draw d="M52 58 Q75 55 95 58" className={styles.traceDim} />
        <path data-draw d="M308 58 Q270 70 265 105" className={styles.traceAccent} />
        <path data-draw d="M308 58 Q285 55 265 58" className={styles.traceDim} />
        <path data-draw d="M308 260 Q270 248 265 215" className={styles.traceAccent} />
        <path data-draw d="M52 260 Q90 248 95 215" className={styles.traceDim} />

        {/* Door contact / reed sensors on openings */}
        <rect data-draw x="152" y="268" width="8" height="6" className={styles.traceAccent} />
        <rect data-draw x="190" y="268" width="8" height="6" className={styles.traceAccent} />

        {/* Motion sensors (PIR) diamonds */}
        <path data-draw d="M80 100 L90 110 L80 120 L70 110 Z" className={styles.traceAccent} />
        <path data-draw d="M250 100 L260 110 L250 120 L240 110 Z" className={styles.traceAccent} />
        <path data-draw d="M155 200 L165 210 L155 220 L145 210 Z" className={styles.traceDim} />

        {/* Keypad / panel at entry hall */}
        <rect data-draw x="205" y="230" width="36" height="28" rx="2" className={styles.traceMain} />
        <line data-draw x1="212" y1="238" x2="234" y2="238" className={styles.traceDim} />
        <line data-draw x1="212" y1="244" x2="234" y2="244" className={styles.traceDim} />
        <line data-draw x1="212" y1="250" x2="224" y2="250" className={styles.traceAccent} />
        <circle data-draw cx="230" cy="250" r="2.5" className={styles.traceAccent} />

        {/* Wired bus path from panel to devices */}
        <polyline
          data-draw
          points="223,230 223,200 160,200 160,140 80,140 80,110"
          className={styles.traceDim}
        />
        <polyline
          data-draw
          points="223,230 280,230 280,110 250,110"
          className={styles.traceDim}
        />
        <polyline data-draw points="223,258 223,268 175,268" className={styles.traceDim} />

        {/* Siren / strobe on exterior */}
        <circle data-draw cx="300" cy="160" r="12" className={styles.traceAccent} />
        <path data-draw d="M300 148 L300 172 M288 160 L312 160" className={styles.traceAccent} />

        {/* Window glass break sensors */}
        <path data-draw d="M72 50 L88 50 L88 56 L72 56 Z" className={styles.traceDim} />
        <path data-draw d="M242 50 L268 50 L268 56 L242 56 Z" className={styles.traceDim} />

        {/* Nodes — cameras, sensors, panel */}
        <circle cx="52" cy="58" r="4" className={styles.nodeAccent} />
        <circle cx="308" cy="58" r="4" className={styles.nodeAccent} />
        <circle cx="308" cy="260" r="3.5" className={styles.nodeAccent} />
        <circle cx="52" cy="260" r="3.5" className={styles.node} />
        <circle cx="80" cy="110" r="3" className={styles.node} />
        <circle cx="250" cy="110" r="3" className={styles.node} />
        <circle cx="155" cy="210" r="3" className={styles.node} />
        <circle cx="223" cy="244" r="3.5" className={styles.nodeAccent} />
        <circle cx="300" cy="160" r="3" className={styles.nodeAccent} />
        <circle cx="175" cy="271" r="2.5" className={styles.node} />
      </svg>
      <div className={styles.schematicCaption} aria-hidden="true">
        <span className={styles.captionDot} />
        SECURITY PLAN
      </div>
      <div className={styles.layerLegend} aria-hidden="true">
        <span>
          <i className={styles.legBatt} /> Camera FOV
        </span>
        <span>
          <i className={styles.legFoam} /> Motion / contact
        </span>
        <span>
          <i className={styles.legAir} /> Keypad / bus
        </span>
      </div>
    </div>
  );
}

export default function WelcomePage() {
  const badgeText = "Waco's Most Trusted Security Pros — Since 2008";
  const headlineLines = ['Watch Over.', 'Respond Fast.'];
  const headlineAccent = 'WatchPoint Security.';
  const subheadline =
    'Cameras · Alarms · Access Control · Smart Home. Flat-rate pricing. Same-day service. 24/7 monitoring options · Workmanship guaranteed. Serving Waco and Central Texas with licensed technicians.';
  const primaryCta = { label: 'Call (254) 910-1212', href: 'tel:+12549101212' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = [
    'Same-Day Service',
    'No Contracts',
    'Licensed Alarm Co.',
    '18+ Yrs Local',
    'Workmanship Guaranteed',
  ];
  const schematicLabel = 'WatchPoint schematic';

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          <BlueprintSchematic label={schematicLabel} />
        </motion.div>
      </div>
    </section>
  );
}
