"use client";
import { DWrapper } from "./components/Dragggable/Draggable";
import { Spotify } from "./components/Spotify/Spotify";
import { useBackground, usePosSpotify, usePosTimer, usePosTodo, useSpotifyMusic, useTimer, useToDo } from "./store";
import { SideNav } from "./components/SideNav/SideNav";
import { Timer } from "./components/Timer/Timer";
import { Todo } from "./components/Todo/Todo";
import NoSSRWrapper from "./components/NoSSRWrapper/NoSSRWrapper";
import { BackgroundSelect } from "./components/BackgroundSelect/BackgroundSelect";
import { Village } from "./components/Backgrounds/Village/Village";
import { Waterfall } from "./components/Backgrounds/Waterfall/Waterfall";

export default function Home() {
  const { isSpotifyToggled } = useSpotifyMusic();
  const { isTimerToggled } = useTimer();
  const { isToDoToggled } = useToDo();
  const { background } = useBackground();

  const { spotifyPosX, spotifyPosY, setSpotifyPos } = usePosSpotify();
  const { timerPosX, timerPosY, setTimerPos } = usePosTimer();
  const { toDoPosX, toDoPosY, setToDoPos } = usePosTodo();

  const backgroundMap: Record<string, JSX.Element> = {
    'village': <Village />,
    'waterfall': <Waterfall />
  }

  return (
    <NoSSRWrapper>
      <div>
        {backgroundMap[background]}
        <SideNav />
        <BackgroundSelect />
        <DWrapper
          toggleHook={isSpotifyToggled}
          defaultX={spotifyPosX}
          defaultY={spotifyPosY}
          setPosition={setSpotifyPos}
        >
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
