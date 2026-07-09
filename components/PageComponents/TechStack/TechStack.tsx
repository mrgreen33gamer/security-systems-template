'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Brands & Equipment We Install',
    items: [
      { name: 'Hikvision / Hikvision Pro', type: 'brand', icon: '📷' },
      { name: 'Dahua',                     type: 'brand', icon: '📷' },
      { name: 'Hanwha',                    type: 'brand', icon: '📷' },
      { name: 'Ring',                      type: 'brand', icon: '🔔' },
      { name: 'Google Nest',               type: 'brand', icon: '🔔' },
      { name: 'Honeywell / Resideo',       type: 'brand', icon: '🛡️' },
      { name: 'DSC / Qolsys',              type: 'brand', icon: '🛡️' },
      { name: 'Yale / Schlage / Allegion', type: 'brand', icon: '🔑' },
    ],
  },
  {
    label: 'Certifications & Licenses',
    items: [
      { name: 'Licensed Alarm Company', type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured',       type: 'cert', icon: '✓' },
      { name: 'Workmanship Guaranteed', type: 'cert', icon: '✓' },
      { name: '24/7 Monitoring Options', type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Security Cameras',      type: 'tool', icon: '📷' },
      { name: 'Burglar Alarms',        type: 'tool', icon: '🚨' },
      { name: 'Access Control',        type: 'tool', icon: '🔑' },
      { name: 'Video Doorbells',       type: 'tool', icon: '🚪' },
      { name: 'Smart Home Security',   type: 'tool', icon: '🏠' },
      { name: 'Monitoring Plans',      type: 'tool', icon: '📡' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Licensed Work, Quality Equipment',
  subtitle = 'We install and service major security brands — licensed crews, no shortcuts on coverage or materials.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Brands and certifications">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: gi * 0.08, duration: 0.45 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.chips}>
                {group.items.map((item) => (
                  <span key={item.name} className={styles.chip}>
                    <span className={styles.chipIcon} aria-hidden="true">{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
