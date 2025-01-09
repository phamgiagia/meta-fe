import { renderHook } from "@testing-library/react";
import { act } from "@testing-library/react";
import useAppState from "./useAppState";
import { BookingFormValues } from "../../components/BookingForm";

describe("useAppState Zustand store", () => {
  // Reset store state between tests
  beforeEach(() => {
    useAppState.setState({ 
      order: [],
      currentDate: "",
      defaultTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    });
  });

  it("should initialize with the correct default state", () => {
    const { result } = renderHook(() => useAppState());
    
    expect(result.current.order).toEqual([]);
    expect(result.current.defaultTimes).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
    expect(result.current.currentDate).toBe("");
  });

  it("should update the current date using setCurrentDate", () => {
    const { result } = renderHook(() => useAppState());
    
    act(() => {
      result.current.setCurrentDate("2025-01-01");
    });
    
    expect(result.current.currentDate).toBe("2025-01-01");
  });

  it("should add a new order using addOrder", () => {
    const { result } = renderHook(() => useAppState());
    
    const newOrder: BookingFormValues = {
      date: "2025-01-01",
      time: "18:00",
      guests: 4,
      occasion: "Birthday",
    };
    
    act(() => {
      result.current.addOrder(newOrder);
    });
    
    expect(result.current.order).toHaveLength(1);
    expect(result.current.order[0]).toEqual(newOrder);
  });

  it("should retrieve orders for a specific date using getOrderOfDate", () => {
    const { result } = renderHook(() => useAppState());
    
    const testOrders: BookingFormValues[] = [
      {
        date: "2025-01-01",
        time: "18:00",
        guests: 4,
        occasion: "Birthday",
      },
      {
        date: "2025-01-02",
        time: "19:00",
        guests: 2,
        occasion: "Anniversary",
      },
    ];

    // Add orders with separate act calls for better state handling
    act(() => {
      result.current.addOrder(testOrders[0]);
    });
    
    act(() => {
      result.current.addOrder(testOrders[1]);
    });

    const ordersForDate = result.current.getOrderOfDate("2025-01-01");
    
    // Verify total number of orders first
    expect(result.current.order).toHaveLength(2);
    // Then verify filtered orders
    expect(ordersForDate).toHaveLength(1);
    expect(ordersForDate[0]).toEqual(testOrders[0]);
  });

  it("should return available times for a specific date using getAvailableTime", () => {
    const { result } = renderHook(() => useAppState());
    
    const testOrders: BookingFormValues[] = [
      {
        date: "2025-01-01",
        time: "18:00",
        guests: 4,
        occasion: "Birthday",
      },
      {
        date: "2025-01-01",
        time: "19:00",
        guests: 2,
        occasion: "Anniversary",
      },
    ];

    // Add orders one by one
    act(() => {
      result.current.addOrder(testOrders[0]);
    });
    
    act(() => {
      result.current.addOrder(testOrders[1]);
    });
    
    const availableTimes = result.current.getAvailableTime("2025-01-01");
    
    expect(availableTimes).toEqual([
      "17:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});