import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";
import HomeRoutes from "./routes/HomeRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import ProductRoutes from "./routes/ProductRoutes";
import { useState } from "react";
import CartRoutes from "./routes/CartRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState("");

  const setLogin = (email) => {
    let a = 10;
    console.log(typeof a);
    setIsLoggedIn(true);
    setUserData(email);
  };

  function setLogout() {
    // console.log("ok");
    setIsLoggedIn(false);
  }

  console.log("Hello");

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
          <Route
            path="/product/*"
            element={
              <ProductRoutes
                userStatus={isLoggedIn}
                auth={setLogout}
                userData={userData}
              />
            }
          ></Route>
          <Route
            path="/cart/*"
            element={
              <CartRoutes
                userStatus={isLoggedIn}
                auth={setLogout}
                userData={userData}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
