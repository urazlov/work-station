"use client";
import { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useSpotifyMusic, usePosSpotify } from "@Store";
import "./Spotify.scss";
import Draggable, { DraggableData } from "react-draggable";
import React from "react";

export const Spotify = () => {
  const nodeRef = React.useRef(null);

  const { setIsSpotifyToggled } = useSpotifyMusic();
  const { setSpotifyPos, spotifyPosX, spotifyPosY, isLoaded, setIsLoaded } = usePosSpotify();

  const [text, setText] = useState("");
  const [playlist, setPlaylist] = useState("https://open.spotify.com/embed/playlist/1J3AKimB28rwECybTnh3ob");

  const [position, setPosition] = useState({ x: spotifyPosX, y: spotifyPosY });

  useEffect(() => {
    setPosition({ x: spotifyPosX, y: spotifyPosY });
    setIsLoaded(true);
  }, [spotifyPosX, spotifyPosY, setIsLoaded]);

  function changePlaylist() {
    if (!text.includes("https://open.spotify.com/playlist/")) {
      return;
    }
    const splitOn = (slicable: string, ...indices: number[]) =>
      [0, ...indices].map((n, i, m) => slicable.slice(n, m[i + 1]));
    const stitchUrl = splitOn(text, 24)[0] + "/embed" + splitOn(text, 24)[1];
    setPlaylist(stitchUrl);
    setText("");
  }

  function handleKeyDown(e: any) {
    if (e.key === "Enter") {
      changePlaylist();
    }
  }

  function changePosition(data: DraggableData) {
    setSpotifyPos(data.x, data.y);
    setPosition({ x: data.x, y: data.y });
  }

  if (!isLoaded) return false;

  return (
    <Draggable
      nodeRef={nodeRef}
      onStop={(_, data) => changePosition(data)}
      position={position}
    >
      <div ref={nodeRef} className="spotify-container">
        <div className="cursor-move">
          <p>Spotify</p>
          <IoCloseSharp className="close-icon" onClick={() => setIsSpotifyToggled(false)} />
        </div>


          <div>
            <iframe
              src={`${playlist}?utm_source=generator&theme=0`}
              height="380"
              width="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>

        <div className="input-container">
          <input
            className="spotify-input"
            type="text"
            value={text}
            placeholder="Paste Spotify URL here"
            onChange={e => {
              setText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <AiOutlineReload className="reload-icon" onClick={changePlaylist} />
        </div>
      </div>
    </Draggable>
  );
};
