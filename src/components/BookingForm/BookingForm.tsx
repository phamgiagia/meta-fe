import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BookingFormValues } from "./BookingFormValues";
import "./BookingForm.css";
import { fetchAPI, submitAPI } from "./api";
import { useNavigate } from "react-router";
import BookingFormHeading from "./BookingFormHeading";

const BookingForm: React.FC = () => {
  const navigate = useNavigate();

  const initializeTimes = (date: string) => {
    console.log(date);
    return fetchAPI(date ? new Date(date) : new Date());
  };

  const validationSchema = Yup.object({
    date: Yup.string().required("Please choose a date"),
    time: Yup.string().required("Please choose a time"),
    guests: Yup.number()
      .min(1, "Must have at least 1 guest")
      .max(10, "Maximum 10 guests allowed")
      .required("Please enter the number of guests"),
    occasion: Yup.string().required("Please select an occasion"),
  });

  const initialValues = {
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  };

  const updateTimes = async (values: BookingFormValues) => {
    console.log("Form data submitted:", values);
    const response = await submitAPI(values);
    if (response === true) {
      navigate("/confirmation");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={updateTimes}
    >
      {({ values, handleChange, handleBlur, touched, errors }) => (
        <section className="wrapper-form">
          <BookingFormHeading title="Book Now" />
          <Form className="order-form" aria-labelledby="booking-form-heading">
            <fieldset>
              <legend id="booking-form-heading">Booking Form</legend>

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
                  aria-required="true"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="error-message"
                />
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
                  aria-required="true"
                >
                  <option value="">Select time</option>
                  {initializeTimes(values.date).map((time) => (
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
                  aria-required="true"
                />
                <ErrorMessage
                  name="guests"
                  component="div"
                  className="error-message"
                />
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
                  aria-required="true"
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
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-button"
                aria-label="On Click"
              >
                Make Your Reservation
              </button>
            </fieldset>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default BookingForm;
