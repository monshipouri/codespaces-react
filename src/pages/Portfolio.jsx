import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform with payment integration and inventory management',
      icon: '🛒',
      color: '#667eea'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure and intuitive banking application with real-time transactions',
      icon: '💳',
      color: '#f093fb'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Real-time analytics dashboard with interactive charts and reports',
      icon: '📊',
      color: '#4facfe'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      category: 'Web Application',
      description: 'Next-generation social networking platform with AI-powered features',
      icon: '🌐',
      color: '#43e97b'
    },
    {
      id: 5,
      title: 'Healthcare System',
      category: 'Enterprise Solution',
      description: 'Comprehensive healthcare management system for hospitals',
      icon: '🏥',
      color: '#fa709a'
    },
    {
      id: 6,
      title: 'Learning Management',
      category: 'Education Tech',
      description: 'Interactive learning platform with video courses and assessments',
      icon: '📚',
      color: '#30cfd0'
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <main>
        <section className="portfolio-hero">
          <div className="container">
            <h1>Our Portfolio</h1>
            <p className="portfolio-subtitle">Showcasing our best work and successful projects</p>
          </div>
        </section>

        <section className="portfolio-content">
          <div className="container">
            <div className="portfolio-grid">
              {projects.map(project => (
                <div key={project.id} className="portfolio-card">
                  <div className="portfolio-card-header" style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}>
                    <span className="portfolio-icon">{project.icon}</span>
                  </div>
                  <div className="portfolio-card-body">
                    <span className="portfolio-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button className="view-project-btn">View Details →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
