import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import BookingForm from "./BookingForm";

test("Booking Component renders the BookingForm heading", () => {
    render(
        <BrowserRouter>
            <BookingForm />
        </BrowserRouter>
    );
    
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});