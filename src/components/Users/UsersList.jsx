import React from "react";
import classes from "./UsersList.module.scss";
import Card from "../UI/Card";

const UsersList = (props) => {
  const { users } = classes;
  const { usersArray } = props;

  return (
    <Card className={users}>
      <ul>
        {usersArray.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
