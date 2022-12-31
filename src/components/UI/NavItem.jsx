import { useState } from "react";

export default function NavItem(props) {
  const [change, setChange] = useState(false);

  function handleClick() {
    setChange((oldChange) => !oldChange);
  }

  return (
    <>
      <li
        onClick={handleClick}
        style={{ backgroundColor: change ? "#1f282d" : "" }}
        className="pl-4 pr-7 hover:bg-accent"
      >
        <a
          href="#"
          className="flex items-center text-white gap-2 py-2 font-500 text-lg focus:text-accent"
        >
          {props.dashBoardSvg}
          {props.name}
        </a>
      </li>
    </>
  );
}
