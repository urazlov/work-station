import create from "zustand";
import { persist } from "zustand/middleware";
import { IToggleSpotify, IPosSpotify, IBackground, ITimer, IPosTimer, IToDo, IPosToDo } from "./interfaces";

//Spotify
export const useSpotifyMusic = create<IToggleSpotify>(
  persist(
    (set, _) => ({
      isSpotifyToggled: true,
      setIsSpotifyToggled: isSpotifyToggled => set({ isSpotifyToggled }),
    }),
    {
      name: "state_spotify_section",
    }
  )
);

export const usePosSpotify = create<IPosSpotify>(
  persist(
    (set, _) => ({
      spotifyPosX: 100,
      spotifyPosY: 10,
      setSpotifyPos: (X, Y) => set({ spotifyPosX: X, spotifyPosY: Y }),
    }),
    {
      name: "set_spotify_position",
    }
  )
);

// Background
export const useBackground = create<IBackground>(
  persist(
    (set, _) => ({
      background: "village",
      setBackground: background => set({ background }),
    }),
    {
      name: "set_background",
    }
  )
);

//Timer
export const useTimer = create<ITimer>(
  persist(
    (set, _) => ({
      isTimerToggled: true,
      setIsTimerToggled: isTimerToggled => set({ isTimerToggled }),
    }),
    {
      name: "state_timer_section",
    }
  )
);

export const usePosTimer = create<IPosTimer>(
  persist(
    (set, _) => ({
      timerPosX: 500,
      timerPosY: 10,
      setTimerPos: (X, Y) => set({ timerPosX: X, timerPosY: Y }),
    }),
    {
      name: "set_timer_position",
    }
  )
);

export const useToDo = create<IToDo>(
  persist(
    (set, _) => ({
      isToDoToggled: true,
      setIsToDoToggled: isToDoToggled => set({ isToDoToggled }),
    }),
    {
      name: "state_todo_section",
    }
  )
);

export const usePosTodo = create<IPosToDo>(
  persist(
    (set, _) => ({
      toDoPosX: 500,
      toDoPosY: 250,
      setToDoPos: (X, Y) => set({ toDoPosX: X, toDoPosY: Y }),
    }),
    {
      name: "set_todo_position",
    }
  )
);