import { BookingFormValues } from "../../components/BookingForm";
import { create } from "zustand";

type AppState = {
  order: BookingFormValues[];
  defaultTimes: string[];
  currentDate: string;
  setCurrentDate: (date: string) => void;
  addOrder: (newOrder: BookingFormValues) => void;
  getOrderOfDate: (date: string) => BookingFormValues[];
  getAvailableTime: (date: string) => string[];
};

const useAppState = create<AppState>((set, get) => ({
  order: [],
  defaultTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  currentDate: "",
  setCurrentDate: (date) => set((state) => ({ ...state, currentDate: date })),
  addOrder: (newOrder) =>
    set((state) => ({ order: [...state.order, newOrder] })),
  getOrderOfDate: (date) => {
    const state = get(); // Retrieve the current state
    return state.order.filter((order) => order.date === date); // Assuming each order has a "day" property
  },
  getAvailableTime: (date) => {
    const state = get(); // Retrieve the current state
    const ordersOfDate = state.getOrderOfDate(date);
    const orderTimes = ordersOfDate.map((order) => order.time);
    return state.defaultTimes.filter((time) => !orderTimes.includes(time)); // Remove the time slots already taken by orders
  },
}));

export default useAppState;
