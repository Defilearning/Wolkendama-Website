import React, { useContext } from "react";
import CartData from "../../store/cart-data";
import Button from "../Utils/Button";

function CartItem({ i, foundItem, el }) {
  const ctx = useContext(CartData);

  return (
    <>
      <div className="flex justify-center items-center" key={i}>
        <div className="w-[5%] flex items-center justify-center">
          <input
            type="checkbox"
            checked={el.checkout ? "checked" : false}
            className="checkbox checkbox-md checkbox-primary"
            onClick={ctx.toggleCheckout.bind(null, {
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
        <p className="w-[35%] text-center">{foundItem.descriptions}</p>
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
