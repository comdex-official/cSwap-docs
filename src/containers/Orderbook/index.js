import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Orderbook = () => {
  return (
    <div>
      <h2>Orderbook system</h2>
      <p>
        An orderbook records all the buy-and-sell orders of a specific pair of coins. Users can put both limit order and market order; the same gets recorded in the orderbook. The liquidity pool of a pair of tokens acts as an AMM, which then makes the orders in the orderbook of the coin pair automatically by CPM (Constant Product Model)
      </p>

      <BottomNav
        preNavLink="/mechanism"
        prevNavText="Mechanism"
        nextNavLink="/hybrid-dex"
        nextNavText="HybridDex"
      />

    </div>
  );
};

export default Orderbook;