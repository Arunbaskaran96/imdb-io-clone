import classes from "./button.module.css";

function Button({ value, variant, onClick, height }) {
  return (
    <div className={classes.container}>
      <button
        style={{ height: height }}
        className={`${classes.btn} ${
          variant === "primary" && classes.primary
        } ${variant === "secondary" && classes.secondary} ${
          variant === "tertiary" && classes.tertiary
        }`}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
