import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import BookingForm from "./BookingForm";
import userEvent from "@testing-library/user-event";
import { fetchAPI, submitAPI } from "./api";

// Mock the API modules
jest.mock("./api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn()
}));

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate
}));

describe("BookingForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (fetchAPI as jest.Mock).mockReturnValue(["17:00", "18:00", "19:00"]);
    (submitAPI as jest.Mock).mockReturnValue(true);
  });

  test("renders form with all required fields", () => {
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /On Click/i })).toBeInTheDocument();
  });

  test("shows validation errors when submitting empty form", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );

    const submitButton = screen.getByRole("button", { name: /On Click/i });
    await user.click(submitButton);

    expect(await screen.findByText("Please choose a date")).toBeInTheDocument();
    expect(await screen.findByText("Please choose a time")).toBeInTheDocument();
    expect(await screen.findByText("Please select an occasion")).toBeInTheDocument();
  });

  test("validates guest number limits", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );

    // Fill in other required fields to trigger validation
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByRole("button", { name: /On Click/i });

    // Fill in required fields
    await user.type(dateInput, "2024-01-15");
    await user.selectOptions(timeSelect, "18:00");
    await user.selectOptions(occasionSelect, "Birthday");

    // Test maximum limit
    await user.clear(guestsInput);
    await user.type(guestsInput, "11");
    await user.click(submitButton);
    
    // Use a more flexible text matcher
    const maxErrorElement = await screen.findByText((content, element) => {
      return element?.textContent === "Maximum 10 guests allowed";
    });
    expect(maxErrorElement).toBeInTheDocument();

    // Test minimum limit
    await user.clear(guestsInput);
    await user.type(guestsInput, "0");
    await user.click(submitButton);
    
    const minErrorElement = await screen.findByText((content, element) => {
      return element?.textContent === "Must have at least 1 guest";
    });
    expect(minErrorElement).toBeInTheDocument();
  });

  test("submits form with valid data and navigates on success", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole("button", { name: /On Click/i });

    await user.type(dateInput, "2024-01-15");
    await user.selectOptions(timeSelect, "18:00");
    await user.clear(guestsInput);
    await user.type(guestsInput, "4");
    await user.selectOptions(occasionSelect, "Birthday");
    await user.click(submitButton);

    expect(submitAPI).toHaveBeenCalledWith({
      date: "2024-01-15",
      time: "18:00",
      guests: 4,
      occasion: "Birthday"
    });

    expect(mockNavigate).toHaveBeenCalledWith("/confirmation");
  });

  test("displays fetched time slots correctly", async () => {
    const mockTimes = ["17:00", "18:30", "19:00"];
    (fetchAPI as jest.Mock).mockReturnValue(mockTimes);
    
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );

    const timeSelect = screen.getByLabelText(/choose time/i);
    mockTimes.forEach(time => {
      expect(timeSelect).toContainElement(screen.getByText(time));
    });
  });
});