import PropTypes from 'prop-types'
import styles from '/src/styles/cart.module.scss'

import { useState, useEffect } from 'react';

const Cart = ({ cart, deleteItem }) => {
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);

  // subtotal
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      const itemPrice = cart[i].price;
      sum += itemPrice;
    }
    const rounded = reduceDec(sum);
    setPrice(rounded);
  }, [cart]);

  // taxes
  useEffect(() => {
    const calcTaxes = price * 0.0625;
    const rounded = reduceDec(calcTaxes);
    setTaxes(rounded);
  }, [price]);

  // total
  useEffect(() => {
    const calcTotal = price + taxes;
    const rounded = reduceDec(calcTotal);
    setTotal(rounded);
  }, [taxes, price]);

  // round number to smaller decimal
  const reduceDec = (num) => {
    const rounded = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 2,
    }).format(num);
    Number(rounded);
    return Number(rounded);
  };

  return (
    <div className={styles.cart}>
      <section className={styles.cartItems}>
        {cart.map((item) => (
          <div className={styles.card} key={item.id}>

            <button className={styles.delete} onClick={() => deleteItem(item)}>
              &#10005;
            </button>

            <div className={styles.info}>

              <div className={styles.image}>
                <img src={item.preview} alt="item-preview" />
              </div>
              <div className={styles.text}>
                <p>{item.title}</p>
                <p>{item.model}</p>
                <span className="price">${item.price}</span>
              </div>

            </div>
          </div>
        ))}
      </section>
      <section className={styles.checkout}>
        <div className={styles.summary}>
          <div>
            <span>Subtotal</span>
            <span>${price}</span>
          </div>
          <div>
            <span>Delivery</span>
            <span> -- </span>
          </div>
          <div>
            <span>Taxes</span>
            <span>${taxes}</span>
          </div>
          <div>
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
  deleteItem: PropTypes.func,
}

export default Cart;
