import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Section from './Section';

const photos = [
  { src: 'C.jpg',    title: 'Spiritual Foundation' },
  { src: 'A.jpeg',   title: 'Family & Roots' },
  { src: 'B.jpeg',   title: 'Source of Energy' },
];

const LifeLineSection = () => {
  const [active, setActive] = useState(null); // null | photo object

  const open  = (photo) => setActive(photo);
  const close = () => setActive(null);

  return (
    <Section id="lifeline" title="Life Line">

      {/* ── Cards Row ── */}
      <div
        className="lifeline-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2.5rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="glass-card hover-glow"
            style={{
              padding: '1.2rem',
              borderRadius: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              cursor: 'zoom-in',
            }}
            /* Desktop: open on hover, close on mouse-leave */
            onMouseEnter={() => open(photo)}
            onMouseLeave={() => close()}
            /* Mobile: toggle on tap */
            onTouchStart={(e) => {
              e.preventDefault();
              active?.src === photo.src ? close() : open(photo);
            }}
          >
            <div
              style={{
                borderRadius: '1.5rem',
                overflow: 'hidden',
                aspectRatio: '3/4',
                background: 'rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={`/gallery/${photo.src}`}
                alt={photo.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  borderRadius: '1rem',
                  display: 'block',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              />
            </div>
            <h4
              style={{
                textAlign: 'center',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
              }}
            >
              {photo.title}
            </h4>
          </motion.div>
        ))}
      </div>

      {/* ── Fullscreen Lightbox ── */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="lifeline-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            onMouseLeave={close}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(0,0,0,0.93)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'zoom-out',
            }}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => { e.stopPropagation(); close(); }}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: '3rem',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white',
              }}
              whileHover={{ background: 'rgba(255,255,255,0.25)' }}
            >
              <X size={22} />
            </motion.button>

            {/* Photo */}
            <motion.img
              key={active.src}
              src={`/gallery/${active.src}`}
              alt={active.title}
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              exit={{ scale: 0.82,    opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '1.5rem',
                boxShadow: '0 0 80px rgba(99,102,241,0.4)',
              }}
            />

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.15 }}
              style={{
                color: 'white',
                fontSize: '1.4rem',
                fontWeight: 700,
                marginTop: '1.5rem',
                letterSpacing: '0.05em',
                textShadow: '0 0 20px rgba(99,102,241,0.8)',
              }}
            >
              {active.title}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default LifeLineSection;
