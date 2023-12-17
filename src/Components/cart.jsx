import React, { useState } from "react";
import data from "../data";
import CartItem from "./cartItem";
import { useCardContext } from "../CardContext";
import { RiShoppingCartLine } from "react-icons/ri";

const Cart = () => {
  const { data, setData, totalByQuantity } = useCardContext();

  return (
    <>
      <div className="page-title-overlap bg-dark pt-1">
        <div className="container d-lg-flex justify-content-between py-3">
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0 mt-3">سبد خرید</h1>
          </div>
        </div>
      </div>

      <div className="container pt-4 pb-3 py-sm-4 bg-light rounded shadow-lg">
        <div className="rounded-3  mt-4 mb-5">
          <div className="px-3 px-sm-4 px-xl-5 pt-1 pb-4 pb-sm-5">
            {data.length > 0 ? (
              <div className="row">
                <div className="col-lg-8 col-md-7 pt-sm-2">
                  {data.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                  })}
                </div>
                {/* <!-- Sidebar--> */}
                <div className="col-lg-4 col-md-5 pt-3 pt-sm-4 border-end">
                  <div className="text-center mb-4 pb-3 border-bottom">
                    <h3 className="h5 mb-3 pb-1">جمع کل</h3>
                    <h4 className="fw-normal">
                      {totalByQuantity.toLocaleString()} تومان
                    </h4>
                  </div>
                  <a
                    onClick={() => setData([])}
                    className="btn btn-primary btn-shadow d-block w-100 mt-4"
                  >
                    حذف همه آیتم ها
                  </a>
                </div>
              </div>
            ) : (
              <>
                <RiShoppingCartLine style={{ fontSize: "8rem" }} />
                <h5 className="text-center">
                  هیچ آیتمی در سبد خرید وجود ندارد
                </h5>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;