import * as yup from "yup";

const holderRule = /^[A-Za-z0-9 ]+$/;
const numberRule = /^[\d\s]+$/;
const monthRule = /^0*([1-9]|1[0-2])$/;
const yearRule = /^(2[2-6])$/;

export const basicSchema = yup.object().shape({
  holder: yup
    .string()
    .matches(holderRule, "Wrong format, letters only")
    .min(5, "Cardholder name to short")
    .required("Can't be blank"),
  number: yup
    .string()
    .matches(numberRule, "Wrong format, numbers only")
    .min(19, "Number must be 16 characters")
    .required("Can't be blank"),
  month: yup
    .string()
    .matches(numberRule, "Wrong format, numbers only")
    .matches(monthRule, "Invalid number")
    .min(2, "Must be two digits")
    .required("Can't be blank"),
  year: yup
    .string()
    .matches(numberRule, "Wrong format, numbers only")
    .matches(yearRule, "Invalid number")
    .min(2, "Must be two digits")
    .required("Can't be blank"),
  cvc: yup
    .string()
    .matches(numberRule, "Wrong format, numbers only")
    .min(3, "Must be three digits")
    .required("Can't be blank"),
});
