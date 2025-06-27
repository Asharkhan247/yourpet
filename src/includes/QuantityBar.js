import React, { useState } from "react";

function QuantityBar() {
  const [quantity, setQuantity] = useState(1);

  const incrementValue = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementValue = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="sale_quantity_main">
      <div className="sale_quantity">
        <button onClick={decrementValue} className="minus">
          <box-icon name='minus'></box-icon>
        </button>

        <input type="text" value={quantity} readOnly />

        <button onClick={incrementValue} className="add">
        <box-icon name='plus'></box-icon>
        </button>
      </div>

      <a href="cart.php">
        <box-icon name='cart' ></box-icon>
      </a>
    </div>
  );
}

export default QuantityBar;