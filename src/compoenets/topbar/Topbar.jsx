import { themeState } from "../../context/themeContext";
import classes from "./topbar.module.css";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function Topbar() {
  const { toggle, themeAction } = themeState();
  const clickHandler = () => {
    themeAction();
  };
  console.log(toggle);
  return (
    <div className={classes.container}>
      <h5 className={classes.text}>IMDB Clone</h5>
      <div>
        {toggle ? (
          <CiLight
            onClick={clickHandler}
            style={{ cursor: "pointer" }}
            size={30}
          />
        ) : (
          <MdDarkMode
            onClick={clickHandler}
            style={{ cursor: "pointer" }}
            size={30}
          />
        )}
      </div>
    </div>
  );
}

export default Topbar;
