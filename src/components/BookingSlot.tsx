import React from "react";
import { OrderFormValues } from "./OrderForm";

const BookingSlot: React.FC<OrderFormValues> = ({
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
