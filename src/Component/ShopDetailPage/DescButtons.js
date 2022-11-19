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
          if (variant[el] === 0) {
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
                  remainingQuantity: variant[el],
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
          textSize="md"
          onClick={() => {
            minusQuantity();
            setHasClicked(false);
          }}
        >
          -
        </Button>
        <Button
          variant="white"
          textSize="md"
          onClick={() => {
            addQuantity();
            setHasClicked(false);
          }}
        >
          +
        </Button>
      </div>

      {Object.keys(variant).length === 1 && Object.values(variant)[0] === 0 ? (
        <Button variant="disabled">Sold Out</Button>
      ) : (
        <Button
          variant="gradient"
          onClick={addToCart.bind(null, {
            id,
            quantity,
            variant: itemVariant.type,
            remainingQuantity: itemVariant.remainingQuantity,
          })}
        >
          Add to Cart
        </Button>
      )}

      {statusMessage && hasClicked && (
        <Alert variant={statusMessage?.status}>{statusMessage?.message}</Alert>
      )}
    </div>
  );
}

export default DescButtons;
