import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Orderbook = () => {
  return (
    <div>
      <h2>Orderbook</h2>
      <p>
        An orderbook is a list of all existing buy-and-sell orders of a specific asset arranged by price. Users can place limit orders and market orders; which then get stored on the orderbook for execution. 
      </p>
      <ul>
        <li><b>Limit orders</b> are trades that are only executed at a specified price.</li>
        <li><b>Market orders</b> are executed at the best available price in the market.</li>
      </ul>
      <p>
        Limit orders allow buyers or sellers to place orders at a predefined price. These buy/sell orders are executed by matching sell/buy orders of corresponding prices. Fees for the execution of Limit orders are charged upon execution of orders.
      </p>
      <p>
        Order books add value for traders by giving them more control over price via limit orders. AMMs confer advantages concerning composability, capital efficiency, speed, and ease of use for traders and liquidity providers. They enable active market-making strategies and liquidity concentration for liquidity providers.
      </p>
      <p>
        cSwap combines both, allowing users to swap tokens with limit orders and reduce slippage, which reduces volatility and enhances price matching.
      </p>

      <BottomNav
        preNavLink="/cswap-dex"
        prevNavText="What is cSwap DEX?"
        nextNavLink="/liquidity-pools"
        nextNavText="Liquidity Pools"
      />

    </div>
  );
};

export default Orderbook;