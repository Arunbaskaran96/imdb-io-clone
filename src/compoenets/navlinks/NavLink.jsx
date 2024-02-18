import classes from "./navlink.module.css";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className={classes.container}>
      {/* <div onClick={() => setBody("actors")} className={classes.link}>
        Actors
      </div>
      <div onClick={() => setBody("movies")} className={classes.link}>
        Movies
      </div>
      <div onClick={() => setBody("producers")} className={classes.link}>
        Producers
      </div> */}
      <NavLink
        to="/home/actors"
        className={({ isActive }) => {
          return isActive ? classes.isActive : classes.link;
        }}
      >
        Actors
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? classes.isActive : classes.link;
        }}
        to="/home/movies"
      >
        Movies
      </NavLink>
      <NavLink
        to="/home/producers"
        className={({ isActive }) => {
          return isActive ? classes.isActive : classes.link;
        }}
      >
        Producers
      </NavLink>
    </div>
  );
}

export default NavLinks;
