import {
  PauseCircle,
  PlayCircle,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

function Controller() {
  const {
    isPlaying,
    togglePlay,
    currentTrackIndex,
    playNextTrack,
    playPreviousTrack,
  } = useMusicPlayer();

  const style = {
    width: "50px",
    height: "50px",
    color: "black",
    opacity: currentTrackIndex === null ? "0.4" : "1",
  };

  const props = {
    disabled: currentTrackIndex === null,
  };

  return (
    <Box display="flex" justifyContent="center">
      <Button {...props}>
        <SkipPrevious sx={style} onClick={playPreviousTrack} />
      </Button>
      {isPlaying ? (
        <Button {...props}>
          <PauseCircle
            sx={{ ...style, mx: 2 }}
            onClick={() => (currentTrackIndex ? togglePlay() : undefined)}
          />
        </Button>
      ) : (
        <Button {...props}>
          <PlayCircle
            sx={{ ...style, mx: 2 }}
            onClick={() => (currentTrackIndex ? togglePlay() : undefined)}
          />
        </Button>
      )}
      <Button {...props}>
        <SkipNext sx={style} onClick={playNextTrack} {...props} />
      </Button>
    </Box>
  );
}

export default Controller;
