import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';

const CheckOut = () => {
  return (
    <div class="Checkout">
      <div class="Checkout-container">
        <h1 class="title">My order</h1>
        <div class="Checkout-content">
          <div class="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
          <OrderItem />
        </div>
      </div>
    </div>
  );
}

export default CheckOut;