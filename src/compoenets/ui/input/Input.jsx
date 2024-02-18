import { forwardRef, useEffect, useState } from "react";
import classes from "./input.module.css";
import { FaEye } from "react-icons/fa";

function Input(props, ref) {
  const { type, placeholder, showPassword } = props;
  const [inputType, setInputType] = useState("");

  useEffect(() => {
    setInputType(type);
  }, []);

  const changeHandler = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div className={classes.inputContainer}>
      <input
        className={classes.input}
        type={inputType}
        ref={ref}
        placeholder={placeholder}
      />
      {showPassword && (
        <FaEye
          onClick={changeHandler}
          style={{ cursor: "pointer" }}
          size={20}
        />
      )}
    </div>
  );
}

export default forwardRef(Input);
