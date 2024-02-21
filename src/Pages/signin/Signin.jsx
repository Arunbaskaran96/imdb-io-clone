import classes from "./signin.module.css";
import { useState, useRef } from "react";
import Input from "../../compoenets/ui/input/Input";
import Button from "../../compoenets/ui/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin, userSelector } from "../../redux/slices/userSlice";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { validSignin } from "../../utils/validate/signin";
import { FaHandPointUp } from "react-icons/fa";

function Signin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { setItem } = useLocalStorage("user");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [errors, setErrors] = useState({});
  const { loading, user, error } = userSelector();
  if (user?._id) {
    nav("/home/movies");
    setItem(user);
  }

  const formHandler = (e) => {
    e.preventDefault();
    if (
      validSignin(
        emailRef?.current.value,
        passwordRef?.current.value,
        setErrors
      )
    ) {
      dispatch(
        signin({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  const generateAuth = () => {
    emailRef.current.value = "arun@gmail.com";
    passwordRef.current.value = "Arun";
  };
  return (
    <div className={classes.container}>
      <form onSubmit={formHandler} className={classes.form}>
        <Input ref={emailRef} type="email" placeholder="Email" />
        {errors.email && (
          <span className={classes.error}>
            {errors.email} <FaHandPointUp />
          </span>
        )}
        <Input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          showPassword
          disabled={loading}
        />
        {errors.password && (
          <span className={classes.error}>
            {errors.password} <FaHandPointUp />
          </span>
        )}
        {/* <Link to="/home"> */}
        <Button value="Signin" variant="primary" disabled={loading} />
        {/* </Link> */}
        <Link to="/signup">
          <Button
            value="Create new Account"
            variant="tertiary"
            disabled={loading}
            type="button"
          />
        </Link>
        <Button
          onClick={generateAuth}
          value="Generate Credential"
          variant="secondary"
          type="button"
        />
      </form>
    </div>
  );
}

export default Signin;
