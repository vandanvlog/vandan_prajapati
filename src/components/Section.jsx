import { motion } from 'framer-motion';

const Section = ({ children, title, id, className = "" }) => {
  return (
    <section id={id} className={`section ${className}`} style={{ padding: '8rem 0' }}>
      <div className="container">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 40, letterSpacing: '0.2em' }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: '0.01em' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="section-title gradient-text"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
