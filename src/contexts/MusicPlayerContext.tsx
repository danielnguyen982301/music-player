import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

const trackFiles = require.context("../assets/tracks");
const trackList = trackFiles.keys().map((track) => trackFiles(track));
const trackNames = trackFiles.keys().map((trackName: string) => {
  const arr = trackName.substring(2).split("-");
  arr.pop();
  const newName = arr.join(" ");
  return newName.charAt(0).toUpperCase() + newName.substring(1);
});

const tracks = [];
for (let i = 0; i < trackList.length; i++) {
  tracks.push({ name: trackNames[i], file: trackList[i] });
}

const MusicPlayerContext = React.createContext<{
  state: StateProps;
  setState: Dispatch<SetStateAction<StateProps>>;
}>(null!);

interface StateProps {
  audioPlayer: HTMLAudioElement;
  tracks: { name: string; file: any }[];
  currentTrackIndex: null | number;
  isPlaying: boolean;
}
const defaultValues: StateProps = {
  audioPlayer: new Audio(),
  tracks: tracks,
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
