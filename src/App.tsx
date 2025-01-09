
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
import OrderForm from "./components/BookingForm";

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
              </>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
