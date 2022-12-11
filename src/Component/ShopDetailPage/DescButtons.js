import React, { useContext, useState } from "react";
import CartData from "../../store/cart-data";
import Alert from "../Utils/Alert";
import Button from "../Utils/Button";

function DescButtons({
  descriptions,
  setItemVariant,
  quantity,
  variant,
  setQuantity,
  minusQuantity,
  addQuantity,
  itemVariant,
  id,
}) {
  const ctx = useContext(CartData);
  const [hasClicked, setHasClicked] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const addToCart = (item) => {
    const res = ctx.addToCart(item);
    setStatusMessage(res);
    setHasClicked(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1>
        <strong>Descriptions</strong>
      </h1>
      <p>{descriptions}</p>

      <h1>
        <strong>Variant</strong>
      </h1>
      <div className="flex gap-2 flex-wrap">
        {Object.keys(variant).map((el) => {
          if (variant[el]?.remainingQuantity === 0) {
            return (
              <Button key={el} variant="disabled" textSize="base">
                {el}
              </Button>
            );
          }

          return (
            <Button
              key={el}
              variant="secondary"
              textSize="base"
              onClick={() => {
                setItemVariant({
                  type: el,
                  remainingQuantity: variant[el].remainingQuantity,
                  price: variant[el].price,
                });
                setQuantity(1);
                setHasClicked(false);
                setStatusMessage(null);
              }}
              className={`${itemVariant.type === el ? "!bg-pink-200" : ""}`}
            >
              {el}
            </Button>
          );
        })}
      </div>
      <h1>
        <strong>Quantity</strong>
      </h1>
      <div className="flex flex-col gap-2">
        {itemVariant.remainingQuantity && (
          <p className="text-xs">
            Stock remaining: {itemVariant.remainingQuantity}
          </p>
        )}

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="input input-bordered bg-slate-100"
          />
          <Button
            variant="white"
            textSize="base"
            onClick={() => {
              minusQuantity();
              setHasClicked(false);
            }}
          >
            -
          </Button>
          <Button
            variant="white"
            textSize="base"
            onClick={() => {
              addQuantity();
              setHasClicked(false);
            }}
          >
            +
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {itemVariant.price && (
          <>
            <h1>
              <strong className="text-xl">Price</strong>
            </h1>
            <p className="text-xs">
              <strong className="text-lg">
                Total RM{itemVariant.price * quantity}
              </strong>{" "}
              - RM
              {itemVariant.price} per unit
            </p>
          </>
        )}
        {Object.keys(variant).length === 1 &&
        Object.values(variant)[0].remainingQuantity === 0 ? (
          <Button variant="disabled">Sold Out</Button>
        ) : (
          <Button
            variant="gradient"
            onClick={addToCart.bind(null, {
              id,
              quantity,
              variant: itemVariant.type,
              remainingQuantity: itemVariant.remainingQuantity,
              checkout: false,
            })}
          >
            Add to Cart
          </Button>
        )}
      </div>
      {statusMessage && hasClicked && (
        <Alert variant={statusMessage?.status}>{statusMessage?.message}</Alert>
      )}
    </div>
  );
}

export default DescButtons;
