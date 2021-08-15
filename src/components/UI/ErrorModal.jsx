import React from "react";
import classes from "./ErrorModal.module.scss";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  const { title, message, onConfirm } = props;
  const { modal, header, actions, content, backdrop } = classes;
  return (
    <div>
      <div className={backdrop} onClick={onConfirm}></div>
      <Card className={modal}>
        <header className={header}>
          <h2>{title}</h2>
        </header>
        <div className={content}>
          <p>{message}</p>
        </div>
        <footer className={actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
