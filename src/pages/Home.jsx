import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="page-container">
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">Innovation</span>
            </h1>
            <p className="hero-subtitle">
              Crafting digital experiences that inspire and transform businesses
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn btn-primary">View Work</Link>
              <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card">
              <span className="card-icon">💼</span>
              <h3>Professional</h3>
            </div>
            <div className="floating-card">
              <span className="card-icon">⚡</span>
              <h3>Fast</h3>
            </div>
            <div className="floating-card">
              <span className="card-icon">🎨</span>
              <h3>Creative</h3>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Fast Performance</h3>
                <p>Lightning-fast load times and optimized for the best user experience</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Precision Design</h3>
                <p>Pixel-perfect designs that capture your brand's essence</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Secure & Reliable</h3>
                <p>Built with security best practices and robust architecture</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>Responsive</h3>
                <p>Perfect experience across all devices and screen sizes</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's work together to bring your vision to life</p>
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
