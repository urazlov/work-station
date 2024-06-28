import { useSpotifyMusic, useTimer, useToDo } from "@/app/store";
import { FaClock, FaListUl, FaSpotify } from "react-icons/fa";
import clsx from "clsx";
import "./SideNav.scss";

export const SideNav = () => {
  const { isSpotifyToggled, setIsSpotifyToggled } = useSpotifyMusic();
  const { isTimerToggled, setIsTimerToggled } = useTimer();
  const { isToDoToggled, setIsToDoToggled } = useToDo();

  const sideNavItems = [
    {
      id: "0",
      content: <FaSpotify />,
      isToggled: isSpotifyToggled,
      setToggled: setIsSpotifyToggled,
    },
    {
      id: "1",
      content: <FaClock />,
      isToggled: isTimerToggled,
      setToggled: setIsTimerToggled,
    },
    {
      id: "2",
      content: <FaListUl />,
      isToggled: isToDoToggled,
      setToggled: setIsToDoToggled,
    },
  ];

  return (
    <div className="side-nav-container">
      {sideNavItems.map(item => {
        return (
          <button
            onClick={() => item.setToggled(!item.isToggled)}
            className={clsx("side-nav-button", item.isToggled ? "active" : "")}
            key={item.id}
          >
            {item.content}
          </button>
        );
      })}
    </div>
  );
};
