import React, { useEffect, useState } from "react";
import "../../styles/CartPage/cart.css";
import CartProduct from "../../components/pages/Cart/CartProduct";
import CartPayment from "../../components/pages/Cart/CartPayment";

function CartPage(props) {
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [costTotal, setCostTotal] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/cart/fetch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.userData,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCartData(data.cart);
        data.cart.map(a => {  
            setCostTotal(costTotal + a.price);
            return null
        })
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <>
      <div className="cart">

        {/* for product window */}
        <CartProduct cartData={cartData} costTotal={costTotal} />
        
        {/* for payment window */}
        <CartPayment costTotal={costTotal}/>
        
      </div>
    </>
  );
}

export default CartPage;
