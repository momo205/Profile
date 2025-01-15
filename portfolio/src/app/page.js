import styles from "./home.module.css";
const experiences = [
  {
    title: "Personaland",
    role: "App Developer",
    summary: "Developed mobile apps to enhance user interaction.",
    description:
      "Led the development of innovative mobile applications focusing on improving user engagement through intuitive UI/UX designs. Utilized React Native extensively to ensure cross-platform compatibility.",
  },
  {
    title: "Department of Design and Construction",
    role: "QA Intern",
    summary: "Performed software testing and QA.",
    description:
      "Engaged in rigorous testing and QA processes for the Civil Service Application Tracker project, ensuring the software met all specified requirements before its deployment.",
  },
];
const projects = [
  {
    title: "Auction Architects",
    role: "Selling used cars",
    description:
      "Developed a full-stack web application using Node.js and Next.js to facilitate real-time car auctions and purchases. This system integrates essential features such as live bidding and car history checks.",
    tools: "Node.js, Next.js, MongoDB",
  },
  {
    title: "Materinaize",
    role: "Maternal Health Monitor using ML",
    description:
      "Created a system to monitor maternal health using machine learning algorithms to analyze health data and provide real-time updates to healthcare providers.",
    tools: "React, Node.js, TensorFlow",
  },
  {
    title: "Thera Cam",
    role: "In-Home Fitness Tool",
    description:
      "Developed an application using Node.js and OpenPose technology to provide real-time exercise feedback, helping users maintain correct form during workouts.",
    tools: "Node.js, OpenPose",
  },
  {
    title: "Fitness AI",
    role: "Personalized fitness tracker",
    description:
      "Implemented a fitness tracking app that uses artificial intelligence to personalize diet and exercise recommendations based on user input.",
    tools: "Node.js, Next.js",
  },
  {
    title: "Green Scan",
    role: "Environmental Protection through waste reduction",
    description:
      "Developed a platform to recommend how to reuse household waste using AI, promoting environmental protection through practical daily actions.",
    tools: "Node.js, Next.js",
  },
  {
    title: "Halal Finder",
    role: "Nearest Restaurant Finder",
    description:
      "Designed an application to locate the nearest halal restaurants, providing directions and details for users seeking halal options.",
    tools: "Java, Google Maps API",
  },
];

export default function Home() {
  return (
    <>
      <div className={styles.fullScreenContainer}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <div className={styles.logo}>
            <h3>MA</h3>
          </div>
          <nav className={styles.navigationBar}>
            <a href="#home" className={styles.navLink}>
              Home
            </a>
            <a href="#about" className={styles.navLink}>
              About Me
            </a>
            <a href="#experience" className={styles.navLink}>
              Experience
            </a>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
          </nav>
        </div>
        <div className={styles.contact}>
          <button className={styles.Homebuttons} style={{ fontSize: "15px" }}>
            Contact Me
          </button>
        </div>
        <div className={styles.homeContainer}>
          <div className={styles.title}>
            <h1>Muhammad Ahmed</h1>
            <h2>Full Stack Software Engineer</h2>
          </div>

          <div className={styles.homeDescription}>
            <h4 style={{ fontWeight: "400" }}>
              Passionate software engineering student with skills in front-end
              and back-end development, driven to create innovative solutions
              that make a positive impact. Currently seeking internships to
              apply my expertise and further grow as a developer.
            </h4>
          </div>
          <div className={styles.Homebuttons}>
            <button href="https://www.linkedin.com"> LinkedIn</button>
            <button href="https://github.com"> Github</button>
            <button>Resume </button>
          </div>
        </div>

        <div className={styles.aboutContainer}>
          <h3>About Me</h3>
        </div>

        <div className={styles.projectsContainer}>
          <h2>Projects</h2>
          <div className={styles.gridContainer}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <p>{project.role}</p>
                  <p>
                    {project.description} | Tools: {project.tools}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.experienceContainer}>
          <h2>Experience</h2>
          <div className={styles.gridContainer}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={styles.experienceCard}
                style={{ backgroundImage: `url(${exp.image})` }}
              >
                <div className={styles.experienceContent}>
                  <h3>{exp.title}</h3>
                  <p>{exp.summary}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
