import create from "zustand";
import { persist } from "zustand/middleware";
import { IToggleSpotify, IPosSpotify } from "./interfaces";

export const useSpotifyMusic = create<IToggleSpotify>(
  persist(
    (set, _) => ({
      isSpotifyToggled: true,
      setIsSpotifyToggled: isSpotifyToggled => set({ isSpotifyToggled }),
      isSpotifyShown: true,
      setIsSpotifyShown: isSpotifyShown => set({ isSpotifyShown }),
    }),
    {
      name: "state_spotify_section",
    }
  )
);

export const usePosSpotify = create<IPosSpotify>(
  persist(
    (set, _) => ({
      spotifyPosX: 400,
      spotifyPosY: 158,
      setSpotifyPos: (X, Y) => set({ spotifyPosX: X, spotifyPosY: Y }),
      setSpotifyPosDefault: () => set(() => ({ spotifyPosX: 400, spotifyPosY: 158 })),
    }),
    {
      name: "set_spotify_position",
    }
  )
);

