import { Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { EnterD } from "./components/EnterD/EnterD";
import { RegisD } from "./components/RegisD/RegisD";
import "./index.scss";
import { DoctorsPage } from "./pages/DoctorsPage";
import { MainPage } from "./pages/MainPage";
import { store } from "./redux/store";

import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile/Profile";

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/enterD" element={<EnterD />} />
        <Route path="/regisD" element={<RegisD />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Provider>
  );
};
