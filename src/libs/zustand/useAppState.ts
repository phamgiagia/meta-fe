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
  
  setCurrentDate: (date) => 
    set((state) => ({ ...state, currentDate: date })),
  
  addOrder: (newOrder) =>
    set((state) => ({ 
      ...state, // Preserve other state properties
      order: [...state.order, newOrder]
    })),
  
  getOrderOfDate: (date) => {
    const state = get();
    return state.order.filter((order) => {
      // Add strict equality comparison
      return order.date === date;
    });
  },
  
  getAvailableTime: (date) => {
    const state = get();
    const ordersOfDate = state.getOrderOfDate(date);
    const orderTimes = ordersOfDate.map((order) => order.time);
    return state.defaultTimes.filter((time) => !orderTimes.includes(time));
  },
}));

export default useAppState;