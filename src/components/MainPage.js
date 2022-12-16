import React, { useState } from "react";
import BackCard from "../images/bg-card-back.png";
import "./MainPage.css";
import { ReactComponent as Logo } from "../images/color-squares.svg";
import Form from "./Form";

const MainPage = function () {
  const [holder, setHolder] = useState("Jane Appleseed");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("000");

  const saveValuesHandler = function (enteredValues) {
    const values = {
      ...enteredValues,
    };

    values.holder ? setHolder(values.holder) : setHolder("Jane Appleseed");
    values.number ? setNumber(values.number) : setNumber("0000 0000 0000 0000");
    values.month ? setMonth(values.month) : setMonth("00");
    values.year ? setYear(values.year) : setYear("00");
    values.cvc ? setCvc(values.cvc) : setCvc("000");
  };

  return (
    <div className="main-page">
      <div className="card-front"></div>
      <img src={BackCard} className="back-card" />
      <Logo className="card-logo" />
      <div className="bar">/</div>

      <div>
        <p className="card-number">{number}</p>
        <p className="card-holder">{holder}</p>
        <p className="card-month">{month}</p>
        <p className="card-year">{year}</p>
        <p className="card-cvc">{cvc}</p>
      </div>

      <Form onSaveValues={saveValuesHandler} />
    </div>
  );
};

export default MainPage;
