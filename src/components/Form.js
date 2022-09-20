import React from "react";
import { Formik, useFormik } from "formik";
import "./Form.css";
import { basicSchema } from "../schemas";
import { ReactComponent as IconComplete } from "../images/icon-complete.svg";

const Form = (props) => {
  const onSubmit = async (values, actions) => {
    actions.resetForm();
    if (isSubmitting) {
      document.querySelector(".form").classList.add("visibility");
      document.querySelector(".form").classList.add("visible");
      document.querySelector("button").setAttribute("disabled", "");
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      holder: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const numberSpace = function (event) {
    let target = event.target,
      position = target.selectionEnd,
      length = target.value.length;

    target.value = target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    target.selectionEnd = position +=
      target.value.charAt(position - 1) === " " &&
      target.value.charAt(length - 1) === " " &&
      length !== target.value.length
        ? 1
        : 0;
  };

  props.onSaveValues(values);

  return (
    <form className="form" onSubmit={handleSubmit} action="/">
      <div className="box">
        <label className="label-1">Cardholder Name</label>
        <input
          className={`data-input-1 ${
            errors.holder && touched.holder ? "input-error" : ""
          }`}
          type="text"
          id="holder"
          placeholder="e.g. Jane Appleseed"
          maxLength="36"
          value={values.holder}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.holder && touched.holder && (
          <p className="error-1">{errors.holder}</p>
        )}

        <label className="label-2">Card Number</label>
        <input
          className={`data-input-2 ${
            errors.number && touched.number ? "input-error" : ""
          }`}
          type="text"
          id="number"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength="19"
          value={values.number}
          onChange={handleChange}
          onBlur={handleBlur}
          onInput={numberSpace}
        ></input>
        {errors.number && touched.number && (
          <p className="error-2">{errors.number}</p>
        )}

        <label className="label-3">Exp. Date (mm/yy)</label>
        <input
          className={`data-input-3 ${
            errors.month && touched.month ? "input-error" : ""
          }`}
          type="text"
          id="month"
          placeholder="MM"
          maxLength="2"
          value={values.month}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.month && touched.month && (
          <p className="error-3">{errors.month}</p>
        )}
        <input
          className={`data-input-4 ${
            errors.year && touched.year ? "input-error" : ""
          }`}
          type="text"
          id="year"
          placeholder="YY"
          maxLength="2"
          value={values.year}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.year && touched.year && (
          <p className="error-3">{errors.year}</p>
        )}

        <label className="label-4">cvc</label>
        <input
          className={`data-input-5 ${
            errors.cvc && touched.cvc ? "input-error" : ""
          }`}
          type="text"
          id="cvc"
          placeholder="e.g. 123"
          maxLength="3"
          value={values.cvc}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.cvc && touched.cvc && <p className="error-4">{errors.cvc}</p>}

        <button type="submit">Confirm</button>

        <p className="end-label-1 hidden">Thank You!</p>
        <p className="end-label-2 hidden">We've added your card details</p>
        <p className="continue hidden">Continue</p>
        <IconComplete className="icon hidden" />
      </div>
    </form>
  );
};

export default Form;
