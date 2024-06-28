import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useSpotifyMusic } from "@Store";
import "./Spotify.scss";
import React from "react";

export const Spotify = () => {
  const { setIsSpotifyToggled } = useSpotifyMusic();

  const [text, setText] = useState("");
  const [playlist, setPlaylist] = useState("https://open.spotify.com/embed/playlist/1J3AKimB28rwECybTnh3ob");

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

  return (
    <div className="spotify-container">
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
  );
};
