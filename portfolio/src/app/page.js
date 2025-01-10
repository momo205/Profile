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
        }}
      >
        <Box
          sx={{
            width: "fit-content", // Adjust width to fit its content
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white background
            borderRadius: "20px", // Rounded corners
            padding: "0 20px", // Padding around the AppBar
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          }}
        >
          <AppBar
            position="static"
            sx={{
              backgroundColor: "transparent", // Transparent AppBar
              boxShadow: "none", // No shadow
            }}
          >
            <Toolbar
              sx={{
                justifyContent: "center", // Center the Toolbar content
                "& .MuiTypography-root": {
                  margin: "0 10px", // Spacing between menu items
                  color: "#000", // Black color for text
                },
              }}
            >
              <Typography variant="h6">Home</Typography>
              <Typography variant="h6">About Me</Typography>
              <Typography variant="h6">Skills</Typography>
              <Typography variant="h6">Services</Typography>
              <Typography variant="h6">My Work</Typography>
            </Toolbar>
          </AppBar>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#000",
              color: "#000",
              display: "flex",
              alignItems: "center",
              borderRadius: "50px", // Rounded button edges
            }}
          >
            Contact
          </Button>
        </Box>
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
        <Box
          component="img"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "3px solid #fff",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          src="./favicon.ico"
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Hi I'm Muhammad Ahmed
        </Typography>
        <Typography variant="body1" component="p">
          I'm a software engineer with a passion for designing and implementing
          innovative solutions. I have experience working with various
          technologies such as React, Next.js, and Node.js.
        </Typography>
        <Typography variant="body1" component="p">
          Feel free to reach out if you have any questions or need assistance
          with your projects.
        </Typography>
        <Button variant="contained" color="primary">
          {" "}
          Resume{" "}
        </Button>
        <Button variant="contained" color="primary" sx={{ marginLeft: "10px" }}>
          Contact Me
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
