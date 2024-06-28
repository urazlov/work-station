import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { IToggleSpotify, IPosSpotify, IBackground } from "./interfaces";

// SPOTIFY

const spotifyMusicCreator: StateCreator<IToggleSpotify, [["zustand/persist", unknown]]> = set => ({
  isSpotifyToggled: true,
  setIsSpotifyToggled: (isSpotifyToggled: any) => set({ isSpotifyToggled }),
  isSpotifyShown: true,
  setIsSpotifyShown: (isSpotifyShown: any) => set({ isSpotifyShown }),
});

export const useSpotifyMusic = create<IToggleSpotify>()(
  persist(spotifyMusicCreator, {
    name: "state_spotify_section",
  })
);

const posSpotifyCreator: StateCreator<IPosSpotify, [["zustand/persist", unknown]]> = set => ({
  spotifyPosX: 400,
  spotifyPosY: 158,
  setSpotifyPos: (X, Y) => set({ spotifyPosX: X, spotifyPosY: Y }),
  setSpotifyPosDefault: () => set(() => ({ spotifyPosX: 400, spotifyPosY: 158 })),
  isLoaded: false,
  setIsLoaded: (isLoaded) => set({ isLoaded }),
});

export const usePosSpotify = create<IPosSpotify>()(
  persist(posSpotifyCreator, {
    name: "set_spotify_position",
  })
);

// BACKGROUND 

const backgroundCreator: StateCreator<IBackground, [["zustand/persist", unknown]]> = set => ({
  background: 'village',
  setBackground: (background) => set({background})
});

export const useBackground = create<IBackground>()(
  persist(backgroundCreator, {
    name: "set_background",
  })
);

