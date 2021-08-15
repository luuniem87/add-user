import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.scss";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const { onAddUser } = props;
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const { input } = classes;
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age greater than 0. ",
      });
      return;
    }
    onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
