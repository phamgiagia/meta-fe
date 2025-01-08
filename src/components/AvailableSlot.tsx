import React from "react";
type AvailableSlotProps = {
  time: string;
};

const AvailableSlot: React.FC<AvailableSlotProps> = ({ time }) => {
  return (
    <div>
      <p>{time}</p>
    </div>
  );
};
export default AvailableSlot;
