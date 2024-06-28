export interface IToggleSpotify {
  isSpotifyToggled: boolean;
  setIsSpotifyToggled: (isSpotifyToggled: boolean) => void;
}

export interface IPosSpotify {
  spotifyPosX: number;
  spotifyPosY: number;
  setSpotifyPos: (X: number, Y: number) => void;
}

export interface IBackground {
  background: string;
  setBackground: (background: string) => void;
}

export interface ITimer {
  isTimerToggled: boolean;
  setIsTimerToggled: (isTimerToggled: boolean) => void;
}

export interface IPosTimer {
  timerPosX: number;
  timerPosY: number;
  setTimerPos: (X: number, Y: number) => void;
}


export interface IToDo {
  isToDoToggled: boolean;
  setIsToDoToggled: (isToDoToggled: boolean) => void;
}

export interface IPosToDo {
  toDoPosX: number;
  toDoPosY: number;
  setToDoPos: (X: number, Y: number) => void;
}
