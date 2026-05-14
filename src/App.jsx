import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Database,
  Code2,
  BarChart3,
  GraduationCap,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Zap,
  Globe2,
  Users,
  Presentation,
  Music,
  Plane,
  Heart,
  Trophy,
  UtensilsCrossed,
  MessageCircle,
  Cpu,
  BrainCircuit,
  LineChart,
  FileSearch,
  Server,
  GitBranch,
  Layers,
  Target,
  Lightbulb,
  MessageSquare,
  Clock,
  TrendingUp,
  PieChart,
  Shield,
  Search,
  Workflow
} from 'lucide-react';
import Hero from './components/Hero';
import Section from './components/Section';
import Gallery from './components/Gallery';
import { FeatureCard, TimelineItem } from './components/Cards';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const whatsappLink = "https://wa.me/447917075405";
  const instaLink = "https://www.instagram.com/vandan_prajapati_/";
  const linkedinLink = "https://www.linkedin.com/in/vandanprajapati/";

  return (
    <main>
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
          transformOrigin: '0%',
          zIndex: 1001
        }}
      />

      <Hero />

      {/* About Section */}
      <Section id="about" title="Personal Profile">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="img-hover-zoom glass-card" style={{ padding: 0, borderRadius: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <img
                src="/gallery/1000086737.jpg.jpeg"
                alt="Vandan Prajapati"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 style={{ fontSize: '2.8rem', marginBottom: '2rem', fontWeight: 700 }}>
              Aspiring <span className="gradient-text">Software Engineer</span>
            </h3>
            <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Recently graduated with an MSc in Computer Science and Technology from Ulster University. I have hands-on experience in data cleaning, exploratory data analysis (EDA), feature engineering, data processing, data modelling, and practical use of SQL for querying and extracting insights.
            </p>
            <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Known for strong organisational and communication skills, collaboration in cross-functional teams, and a practical, solution-focused approach to problem-solving.
            </p>
            <div className="about-feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <FeatureCard
                icon={Database}
                title="AI & Data"
                description="Special interest in intelligent systems and analytics."
              />
              <FeatureCard
                icon={Code2}
                title="Software Engineering"
                description="Building robust and scalable applications."
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience" className="bg-secondary">
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem' }}>
          <TimelineItem
            date="April 2024 – Present"
            title="Academy Manager"
            company="Sage Academy, London"
            description={
              <ul style={{ paddingLeft: '1.2rem', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <li>Manage academic operations at Sage Academy.</li>
                <li>Design and deliver professional dental training courses.</li>
                <li>Liaise with dentists and dental professionals for course development.</li>
                <li>Support dentists, hygienists, therapists, and dental nurses in career progression.</li>
                <li>Coordinate course schedules and learner support.</li>
                <li>Promote flexible learning for working dental professionals.</li>
                <li>Ensure high-quality training and a positive student experience.</li>
              </ul>
            }
          />
          <TimelineItem
            date="2015 – Present"
            title="Senior Project Lead (Voluntary)"
            company="BAPS, London"
            description={
              <ul style={{ paddingLeft: '1.2rem', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <li>Led <strong>"Sheru"</strong>, a Broadway-style stage production featuring 500+ performers, achieving <strong>1.5M+ views</strong> on YouTube.</li>
                <li>Managed end-to-end logistics and volunteer coordination across large-scale community events.</li>
                <li>Served as a key member of the <strong>choreography team</strong>, designing and delivering choreography for every major event.</li>
                <li>Led the project at <strong>BAPS London Mandir</strong>, teaching dance routines and coordinating performers for all significant occasions.</li>
                <li>Demonstrated strong leadership, creativity, and community commitment over a decade of voluntary service.</li>
              </ul>
            }
          />
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education">
        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem' }}>
          <TimelineItem
            date="2024 - 2025"
            title="MSc Computer Science and Technology"
            company="Ulster University, London"
            description={
              <ul style={{ paddingLeft: '1.2rem', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <li><strong>First Class Honours</strong></li>
                <li>Focused on Data Science, AI, and Advanced Computing.</li>
                <li>Awarded for academic excellence and practical implementation.</li>
              </ul>
            }
          />
          <TimelineItem
            date="2018 - 2022"
            title="Bachelor in Computer Science & Technology"
            company="Gujarat Technological University"
            description={
              <ul style={{ paddingLeft: '1.2rem', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <li>Darshan College</li>
                <li>Comprehensive study of algorithms, software engineering, and systems.</li>
                <li>Achieved high grades in core technical subjects.</li>
              </ul>
            }
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Professional Skills" className="bg-secondary">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>

          {/* Category: Technical & Engineering */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>⚙️ Technical & Engineering</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              <FeatureCard icon={Code2} title="Python" description="Data pipelines, scripting, automation, and backend logic." />
              <FeatureCard icon={Database} title="SQL & Databases" description="Advanced querying, data modelling, and relational database management." />
              <FeatureCard icon={Server} title="Software Engineering" description="Scalable system design, OOP, and RESTful API development." />
              <FeatureCard icon={GitBranch} title="Version Control (Git)" description="GitHub workflows, branching strategies, and collaborative code management." />
              <FeatureCard icon={Layers} title="React & Web Dev" description="Building responsive, modern UIs with React, Vite, and JavaScript." />
              <FeatureCard icon={Workflow} title="Agile & Scrum" description="Sprint planning, Jira, and iterative delivery in team environments." />
            </div>
          </div>

          {/* Category: Data Science & AI */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-secondary)', marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>🤖 Data Science & AI</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              <FeatureCard icon={Cpu} title="Machine Learning" description="Supervised/unsupervised learning, model evaluation, and hyperparameter tuning." />
              <FeatureCard icon={BrainCircuit} title="Artificial Intelligence" description="Neural networks, deep learning, NLP, and LLM fine-tuning." />
              <FeatureCard icon={BarChart3} title="Exploratory Data Analysis" description="Statistical analysis, hypothesis testing, and insight extraction." />
              <FeatureCard icon={LineChart} title="Data Visualisation" description="Matplotlib, Seaborn, Power BI, Tableau — turning data into stories." />
              <FeatureCard icon={FileSearch} title="Feature Engineering" description="Data cleaning, transformation, encoding, and dimensionality reduction." />
              <FeatureCard icon={PieChart} title="Statistical Modelling" description="Regression, classification, clustering, and forecasting techniques." />
            </div>
          </div>

          {/* Category: Professional & Soft Skills */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#a78bfa', marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>🌟 Professional & Soft Skills</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              <FeatureCard icon={Users} title="Team Leadership" description="Led 500+ volunteer teams, cross-functional collaboration, and mentoring." />
              <FeatureCard icon={MessageSquare} title="Communication" description="Strong written and verbal communication across technical and non-technical audiences." />
              <FeatureCard icon={Lightbulb} title="Problem Solving" description="Analytical, creative, and structured approach to tackling complex challenges." />
              <FeatureCard icon={Target} title="Project Management" description="Delivering on time and within scope — from planning to execution." />
              <FeatureCard icon={Clock} title="Time Management" description="Prioritising tasks effectively under pressure in fast-paced environments." />
              <FeatureCard icon={TrendingUp} title="Continuous Learning" description="Committed to upskilling in emerging technologies and industry best practices." />
            </div>
          </div>

          {/* Category: Tools & Platforms */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#34d399', marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>🛠️ Tools & Platforms</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              <FeatureCard icon={Zap} title="Jupyter & Google Colab" description="Interactive data science notebooks for experimentation and prototyping." />
              <FeatureCard icon={Search} title="Microsoft Power BI" description="Dashboard creation, DAX calculations, and business intelligence reporting." />
              <FeatureCard icon={Shield} title="Microsoft Office 365" description="Excel (advanced), Word, PowerPoint — professional documentation and analysis." />
              <FeatureCard icon={Globe2} title="Multilingual" description="Fluent in English, Hindi, and Gujarati — effective cross-cultural communication." />
            </div>
          </div>

        </div>
      </Section>

      {/* Life Line Section */}
      <Section id="lifeline" title="Life Line">
        <div className="lifeline-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr', 
          gap: '2.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { src: "C.jpg", title: "Spiritual Foundation" },
            { src: "A.jpeg", title: "Family & roots" },
            { src: "B.jpeg", title: "Source of Energy" }
          ].map((item, i) => (
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
                gap: '1rem'
              }}
            >
              <div style={{ 
                borderRadius: '1.5rem', 
                overflow: 'hidden', 
                aspectRatio: '3/4', // Slightly taller for portrait photos
                background: 'rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={`/gallery/${item.src}`} 
                  alt={item.title} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                  }} 
                />
              </div>
              <h4 style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" title="Visual Gallery">
        <Gallery />
      </Section>

      {/* Hobbies Section */}
      <Section id="hobbies" title="Hobbies & Interests" className="bg-secondary">
        <div className="hobbies-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem' }}>
          {[
            { name: 'Cooking', icon: UtensilsCrossed },
            { name: 'Dancing', icon: Music },
            { name: 'Travelling', icon: Plane },
            { name: 'Outdoor Games', icon: Trophy },
            { name: 'Music', icon: Heart }
          ].map((hobby, i) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card hover-glow"
              style={{ textAlign: 'center', padding: '2rem' }}
            >
              <hobby.icon size={32} style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }} />
              <div style={{ fontWeight: 600 }}>{hobby.name}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card hover-glow"
          style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '5rem 2rem' }}
        >
          <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 800 }}>Let's connect and build the future.</h3>
          <div className="contact-links" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
            <motion.a whileHover={{ scale: 1.1, y: -5 }} href={linkedinLink} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem', fontWeight: 600 }}>
              <div className="glass-card" style={{ padding: '0.8rem' }}><Linkedin size={24} /></div> LinkedIn
            </motion.a>
            <motion.a whileHover={{ scale: 1.1, y: -5 }} href={instaLink} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem', fontWeight: 600 }}>
              <div className="glass-card" style={{ padding: '0.8rem' }}><Instagram size={24} /></div> Instagram
            </motion.a>
            <motion.a whileHover={{ scale: 1.1, y: -5 }} href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem', fontWeight: 600 }}>
              <div className="glass-card" style={{ padding: '0.8rem' }}><MessageCircle size={24} /></div> WhatsApp
            </motion.a>
            <motion.a whileHover={{ scale: 1.1, y: -5 }} href="mailto:vandan@example.com" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem', fontWeight: 600 }}>
              <div className="glass-card" style={{ padding: '0.8rem' }}><Mail size={24} /></div> Email
            </motion.a>
          </div>
        </motion.div>
      </Section>

      <footer style={{ padding: '5rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>&copy; 2024 Vandan Prajapati. Aspiring Software Engineer.</p>
      </footer>
    </main>
  );
}

export default App;
