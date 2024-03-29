import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./resources/css/app.css";
import HomeRoutes from "./components/Routes/HomeRoutes";
import AuthRoutes from "./components/Routes/AuthRoutes";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLogin = () => {
    let a = 10;
    console.log(typeof a);
    setIsLoggedIn(true);
  };

  function setLogout() {
    // console.log("ok");
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={<HomeRoutes userStatus={isLoggedIn} auth={setLogout} />}
          ></Route>
          <Route
            path="/auth/*"
            element={
              <AuthRoutes userStatus={isLoggedIn} authLogin={setLogin} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
