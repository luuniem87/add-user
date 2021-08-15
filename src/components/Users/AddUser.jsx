import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.scss";

const AddUser = (props) => {
  const { input } = classes;
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button typeOfButton="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
