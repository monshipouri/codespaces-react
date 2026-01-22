import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

function About() {
  return (
    <div className="page-container">
      <Navbar />
      <main>
        <section className="about-hero">
          <div className="container">
            <h1>About Us</h1>
            <p className="about-subtitle">Passionate about creating exceptional digital experiences</p>
          </div>
        </section>

        <section className="about-content">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <h2>Our Story</h2>
                <p>
                  We are a team of dedicated professionals committed to delivering 
                  innovative solutions that drive business growth. With years of 
                  experience in web development, design, and digital strategy, we 
                  transform ideas into reality.
                </p>
                <p>
                  Our approach combines cutting-edge technology with creative thinking 
                  to build products that not only look great but also perform exceptionally. 
                  We believe in the power of collaboration and work closely with our 
                  clients to understand their vision and goals.
                </p>
              </div>
              <div className="about-image">
                <div className="image-placeholder">
                  <span className="placeholder-icon">🎯</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="values">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>We constantly push boundaries and explore new technologies to deliver cutting-edge solutions</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>We believe in working together with our clients as partners to achieve shared success</p>
              </div>
              <div className="value-card">
                <div className="value-icon">⭐</div>
                <h3>Excellence</h3>
                <p>We strive for perfection in every project, delivering quality that exceeds expectations</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h3>Growth</h3>
                <p>Continuous learning and improvement are at the core of everything we do</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team">
          <div className="container">
            <h2 className="section-title">Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">👨‍💼</div>
                <h3>John Doe</h3>
                <p className="member-role">Lead Developer</p>
                <p>10+ years of experience in full-stack development</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👩‍💻</div>
                <h3>Jane Smith</h3>
                <p className="member-role">UX/UI Designer</p>
                <p>Expert in creating beautiful and intuitive interfaces</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👨‍🎨</div>
                <h3>Mike Johnson</h3>
                <p className="member-role">Creative Director</p>
                <p>Visionary designer with a passion for innovation</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
