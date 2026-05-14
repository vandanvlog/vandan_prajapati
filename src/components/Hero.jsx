import { motion, useScroll, useTransform } from 'framer-motion';
import { MousePointer2, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const title = "Enthusiastic in AI and Data";
  const words = title.split(" ");

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const wordVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div ref={containerRef} className="hero-container" style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="bg-mesh" />
      
      {/* Dynamic Background Elements with Parallax */}
      <motion.div 
        style={{ y: y1, opacity }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: -1
        }}
      />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={wordVars}
            className="hero-name"
            style={{ 
              textTransform: 'uppercase', 
              letterSpacing: '0.8rem', 
              color: 'var(--accent-primary)',
              fontWeight: 900,
              fontSize: '2.5rem',
              display: 'block',
              marginBottom: '2.5rem'
            }}
          >
            Vandan Prajapati
          </motion.span>
          
          <h1 style={{ 
            fontSize: 'clamp(3rem, 12vw, 7.5rem)', 
            lineHeight: 0.9,
            fontWeight: 900,
            letterSpacing: '-0.02em',
            marginBottom: '2.5rem'
          }}>
            {words.map((word, i) => (
              <motion.span 
                key={i} 
                variants={wordVars} 
                className={(word === "AI" || word === "Data") ? "gradient-text" : ""}
                style={{ display: 'inline-block', marginRight: '0.3em' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            variants={wordVars}
            style={{ 
              fontSize: '1.6rem', // Bigger text
              color: 'var(--text-secondary)',
              maxWidth: '800px',
              margin: '0 auto 4rem',
              lineHeight: 1.5,
              fontWeight: 500
            }}
          >
            Aspiring Software Engineer with a special interest in AI and Data. Passionate about building intelligent systems and solving complex problems through technology.
          </motion.p>

          <motion.div
            variants={wordVars}
            className="hero-buttons"
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="glass-card" 
              style={{ 
                padding: '1.3rem 3rem', 
                fontSize: '1.2rem', 
                fontWeight: 700,
                cursor: 'pointer',
                background: 'var(--accent-primary)',
                border: 'none',
                color: 'white',
                borderRadius: '100px'
              }}
              onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Gallery
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="glass-card" 
              style={{ 
                padding: '1.3rem 3rem', 
                fontSize: '1.2rem', 
                fontWeight: 700,
                cursor: 'pointer',
                background: 'var(--accent-primary)',
                border: 'none',
                color: 'white',
                borderRadius: '100px'
              }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        style={{ 
          position: 'absolute', 
          bottom: '3rem', 
          left: '50%', 
          transform: 'translateX(-50%)',
          color: 'var(--text-secondary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.8rem',
          letterSpacing: '0.1rem',
          opacity: 0.6
        }}
      >
        <span>SCROLL</span>
        <ChevronDown size={20} />
      </motion.div>
    </div>
  );
};

export default Hero;
