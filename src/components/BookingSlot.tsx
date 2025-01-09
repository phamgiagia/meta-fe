import React from "react";
import { BookingFormValues } from "./BookingForm";

const BookingSlot: React.FC<BookingFormValues> = ({
  date,
  time,
  guests,
  occasion,
}) => {
  return (
    <div>
      <p>{date}</p>
      <p>{time}</p>
      <p>{guests}</p>
      <p>{occasion}</p>
    </div>
  );
};
export default BookingSlot;
