import { OrderFormValues } from "../../components/OrderForm";
import { create } from "zustand";

type AppState = {
  order: OrderFormValues[];
  addOrder: (newOrder: OrderFormValues) => void;
  getOrderOfDate: (date: string) => OrderFormValues[];
  getAvailableTime: (date: string) => string[];
};

const useAppState = create<AppState>((set, get) => ({
  order: [],
  addOrder: (newOrder) =>
    set((state) => ({ order: [...state.order, newOrder] })),
  getOrderOfDate: (date) => {
    const state = get(); // Retrieve the current state
    return state.order.filter((order) => order.date === date); // Assuming each order has a "day" property
  },
  getAvailableTime: (date) => {
    const state = get(); // Retrieve the current state
    const availableTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const ordersOfDate = state.getOrderOfDate(date);
    const orderTimes = ordersOfDate.map((order) => order.time);
    return availableTimes.filter((time) => !orderTimes.includes(time)); // Remove the time slots already taken by orders
  },
}));

export default useAppState;
