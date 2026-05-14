import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

const images = [
  // Professional Photos First (Suits & Graduation)
  "1000086737.jpg.jpeg", "1000086739.jpg.jpeg",
  "IMG20260209145935.jpg.jpeg", "IMG20260209145937.jpg.jpeg",
  "IMG20260209150024.jpg.jpeg", "IMG20260209151055.jpg.jpeg",
  "IMG20260209151102.jpg.jpeg", "IMG20260209151118.jpg.jpeg",
  "IMG20260209151142.jpg.jpeg", "IMG20260209151147.jpg.jpeg",
  "IMG20260209151152.jpg.jpeg", "IMG20260209151207.jpg.jpeg",
  "IMG20260422180355.jpg.jpeg",

  // Other Photos
  "1000053352.jpg.jpeg",
  "204db43c-048d-42c2-8b8a-749933dcce40-1_all_9642.jpg.jpeg",
  "204db43c-048d-42c2-8b8a-749933dcce40-1_all_9643.jpg.jpeg",
  "IMG20240507155832.jpg.jpeg", "IMG20240630113622.jpg.jpeg",
  "IMG20240630113624.jpg.jpeg", "IMG20241123174441.jpg.jpeg",
  "IMG20241123174446.jpg.jpeg", "IMG20241123184126.jpg.jpeg",
  "IMG20241123184127.jpg.jpeg", "IMG20241123184128.jpg.jpeg",
  "IMG20250427074631.jpg.jpeg", "IMG20250427074634.jpg.jpeg",
  "IMG20250906173307.jpg.jpeg", "IMG20250906173516.jpg.jpeg",
  "IMG20250906173600.jpg.jpeg", "IMG20250906173618.jpg.jpeg",
  "IMG_20250420_210535.jpg.jpeg",
  "IMG_20250809_140151.jpg.jpeg", "IMG_20250810_093542.jpg.jpeg",
  "IMG_20250810_093642.jpg.jpeg", "IMG_20251123_183443.jpg.jpeg"
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem',
        padding: '1rem'
      }}>
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
            whileHover={{ y: -10 }}
            className="img-hover-zoom glass-card"
            style={{
              cursor: 'pointer',
              aspectRatio: '4/5',
              padding: 0,
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={`/gallery/${img}`}
              alt={`Gallery item ${index}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6))',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              padding: '1.5rem',
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }} className="overlay">
              <Maximize2 color="white" size={24} />
            </div>
            <style>{`
              .img-hover-zoom:hover .overlay { opacity: 1; }
            `}</style>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.95)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: 'white',
                padding: '1rem',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.2)' }}
            >
              <X size={32} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={`/gallery/${selectedImg}`}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                borderRadius: '1rem',
                boxShadow: '0 0 50px rgba(0,0,0,0.5)'
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
