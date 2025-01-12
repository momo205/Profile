import * as React from "react";
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Typography,
  Button,
  Paper,
  Grid,
} from "@mui/material";

const experiences = [
  {
    title: "Personaland",
    role: "App Developer",
    summary: "Developed mobile apps to enhance user interaction.",
    description:
      "Led the development of innovative mobile applications focusing on improving user engagement through intuitive UI/UX designs. Utilized React Native extensively to ensure cross-platform compatibility.",
    image: "/images/personaland.jpg", // Placeholder image path
  },
  {
    title: "Department of Design and Construction",
    role: "QA Intern",
    summary: "Performed software testing and QA.",
    description:
      "Engaged in rigorous testing and QA processes for the Civil Service Application Tracker project, ensuring the software met all specified requirements before its deployment.",
    image: "/images/ddc.jpg", // Placeholder image path
  },
];
const projects = [
  {
    title: "Auction Architects",
    role: "Selling used cars",
    description:
      "Developed a full-stack web application using Node.js and Next.js to facilitate real-time car auctions and purchases. This system integrates essential features such as live bidding and car history checks.",
    tools: "Node.js, Next.js, MongoDB",
    image: "/images/auction-architects.jpg", // Placeholder image path
  },
  {
    title: "Materinaize",
    role: "Maternal Health Monitor using ML",
    description:
      "Created a system to monitor maternal health using machine learning algorithms to analyze health data and provide real-time updates to healthcare providers.",
    tools: "React, Node.js, TensorFlow",
    image: "/images/materinaize.jpg", // Placeholder image path
  },
  {
    title: "Thera Cam",
    role: "In-Home Fitness Tool",
    description:
      "Developed an application using Node.js and OpenPose technology to provide real-time exercise feedback, helping users maintain correct form during workouts.",
    tools: "Node.js, OpenPose",
    image: "/images/thera-cam.jpg", // Placeholder image path
  },
  {
    title: "Fitness AI",
    role: "Personalized fitness tracker",
    description:
      "Implemented a fitness tracking app that uses artificial intelligence to personalize diet and exercise recommendations based on user input.",
    tools: "Node.js, Next.js",
    image: "/images/fitness-ai.jpg", // Placeholder image path
  },
  {
    title: "Green Scan",
    role: "Environmental Protection through waste reduction",
    description:
      "Developed a platform to recommend how to reuse household waste using AI, promoting environmental protection through practical daily actions.",
    tools: "Node.js, Next.js",
    image: "/images/green-scan.jpg", // Placeholder image path
  },
  {
    title: "Halal Finder",
    role: "Nearest Restaurant Finder",
    description:
      "Designed an application to locate the nearest halal restaurants, providing directions and details for users seeking halal options.",
    tools: "Java, Google Maps API",
    image: "/images/halal-finder.jpg", // Placeholder image path
  },
];

export default function Home() {
  return (
    <Container
      sx={{
        fontFamily: "Roboto, sans-serif",
        padding: "0",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white background
          borderRadius: "10px", // Rounded corners
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          margin: "10px auto",
          maxWidth: 1200, // Ensures the AppBar doesn't stretch too wide
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "transparent", // Transparent AppBar
            boxShadow: "none", // No shadow
            flexGrow: 1,
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between", // Center the Toolbar content
              "& .MuiTypography-root": {
                margin: "0 10px", // Spacing between menu items
                color: "#000", // Black color for text
              },
            }}
          >
            <Typography variant="h6">Home</Typography>
            <Typography variant="h6">About Me</Typography>
            <Typography variant="h6">Skills</Typography>
            <Typography variant="h6">Experience</Typography>
            <Typography variant="h6">Projects</Typography>
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid black",
                borderRadius: "50px",
                padding: "10px 20px ",
              }}
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            borderRadius: "50%",
            border: "3px solid #fff",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            height: 233,
            width: 350,
            maxWidth: { xs: 233, md: 167 },
            maxHeight: { xs: 350, md: 250 },
          }}
          src="./favicon.ico"
        />
        <Typography variant="h5" component="h1" sx={{ mt: 2 }}>
          Hi I'm Muhammad Ahmed
        </Typography>
        <Typography variant="h4" sx={{ mt: 1 }}>
          Full Stack Software Engineer
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, maxWidth: 600 }}>
          Aspiring software engineer with front-end and back-end development
          skills, seeking internships to apply and expand my expertise.
          Experienced in building scalable web applications using frameworks
          like Next.js, Firebase, and integrating machine learning models to
          deliver impactful solutions.
        </Typography>
        <Button
          sx={{
            mt: 3,
            fontSize: "16px",
            fontWeight: 200,
            backgroundColor: "#fff",
            color: "#000",
            border: "1px solid black",
            borderRadius: "50px",
            padding: "10px 30px",
          }}
        >
          Contact Me
        </Button>
        <Button
          sx={{
            mt: 1,
            fontSize: "16px",
            fontWeight: 200,
            backgroundColor: "#fff",
            color: "#000",
            border: "1px solid black",
            borderRadius: "50px",
            padding: "10px 30px",
          }}
        >
          My Resume
        </Button>
      </Box>

      {/* Additional sections like 'about', 'experience', etc., would be similar to the 'home' section but with different content */}
      {/*  <Box
        sx={{
          marginTop: "350px",
          padding: "100px",
          alignItems: "center",
          height: "650px",
          width: "100%",
          mt: 5,
        }}
      >
        <Typography variant="h3" component="h2">
          About Me
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: 600 }}> C </Typography>
      </Box>*/}

      {/* Projects Section */}
      <Box
        sx={{
          padding: "50px 20px",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Typography variant="h4" sx={{ mb: 4, textTransform: "uppercase" }}>
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  height: 300,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  },
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    {project.role}
                  </Typography>
                  <Typography variant="body2" sx={{ display: "none" }}>
                    {project.description} | Tools: {project.tools}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience Section */}
      <Box
        sx={{
          padding: "50px 20px",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Typography variant="h4" sx={{ mb: 4, textTransform: "uppercase" }}>
          Experience
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {experiences.map((exp, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  height: 300,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  backgroundImage: `url(${exp.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  },
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    {exp.summary}
                  </Typography>
                  <Typography variant="body2" sx={{ display: "none" }}>
                    {exp.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
