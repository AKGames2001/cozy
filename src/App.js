import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./resources/css/app.css";
import HomeRoutes from "./components/Routes/HomeRoutes";
import AuthRoutes from "./components/Routes/AuthRoutes";
import ProductRoutes from "./components/Routes/ProductRoutes";
import { useState } from "react";
import TransactionRoutes from "./components/Routes/TransactionRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState("")

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
            element={<ProductRoutes userStatus={isLoggedIn} auth={setLogout} userData={userData}/>}
          ></Route>
          <Route
            path="/transaction/*"
            element={
              <TransactionRoutes userStatus={isLoggedIn} auth={setLogout} userData={userData}/>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
