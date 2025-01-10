import * as React from "react";
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

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
          margin: "20px auto",
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
                margin: "0 20px", // Spacing between menu items
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
                padding: "10px 30px ",
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
        <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
          Hi I'm Muhammad Ahmed
        </Typography>
        <Typography variant="h5" sx={{ mt: 1 }}>
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
          Contact Me →
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
          My Resume ↓
        </Button>
      </Box>

      {/* Additional sections like 'about', 'experience', etc., would be similar to the 'home' section but with different content */}
      <Box
        sx={{
          marginTop: "350px",
          padding: "100px",
          alignItems: "center",
          height: "650px",
          width: "100%",
          mt: 5,
        }}
      >
        <Typography variant="h4" component="h2">
          About Me
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "350px",
          padding: "100px",
          alignItems: "center",
          height: "650px",
          width: "100%",
          mt: 5,
        }}
      >
        Experience
      </Box>
      <Box
        sx={{
          marginTop: "350px",
          padding: "100px",
          alignItems: "center",
          height: "650px",
          width: "100%",
          mt: 5,
        }}
      >
        <Typography variant="h4" component="h2">
          Skills
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "350px",
          padding: "100px",
          alignItems: "center",
          height: "650px",
          width: "100%",
          mt: 5,
        }}
      >
        <Typography variant="h4" component="h2">
          Projects
        </Typography>
      </Box>
    </Container>
  );
}
