import React, { useContext, useEffect, useState } from "react";
import CartData from "../../store/cart-data";
import Alert from "../Utils/Alert";
import Button from "../Utils/Button";

function CartItem({ i, foundItem, el }) {
  const ctx = useContext(CartData);
  const [soldOut, setSoldOut] = useState(false);

  useEffect(() => {
    if (
      el.quantity > foundItem?.variant[el.variant].remainingQuantity &&
      el.checkout
    ) {
      ctx.toggleCheckout({ id: el.id, variant: el.variant });
      setSoldOut(true);
    } else if (el.quantity > foundItem?.variant[el.variant].remainingQuantity) {
      setSoldOut(true);
    } else {
      setSoldOut(false);
    }
  }, [ctx, el.checkout, el.id, el.variant, el.quantity, foundItem?.variant]);

  return (
    <>
      {/* Mobile Version */}
      <div
        className="flex justify-center items-center lg:hidden gap-5"
        key={el}
      >
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
          className="w-[55%] min-h-[300px] bg-center"
          style={{
            backgroundImage: `url(${foundItem?.imgCover})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="w-[40%] flex flex-col gap-2">
          <p className="font-bold text-xl">{foundItem?.title}</p>

          <p className="text-slate-600">{`Variant - ${el.variant}`}</p>
          <p className="text-xs italic">
            Unit Price - RM{foundItem?.variant[el.variant].price}
          </p>
          <div className="flex gap-6 items-center">
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
                foundItem?.variant[el.variant].remainingQuantity
              )}
            >
              +
            </Button>
          </div>
          <p className="text-2xl font-bold">
            RM{el.quantity * foundItem?.variant[el.variant].price}
          </p>
          <div>
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

          {soldOut && (
            <Alert variant="error">
              The current stock remaining quantity is{" "}
              {foundItem?.variant[el.variant].remainingQuantity}.
            </Alert>
          )}
        </div>
      </div>

      {/* Desktop Version */}
      <div className="lg:flex justify-center items-center hidden" key={i}>
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
            backgroundImage: `url(${foundItem?.imgCover})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <p className="w-[15%] text-center">{foundItem?.title}</p>
        <div className="w-[35%] flex flex-col">
          <p>{foundItem?.descriptions}</p>
          {soldOut && (
            <Alert variant="error">
              The current stock remaining quantity is{" "}
              {foundItem?.variant[el.variant].remainingQuantity}.
            </Alert>
          )}
        </div>
        <p className="w-[10%] text-center">{el.variant}</p>
        <p className="w-[10%] text-center">
          RM{foundItem?.variant[el.variant].price}
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
              foundItem?.variant[el.variant].remainingQuantity
            )}
          >
            +
          </Button>
        </div>
        <p className="w-[10%] text-center">
          RM{el.quantity * foundItem?.variant[el.variant].price}
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
