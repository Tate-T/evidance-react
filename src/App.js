import { Route, Routes } from "react-router-dom";

import "./index.scss";
import { DoctorsPage } from "./pages/DoctorsPage";
import { MainPage } from "./pages/MainPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
    </Routes>
  );
};
