import { motion } from 'framer-motion';

export const FeatureCard = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card"
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}
    >
      {Icon && <Icon size={32} className="gradient-text" style={{ stroke: 'var(--accent-primary)' }} />}
      <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{description}</p>
    </motion.div>
  );
};

export const TimelineItem = ({ title, company, date, description, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{ 
        paddingLeft: '2rem', 
        borderLeft: '2px solid var(--glass-border)', 
        paddingBottom: '3rem',
        position: 'relative'
      }}
    >
      <div style={{ 
        position: 'absolute', 
        left: '-7px', 
        top: '0', 
        width: '12px', 
        height: '12px', 
        borderRadius: '50%', 
        background: 'var(--accent-primary)',
        boxShadow: '0 0 10px var(--accent-primary)'
      }} />
      <span style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9rem' }}>{date}</span>
      <h3 style={{ fontSize: '1.4rem', margin: '0.5rem 0' }}>{title}</h3>
      <p style={{ fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{company}</p>
      <div style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{description}</div>
    </motion.div>
  );
};
