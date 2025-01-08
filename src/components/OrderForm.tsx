import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAppState from "../libs/zustand/useAppState";

// Define the shape of the form values
export interface OrderFormValues {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

const OrderForm: React.FC = () => {
  //   const order = useAppState((state) => state.order);
  const addOrder = useAppState((state) => state.addOrder);
  const availableTimes = useAppState((state) => state.getAvailableTime);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    date: Yup.string().required("Please choose a date"),
    time: Yup.string().required("Please choose a time"),
    guests: Yup.number()
      .min(1, "Must have at least 1 guest")
      .max(10, "Maximum 10 guests allowed")
      .required("Please enter the number of guests"),
    occasion: Yup.string().required("Please select an occasion"),
  });
//   const initializeTimes = () => [
//     "17:00",
//     "18:00",
//     "19:00",
//     "20:00",
//     "21:00",
//     "22:00",
//   ];
//   const updateTimes = () => {};
  // Initial form values
  const initialValues = {
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  };

  // Form submission handler
  const handleSubmit = (values: OrderFormValues) => {
    console.log("Form data submitted:", values);
    addOrder(values);
    // Add your form submission logic here
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, touched, errors }) => (
        <Form className="order-form">
          {/* Date */}
          <div className="form-field">
            <label htmlFor="date">Choose date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="date"
              component="div"
              className="error-message"
            />
            {/* {touched.date && errors.date && (
              <div className="error-message">{errors.date}</div>
            )} */}
          </div>

          {/* Time */}
          <div className="form-field">
            <label htmlFor="time">Choose time</label>
            <select
              id="time"
              name="time"
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select time</option>
              {availableTimes(values.date).map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <ErrorMessage
              name="time"
              component="div"
              className="error-message"
            />
            {/* {touched.time && errors.time && (
              <div className="error-message">{errors.time}</div>
            )} */}
          </div>

          {/* Guests */}
          <div className="form-field">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min={1}
              max={10}
              value={values.guests}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="guests"
              component="div"
              className="error-message"
            />
            {/* {touched.guests && errors.guests && (
              <div className="error-message">{errors.guests}</div>
            )} */}
          </div>

          {/* Occasion */}
          <div className="form-field">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={values.occasion}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Others">Others</option>
            </select>
            <ErrorMessage
              name="occasion"
              component="div"
              className="error-message"
            />
            {/* {touched.occasion && errors.occasion && (
              <div className="error-message">{errors.occasion}</div>
            )} */}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Make Your Reservation
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;

// CSS Styling
const style = `
.order-form {
  display: grid;
  gap: 16px;
  max-width: 400px;
  margin: auto;
  padding: 30px;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.form-field {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
}

input,
select {
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button.submit-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

button.submit-button:hover {
  background-color: #45a049;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
`;

// Append style to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = style;
document.head.appendChild(styleSheet);
