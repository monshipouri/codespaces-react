import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices',
      features: ['React & Vue.js', 'Node.js Backend', 'API Development', 'Database Design']
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      features: ['React Native', 'Flutter', 'Swift & Kotlin', 'App Store Publishing']
    },
    {
      id: 3,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that enhance user experience',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      id: 4,
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services',
      features: ['AWS & Azure', 'CI/CD Pipelines', 'DevOps', 'Monitoring']
    },
    {
      id: 5,
      icon: '🔍',
      title: 'SEO & Marketing',
      description: 'Boost your online presence and reach your target audience',
      features: ['SEO Optimization', 'Content Strategy', 'Analytics', 'Social Media']
    },
    {
      id: 6,
      icon: '🛡️',
      title: 'Security & Testing',
      description: 'Comprehensive security audits and quality assurance',
      features: ['Security Audits', 'Penetration Testing', 'QA Testing', 'Code Review']
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <main>
        <section className="services-hero">
          <div className="container">
            <h1>Our Services</h1>
            <p className="services-subtitle">Comprehensive solutions to help your business thrive in the digital age</p>
          </div>
        </section>

        <section className="services-content">
          <div className="container">
            <div className="services-grid">
              {services.map(service => (
                <div key={service.id} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="container">
            <h2 className="section-title">Our Process</h2>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">01</div>
                <h3>Discovery</h3>
                <p>We learn about your business, goals, and target audience</p>
              </div>
              <div className="process-step">
                <div className="step-number">02</div>
                <h3>Planning</h3>
                <p>Creating a detailed roadmap and project timeline</p>
              </div>
              <div className="process-step">
                <div className="step-number">03</div>
                <h3>Development</h3>
                <p>Building your solution with cutting-edge technology</p>
              </div>
              <div className="process-step">
                <div className="step-number">04</div>
                <h3>Launch</h3>
                <p>Deploying and monitoring for a successful launch</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help transform your business</p>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Services;
