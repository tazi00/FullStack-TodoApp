import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
const TodoBg = {
  home: <AiOutlineHome />,
  work: <MdWorkOutline />,
  office: "office",
  movie: "movie",
  workout: "workout",
  freelance: "freelance",
};
interface TodoItem {
  type: "home" | "work" | "office";
}
function TodoItem({ type }: TodoItem) {
  return (
    <div className="todo_list">
      <figure>
        {TodoBg[type]}
        <img src="" alt="" />
      </figure>
      <div className="text">
        <h3>Morning Work</h3>
        <h4>Workout</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis.</p>
        <div className="btns">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <h6>
        <BiSolidUserDetail />
      </h6>
    </div>
  );
}

export default TodoItem;
