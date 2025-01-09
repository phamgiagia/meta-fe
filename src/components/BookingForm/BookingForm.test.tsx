import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import BookingFormHeading from "./BookingFormHeading";

test("Renders the BookingForm heading", () => {
    render(
        <BookingFormHeading title="Book Now"/>
    );
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});