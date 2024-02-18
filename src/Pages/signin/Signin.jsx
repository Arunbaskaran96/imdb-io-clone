import classes from "./signin.module.css";
import { useState, useRef } from "react";
import Input from "../../compoenets/ui/input/Input";
import Button from "../../compoenets/ui/button/Button";
import { Link } from "react-router-dom";

function Signin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const formHandler = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <div className={classes.container}>
      <form onSubmit={formHandler} className={classes.form}>
        <Input ref={emailRef} type="email" placeholder="Email" />
        <Input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          showPassword
        />
        <Link to="/home">
          <Button value="Signin" variant="primary" />
        </Link>
        <Button value="Generate Credential" variant="secondary" />
      </form>
    </div>
  );
}

export default Signin;
