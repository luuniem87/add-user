import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.scss";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const { input } = classes;
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername);
    console.log(enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          onChange={usernameChangeHandler}
          value={enteredUsername}
          id="username"
          type="text"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          onChange={ageChangeHandler}
          value={enteredAge}
          id="age"
          type="number"
        />
        <Button typeOfButton="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
