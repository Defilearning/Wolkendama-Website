import React, { useContext, useEffect, useState } from "react";
import CartData from "../../store/cart-data";
import Alert from "../Utils/Alert";
import Button from "../Utils/Button";

function CartItem({ i, foundItem, el }) {
  const ctx = useContext(CartData);
  const [soldOut, setSoldOut] = useState(false);

  useEffect(() => {
    if (
      el.quantity > foundItem.variant[el.variant].remainingQuantity &&
      el.checkout
    ) {
      ctx.toggleCheckout({ id: el.id, variant: el.variant });
      setSoldOut(true);
    } else if (el.quantity > foundItem.variant[el.variant].remainingQuantity) {
      setSoldOut(true);
    } else {
      setSoldOut(false);
    }
  }, [ctx, el.checkout, el.id, el.variant, el.quantity, foundItem.variant]);

  return (
    <>
      <div className="flex justify-center items-center" key={i}>
        <div className="w-[5%] flex items-center justify-center">
          <input
            type="checkbox"
            disabled={soldOut}
            checked={el.checkout && !soldOut ? "checked" : false}
            className="checkbox checkbox-md checkbox-primary"
            onChange={ctx.toggleCheckout.bind(null, {
              id: el.id,
              variant: el.variant,
            })}
          />
        </div>
        <div
          className="w-[5%] min-h-12 bg-center"
          style={{
            backgroundImage: `url(${foundItem.imgCover})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <p className="w-[15%] text-center">{foundItem.title}</p>
        <div className="w-[35%] flex flex-col">
          <p>{foundItem.descriptions}</p>
          {soldOut && (
            <Alert variant="error">
              The current stock remaining quantity is{" "}
              {foundItem.variant[el.variant].remainingQuantity}.
            </Alert>
          )}
        </div>
        <p className="w-[10%] text-center">{el.variant}</p>
        <p className="w-[10%] text-center">
          RM{foundItem.variant[el.variant].price}
        </p>
        <div className="w-[10%] flex justify-between items-center">
          <Button
            variant="secondary"
            textSize="md"
            onClick={ctx.minusCartQuantity.bind(null, {
              id: el.id,
              variant: el.variant,
            })}
          >
            -
          </Button>
          {el.quantity}
          <Button
            variant="secondary"
            textSize="md"
            onClick={ctx.addCartQuantity.bind(
              null,
              {
                id: el.id,
                variant: el.variant,
              },
              foundItem.variant[el.variant].remainingQuantity
            )}
          >
            +
          </Button>
        </div>
        <p className="w-[10%] text-center">
          RM{el.quantity * foundItem.variant[el.variant].price}
        </p>
        <div className="w-[10%] flex justify-center">
          <Button
            variant="white"
            textSize="base"
            onClick={ctx.deleteCartItem.bind(null, {
              id: el.id,
              variant: el.variant,
            })}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
