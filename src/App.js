import { Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { EnterD } from "./components/EnterD/EnterD";
import "./index.scss";
import { DoctorsPage } from "./pages/DoctorsPage";
import { MainPage } from "./pages/MainPage";
import { store } from "./redux/store";
import { RegisD } from './components/RegisD/RegisD';

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/enterD" element={<EnterD />} />
        <Route path="/regisD" element={<RegisD />} />
      </Routes>
    </Provider>
  );
};
