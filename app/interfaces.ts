export interface IToggleSpotify {
  isSpotifyToggled: boolean;
  setIsSpotifyToggled: (isSpotifyToggled: boolean) => void;
  isSpotifyShown: boolean;
  setIsSpotifyShown: (isSpotifyShown: boolean) => void;
}

export interface IPosSpotify {
  spotifyPosX: number;
  spotifyPosY: number;
  isLoaded: boolean;
  setSpotifyPos: (X: number, Y: number) => void;
  setSpotifyPosDefault: () => void;
  setIsLoaded: (isLoaded: boolean) => void;
}

export interface IBackground {
  background: string;
  setBackground: (bg: string) => void;
}
