import { AiFillHome } from "react-icons/ai";
import { MdWork, MdLocalMovies, MdFitnessCenter } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import { BiSolidObjectsHorizontalLeft } from "react-icons/bi";
function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li className="active">
          <span>
            <BiSolidObjectsHorizontalLeft />
          </span>
          All
        </li>
        <li className="">
          <span>
            <AiFillHome />
          </span>
          Home
        </li>
        <li>
          <span>
            <MdWork />
          </span>
          Office
        </li>
        <li>
          <span>
            <SiFreelancer />
          </span>
          Freelancing
        </li>
        <li>
          <span>
            <MdLocalMovies />
          </span>
          Movies
        </li>
        <li>
          <span>
            <MdFitnessCenter />
          </span>
          Workout
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
