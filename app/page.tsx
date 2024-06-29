"use client";
import { Village } from "./components/Backgrounds/Village/Village";
import { DWrapper } from "./components/Dragggable/Draggable";
import { Spotify } from "./components/Spotify/Spotify";
import { usePosSpotify, usePosTimer, usePosTodo, useSpotifyMusic, useTimer, useToDo } from "./store";
import { SideNav } from "./components/SideNav/SideNav";
import { Timer } from "./components/Timer/Timer";
import { Todo } from "./components/Todo/Todo";
import NoSSRWrapper from "./components/NoSSRWrapper/NoSSRWrapper";

export default function Home() {
  const { isSpotifyToggled } = useSpotifyMusic();
  const { isTimerToggled } = useTimer();
  const { isToDoToggled } = useToDo();

  const { spotifyPosX, spotifyPosY, setSpotifyPos } = usePosSpotify();
  const { timerPosX, timerPosY, setTimerPos } = usePosTimer();
  const { toDoPosX, toDoPosY, setToDoPos } = usePosTodo();

  return (
    <NoSSRWrapper>
          <div>
      <Village />
      <SideNav />
      <DWrapper toggleHook={isSpotifyToggled} defaultX={spotifyPosX} defaultY={spotifyPosY} setPosition={setSpotifyPos}>
        <Spotify />
      </DWrapper>
      <DWrapper toggleHook={isTimerToggled} defaultX={timerPosX} defaultY={timerPosY} setPosition={setTimerPos}>
        <Timer />
      </DWrapper>
      <DWrapper toggleHook={isToDoToggled} defaultX={toDoPosX} defaultY={toDoPosY} setPosition={setToDoPos}>
        <Todo />
      </DWrapper>
    </div>
    </NoSSRWrapper>

  );
}
