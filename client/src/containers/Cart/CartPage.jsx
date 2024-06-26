import React, { useEffect, useState } from "react";
// import "../../styles/CartPage/cart.css";
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
        setIsLoading(false);
      });
  }, [props.userData]);

  useEffect(() => {
    let total = 0;
    cartData.forEach((item) => {
      total += item.price;
    });
    setCostTotal(total);
  }, [cartData]);

  return isLoading ? (
    <></>
  ) : (
    <>
      <div className="flex justify-center py-5 w-full gap-5 bg-[rgb(255,236,236)]">
        {/* for product window */}
        <CartProduct cartData={cartData} costTotal={costTotal} />

        {/* for payment window */}
        <CartPayment costTotal={costTotal} />
      </div>
    </>
  );
}

export default CartPage;
