import "../styles.css";
import App from "./App";
import React, { useState } from "react";
import contacts from "../contacts";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Card() {
  const [move, setMove] = useState(contacts);
  return (
    <div className="row">
      <App move={contacts} />
    </div>
  );
}
