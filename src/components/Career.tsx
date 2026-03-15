import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* College */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Electronics & Instrumentation Engineering</h4>
                <h5>Shri G.S. Institute of Technology & Science, Indore</h5>
              </div>
              <h3>2023 – Present</h3>
            </div>
            <p>
              Currently pursuing B.Tech while building full-stack and AI-powered
              applications. Developed multiple production-ready web platforms,
              solved 450+ DSA problems, and continuously improving system
              design, algorithms, and scalable web architecture skills.
            </p>
          </div>

          {/* Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Labmantix — Remote</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked in an Agile development team building scalable full-stack
              features using React.js, Node.js, Express, and MongoDB.
              Implemented secure authentication systems, real-time communication
              features, and contributed to improving development workflows and
              application performance.
            </p>
          </div>

          {/* Freelance Project */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full Stack & AI Developer</h4>
                <h5>Warsi Homeopathic Clinic</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>
            <p>
              Developed a full-stack medical platform featuring online
              appointment booking, AI-powered medical assistant, medical report
              analysis, and X-ray image analysis using machine learning models.
              Built the system using modern web technologies with an intuitive
              interface for patients and doctors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;