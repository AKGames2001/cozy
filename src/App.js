import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./resources/css/app.css";
import HomeRoutes from "./components/Routes/HomeRoutes";
import AuthRoutes from "./components/Routes/AuthRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomeRoutes />}></Route>
          <Route path="/auth/*" element={<AuthRoutes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
