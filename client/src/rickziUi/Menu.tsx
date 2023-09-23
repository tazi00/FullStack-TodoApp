import { ChildrenProps } from "../Layout/Reusuable";
import { useState, createContext, useContext } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";

type MenuContextType = {
  selectedTitle: string;
  setSelectedTitle: React.Dispatch<React.SetStateAction<string>>;
};
export const menuContext = createContext<unknown | MenuContextType>(undefined);
function Menu({ children }: ChildrenProps) {
  const [selectedTitle, setSelectedTitle] = useState<string>("All");
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="menu-box">
      <menuContext.Provider
        value={{ selectedTitle, setSelectedTitle, show, setShow }}
      >
        {children}
      </menuContext.Provider>
    </div>
  );
}

export default Menu;

export function MenuTitle() {
  const { selectedTitle, setShow, show } = useContext(menuContext);
  return (
    <div className="menu-title" onClick={() => setShow(!show)}>
      {selectedTitle}

      <span>
        {!show ? (
          <span className="down">
            <FaSortDown />
          </span>
        ) : (
          <span className="up">
            <FaSortUp />
          </span>
        )}
      </span>
    </div>
  );
}

interface Menuitems {
  id: number;
  label: string;
}

interface MenuListProps {
  width: string;
  data: Menuitems[];
}
export function MenuList({ width, data }: MenuListProps) {
  const { setSelectedTitle, show, setShow } = useContext(menuContext);
  function handleClick(type: string) {
    console.log(type);
    setSelectedTitle(type);
    setShow(false);
  }

  return (
    <ul
      className={`menu-list ${show ? "open" : ""}`}
      style={{ maxWidth: width }}
    >
      {data.map((item) => {
        return (
          <li key={item.id} onClick={() => handleClick(item.label)}>
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}
