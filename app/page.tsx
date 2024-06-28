"use client";
import dynamic from "next/dynamic";
import { Village } from "./components/Backgrounds/Village/Village";
import { DWrapper } from "./components/Dragggable/Draggable";
import { Spotify } from "./components/Spotify/Spotify";
import { usePosSpotify, useSpotifyMusic } from "./store";


export function Home() {
  const { isSpotifyToggled, isSpotifyShown } = useSpotifyMusic();

  const { spotifyPosX, spotifyPosY, setSpotifyPos } = usePosSpotify();

  return (
    <div>
      <Village />
      <DWrapper
        toggleHook={isSpotifyToggled && isSpotifyShown}
        defaultX={spotifyPosX}
        defaultY={spotifyPosY}
        setPosition={setSpotifyPos}
      >
        <Spotify />
      </DWrapper>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
