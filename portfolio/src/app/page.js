import { fontWeight } from "@mui/system";
import styles from "./home.module.css";
const experiences = [
  {
    title: "Personaland",
    role: "App Developer",
    summary: "Developed mobile apps to enhance user interaction.",
    description:
      "Led the development of innovative mobile applications focusing on improving user engagement through intuitive UI/UX designs. Utilized React Native extensively to ensure cross-platform compatibility.",
    tools: ["/images/supa.png", "/images/react.jpeg ", "/images/node.png"],
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
    tools: ["/images/node.png", "/images/next.jpeg", "/images/mongo.png"],
  },
  {
    title: "Materinaize",
    role: "Maternal Health Monitor using ML",
    description:
      "Created a system to monitor maternal health using machine learning algorithms to analyze health data and provide real-time updates to healthcare providers.",
    tools: ["/images/node.png", "/images/next.jpeg", "/images/mongo.png"],
  },
  {
    title: "Thera Cam",
    role: "In-Home Fitness Tool",
    description:
      "Developed an application using Node.js and OpenPose technology to provide real-time exercise feedback, helping users maintain correct form during workouts.",
    tools: ["/images/node.png", "/images/next.jpeg", "/images/mongo.png"],
  },
  {
    title: "Fitness AI",
    role: "Personalized fitness tracker",
    description:
      "Implemented a fitness tracking app that uses artificial intelligence to personalize diet and exercise recommendations based on user input.",
    tools: ["/images/node.png", "/images/next.jpeg", "/images/mongo.png"],
  },
  {
    title: "Green Scan",
    role: "Environmental Protection through waste reduction",
    description:
      "Developed a platform to recommend how to reuse household waste using AI, promoting environmental protection through practical daily actions.",
    tools: ["/images/node.png", " /images/next.jpeg", "/images/mongo.png"],
  },
  {
    title: "Halal Finder",
    role: "Nearest Restaurant Finder",
    description:
      "Designed an application to locate the nearest halal restaurants, providing directions and details for users seeking halal options.",
    tools: ["/images/node.png", "/images/next.jpeg", "/images/mongo.png"],
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
          <button className={styles.contactButton} style={{ fontSize: "15px" }}>
            Contact Me
          </button>
        </div>
        <div className={styles.homeContainer}>
          <div className={styles.image}>
            <img src="/images/profile.jpg" />
          </div>
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
          <div className={styles.aboutBody}>
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "28px",
              }}
            >
              About Me
            </h3>
            <h3 style={{}}>City College Of New York'26</h3>
            <h3 style={{}}>Computer Science</h3>
            <p
              style={{
                fontFamily: "Times New Roman, Times, serif",
                width: "790px",
              }}
            >
              Skilled in full-stack web development, I specialize in front-end
              and back-end technologies, with experience integrating machine
              learning models to create AI-driven solutions. Proficient in
              building scalable, user-centered applications.
            </p>
          </div>
          <div style={{ paddingBottom: "60px" }}>
            {" "}
            <h3
              style={{
                borderBottom: "1px solid black",
                fontFamily: "inherit",
                fontSize: "28px",
              }}
            >
              Goals
            </h3>
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <img className={styles.icons} src="/images/solution_icon.png" />
              <h5>Finding Solutions</h5>
              <p>
                I am passionate about leveraging technology to develop
                innovative and impactful systems.
              </p>
            </div>
            <div className={styles.card}>
              <img className={styles.icons} src="/images/community_icon.jpeg" />
              <h5>Helping Community</h5>
              <p>
                Giving back to the community with my expertise in computer
                science.
              </p>
            </div>
            <div className={styles.card}>
              <img className={styles.icons} src="/images/challenges_icon.png" />
              <h5>Making Innovations</h5>
              <p>
                Constantly learning new skills in computer science to better my
                abilities and contribute to groundbreaking projects.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <h2>Projects</h2>
          <div className={styles.gridContainer}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <p>{project.role}</p>
                  <p>{project.description}</p>
                  <div className={styles.toolsContainer}>
                    Tools:
                    {project.tools.map((tool, idx) => (
                      <img
                        key={idx}
                        src={tool}
                        alt="Tool"
                        className={styles.toolImage}
                      />
                    ))}
                  </div>
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
        <div className={styles.gutter}>
          <form className={styles.contactForm}>
            <h3>Contact Me</h3>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" rows="5"></textarea>
            <button type="submit">Submit</button>
          </form>
          <div className={styles.Homebuttons}>
            <button href="https://www.linkedin.com">LinkedIn</button>
            <button href="https://github.com">Github</button>
            <button href="/resume.pdf">Resume</button>
          </div>
          <div className={styles.logo}>
            <h3>MA</h3>
          </div>
          <div className={styles.footer}>
            <p>muhammadb2345@gmail.com</p>
            <p>Copyright © 2025 Muhammad Ahmed. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
