import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { AuthPage } from "./Pages/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
