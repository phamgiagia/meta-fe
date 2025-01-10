import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import BookingFormHeading from "./BookingFormHeading";
import { fetchAPI, submitAPI } from "./api";
import "./BookingForm.css";

// Define types
interface BookingFormValues {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

interface BookingFormProps {
  availableTimes: string[];
  onDateChange: (date: string) => void;
}

const validationSchema = Yup.object({
  date: Yup.string().required("Please choose a date"),
  time: Yup.string().required("Please choose a time"),
  guests: Yup.number()
    .min(1, "Must have at least 1 guest")
    .max(10, "Maximum 10 guests allowed")
    .required("Please enter the number of guests"),
  occasion: Yup.string().required("Please select an occasion"),
});

const initialValues: BookingFormValues = {
  date: "",
  time: "",
  guests: 1,
  occasion: "",
};

const BookingForm: React.FC<BookingFormProps> = ({ availableTimes, onDateChange }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values: BookingFormValues) => {
    console.log("Form data submitted:", values);
    const response = await submitAPI(values);
    if (response) {
      navigate("/confirmation");
    }
  };

  return (
    <section className="wrapper-form">
      <BookingFormHeading title="Book Now" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur }) => (
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
                  onChange={(e) => {
                    handleChange(e);
                    onDateChange(e.target.value);
                  }}
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
                  {availableTimes.map((time) => (
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
        )}
      </Formik>
    </section>
  );
};

// Parent component to manage state
const BookingFormApp: React.FC = () => {
  const [availableTimes, setAvailableTimes] = React.useState<string[]>([]);

  const handleDateChange = (date: string) => {
    const times = fetchAPI(date ? new Date(date) : new Date());
    setAvailableTimes(times);
  };

  React.useEffect(() => {
    // Initialize with current date's times
    handleDateChange(new Date().toISOString().split('T')[0]);
  }, []);

  return <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange} />;
};

export default BookingFormApp;