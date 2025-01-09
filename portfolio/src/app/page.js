import * as React from "react";
import { AppBar, Container, Box, Toolbar, Typography } from "@mui/material";
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
        }}
      >
        <AppBar
          sx={{
            height: "60px",
            justifyContent: "center",
            backgroundColor: "#1976d2",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              About
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Expereince
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Skills
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Projects
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
