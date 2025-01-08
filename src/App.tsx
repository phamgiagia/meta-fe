import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import OrderForm from "./components/OrderForm";
import useAppState from "./libs/zustand/useAppState";
import BookingSlot from "./components/BookingSlot";
import AvailableSlot from "./components/AvailableSlot";

function RestaurantApp() {
  return (
    <>
      {/* <Header /> */}
      <Main />
      {/* <Footer /> */}
    </>
  );
}

function RestaurantAppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const App = () => {
  const order = useAppState((state) => state.order);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantAppLayout />}>
          <Route index element={<RestaurantApp />} />
          <Route
            path="/order"
            element={
              <>
                <OrderForm />
                {order.map((item) => {
                  return item.guests ? (
                    <BookingSlot
                      date={item.date}
                      time={item.time}
                      guests={item.guests}
                      occasion={item.occasion}
                      key={item.time + item.date}
                    />
                  ) : (
                    <AvailableSlot time={item.time} />
                  );
                })}
              </>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
