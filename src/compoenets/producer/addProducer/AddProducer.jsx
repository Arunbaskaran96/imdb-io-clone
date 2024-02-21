import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import { useState } from "react";
import { validateActor } from "../../../utils/validate/actor";
import classes from "./addproducer.module.css";

function AddProducer() {
  const [opened, { open, close }] = useDisclosure(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    bio: "",
    gender: "",
  });

  const handleChange = (e) => {
    if (e.target.id === "female") {
      setFormData({ ...formData, gender: "female" });
    } else if (e.target.id === "male") {
      setFormData({ ...formData, gender: "male" });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (validateActor(formData, setErrors)) {
      const data = await fetch("http://localhost:8000/api/addProducer", {
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
    <div>
      <Button onClick={open} value="Add Producer" variant="primary" />
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            id="name"
            type="text"
            placeholder="name"
          />
          {errors.name && <span className={classes.error}>{errors.name}</span>}
          <Input
            onChange={handleChange}
            id="bio"
            type="text"
            placeholder="Bio"
          />
          {errors.bio && <span className={classes.error}>{errors.bio}</span>}
          <Input
            onChange={handleChange}
            id="dob"
            type="date"
            placeholder="date"
          />
          {errors.dob && <span className={classes.error}>{errors.dob}</span>}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Gender</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                onChange={handleChange}
                id="male"
                type="radio"
                name="gender"
                checked={formData.gender === "male"}
              />
              <span>Male</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                onChange={handleChange}
                id="female"
                type="radio"
                name="gender"
                checked={formData.gender === "female"}
              />
              <span>Female</span>
            </div>
          </div>
          {errors.gender && (
            <span className={classes.error}>{errors.gender}</span>
          )}
          <Button value="submit" variant="tertiary" />
        </form>
      </Modal>
    </div>
  );
}

export default AddProducer;
