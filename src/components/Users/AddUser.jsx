import React from "react";
import Card from "../UI/Card";
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
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
