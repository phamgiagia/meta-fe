// 
import React from 'react';

interface BookingFormHeadingProps {
    title: string;
}

const BookingFormHeading: React.FC<BookingFormHeadingProps> = ({ title="Book Now" }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default BookingFormHeading;