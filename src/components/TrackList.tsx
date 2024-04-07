import React, { useState } from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { Box, Typography } from "@mui/material";
import { PauseCircle, PlayCircle } from "@mui/icons-material";

function TrackList() {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();
  const [showScrollbar, setShowScrollbar] = useState(false);

  return (
    <>
      <Box className="marquee-container" height="30px">
        <Typography className="marquee" fontWeight="bold">
          {currentTrackName}
        </Typography>
      </Box>
      <Box
        bgcolor="lightpink"
        p={3}
        overflow={showScrollbar ? "auto" : "hidden"}
        height="300px"
        onMouseOver={() => setShowScrollbar(true)}
        onMouseOut={() => setShowScrollbar(false)}
      >
        {trackList.map((track, index) => (
          <Box
            className="track"
            display="flex"
            bgcolor={
              currentTrackName === track.name ? "antiquewhite" : "whitesmoke"
            }
            my={2}
            p={1}
            borderRadius={3}
            onClick={() => playTrack(index)}
            sx={{ cursor: "pointer" }}
          >
            {isPlaying && track.name === currentTrackName ? (
              <PauseCircle />
            ) : (
              <PlayCircle />
            )}

            <Typography ml={2}>{track.name}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default TrackList;
