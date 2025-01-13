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
  CssBaseline,
} from "@mui/material";

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
    <Container maxWidth="100%" disableGutters sx={{ overflow: "hidden" }}>
      {/* Full-screen background and main container */}
      <CssBaseline /> {/* Reset margin/padding globally */}
      <Box
        sx={{
          height: "100vh", // Ensure it's using the full height of the viewport
          width: "100vw", // Ensure it's using the full width of the viewport
          backgroundImage: 'url("/images/portfolio.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative", // Ensures the AppBar positions itself relative to this Box
          overflow: "hidden", // Optional: Prevent any overflow
        }}
      >
        <AppBar
          position="fixed"
          sx={{ background: "none", boxShadow: "none", width: "100%" }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ color: "white" }}>
              Home
            </Typography>
            <Typography variant="h6" sx={{ color: "white" }}>
              About Me
            </Typography>

            <Typography variant="h6" sx={{ color: "white" }}>
              Experience
            </Typography>
            <Typography variant="h6" sx={{ color: "white" }}>
              Projects
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Content area in the center */}
        <Box
          sx={{
            position: "absolute", // Makes sure this Box doesn't affect the AppBar
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Perfect center alignment
            textAlign: "center",
            color: "white",
            maxWidth: 600, // Restrict content width for readability
          }}
        >
          <Typography variant="h3" sx={{ mb: 2 }}>
            Muhammad Ahmed
          </Typography>
          <Typography variant="h5">Full Stack Software Engineer</Typography>

          <Button
            sx={{ mt: 1, color: "white", backgroundColor: "transparent" }}
          >
            Resume
          </Button>
        </Box>
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
      {/* projects section */}
      <Box
        sx={{
          padding: "50px 20px",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Slightly more transparency
          backdropFilter: "blur(10px)", // Optional: Adds blur effect to the background
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 4, textTransform: "uppercase", color: "secondary.main" }}
        >
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
                    boxShadow: "0 8px 24px rgba(0,0,0,0.5)", // Enhanced shadow on hover for better visibility
                  },
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "rgba(255,255,255,0.85)", // Increase opacity for better readability
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    color: "text.primary", // Ensure text color is readable
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 14, display: "block", mt: 1 }}
                  >
                    {project.role}
                  </Typography>
                  {/* Now showing on hover */}
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, display: "block", mt: 1 }}
                  >
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
