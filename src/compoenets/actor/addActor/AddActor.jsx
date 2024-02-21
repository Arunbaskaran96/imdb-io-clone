import { Modal } from "@mantine/core";
import Button from "../../ui/button/Button";
import classes from "./addactor.module.css";
import { useDisclosure } from "@mantine/hooks";
import Input from "../../ui/input/Input";
import { useState } from "react";
import { validateActor } from "../../../utils/validate/actor";
import TextArea from "../../ui/textArea/TextArea";

function AddActor() {
  const [opened, { open, close }] = useDisclosure(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    gender: "",
    dob: "",
  });

  const handleChange = (e) => {
    if (e.target.id === "male") {
      setFormData({ ...formData, gender: "male" });
    } else if (e.target.id === "female") {
      setFormData({ ...formData, gender: "female" });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (validateActor(formData, setErrors)) {
      const data = await fetch("http://localhost:8000/api/addactor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const res = await data.json();
      if (res.success === false) {
      } else {
        close();
      }
    }
  };
  return (
    <div className={classes.container}>
      <Button
        type="button"
        onClick={open}
        value="Add Actor"
        variant="tertiary"
      />
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            id="name"
            type="text"
            placeholder="name"
          />
          {errors.name && <span className={classes.error}>{errors.name}</span>}

          <TextArea
            onChange={handleChange}
            id="bio"
            type="text"
            placeholder="bio"
          />
          {errors.bio && <span className={classes.error}>{errors.bio}</span>}
          <Input
            onChange={handleChange}
            id="dob"
            type="date"
            placeholder="dob"
          />
          {errors.dob && <span className={classes.error}>{errors.dob}</span>}
          <div className={classes.genderContainer}>
            <h4>Gender</h4>
            <div className={classes.gender}>
              <input
                id="male"
                onChange={handleChange}
                name="gender"
                type="radio"
              />
              <span>Male</span>
            </div>
            <div className={classes.gender}>
              <input
                id="female"
                onChange={handleChange}
                name="gender"
                type="radio"
              />
              <span>Female</span>
            </div>
          </div>
          {errors.gender && (
            <span className={classes.error}>{errors.gender}</span>
          )}
          <Button value="Submit" variant="tertiary" />
        </form>
      </Modal>
    </div>
  );
}

export default AddActor;
