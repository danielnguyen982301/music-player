import React from "react";
import TrackList from "./components/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import { Container } from "@mui/material";
import "./App.css";
import Controller from "./components/Controller";

function App() {
  return (
    <MusicPlayerProvider>
      <Container
        sx={{
          height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          bgcolor: "#80D4FF",
          borderRadius: 10,
          py: 3,
        }}
      >
        <TrackList />
        <Controller />
      </Container>
    </MusicPlayerProvider>
  );
}

export default App;
