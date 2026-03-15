import { useState, useCallback, SetStateAction } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "StayFinder",
    category: "AI Rental Marketplace",
    description:
      "Full-stack rental marketplace with AI recommendations, ML price prediction, booking system and Razorpay payments.",
    tools: "Next.js • Node.js • MongoDB • Razorpay • Machine Learning",
    image: "/images/stayFinder.png",
    live: "https://stayfinder-ruddy-nine.vercel.app/",
  },
  {
    title: "Interview Prep AI",
    category: "AI Mock Interview Platform",
    description:
      "AI powered interview preparation platform with resume parsing, job role matching and automated evaluation.",
    tools: "Next.js • Node.js • NLP • AI",
    image: "/images/interview.png",
    live: "https://interview-two-psi.vercel.app/",
  },
  {
    title: "Echo",
    category: "AI Support SaaS",
    description:
      "AI customer support system with real-time chat, voice banking integration and RAG based knowledge retrieval.",
    tools: "React • Convex • GenAI • VAPI • RAG",
    image: "/images/echo.png",
    live: "https://echo-web-mauve.vercel.app/",
  },
  {
    title: "Warsi Clinic",
    category: "Healthcare Website",
    description:
      "Modern clinic platform with appointment booking, doctor details and responsive design for patients.",
    tools: "Next.js • Tailwind • Node.js",
    image: "/images/warsi.png",
    live: "https://warsi-homeo-clinic-mroc.vercel.app/",
  },
  {
    title: "TalentSync",
    category: "Freelance Marketplace",
    description:
      "Fiverr-like freelance platform with gig creation, messaging system and secure payments.",
    tools: "Next.js • Node.js • MongoDB • Stripe",
    image: "/images/talentSync.png",
    live: "#",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: SetStateAction<number>) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setCurrentIndex(index);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    },
    [isAnimating]
  );

  const goToPrev = () => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;

    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

    goToSlide(newIndex);
  };

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">

          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
          >
            <MdArrowBack />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">

                    <div className="carousel-info">

                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>

                      <div className="carousel-details">

                        <h4>{project.title}</h4>

                        <p className="carousel-category">
                          {project.category}
                        </p>

                        <p className="carousel-description">
                          {project.description}
                        </p>

                        <div className="carousel-tools">
                          <span className="tools-label">
                            Tech Stack
                          </span>

                          <p>{project.tools}</p>
                        </div>

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-live-btn"
                        >
                          View Live
                        </a>

                      </div>
                    </div>

                    <div className="carousel-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                      />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex
                    ? "carousel-dot-active"
                    : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;