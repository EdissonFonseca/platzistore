import React, { useContext } from 'react';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;    
  }

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <img src={arrow} alt="arrow" />
        <p className={styles['title']}>My order</p>
      </div>
      <div className={styles['MyOrder-content']}>
        { state.cart.map((product,index)  => (
          <OrderItem product={product} key={index} indexValue={index} />
        ))}
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <Link className={styles['primary-button']} href="/checkout">
            Checkout
          </Link>
        </div>
    </aside>
  );
}

export default MyOrder;