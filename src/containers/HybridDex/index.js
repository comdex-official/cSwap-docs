import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const HybridDex = () => {
  return (
    <div>
      <h2>Hybrid Dex</h2>
      <p>
        The AMM mechanism works in a way in which the users swap one asset in a liquidity pool for its correspondent. cSwap will provide users with the additional functionality of an orderbook system where users can place limit orders, an attempt where users can purchase or sell an asset at the best possible price rather than at a set exchange rate offered by the system. This combination of AMM and orderbook system is known as hybrid dex. Hybrid dex has a matching engine that matches any set of buy/sell orders on the orderbook. This is done by calculating groups of limit orders and matching them with other orders in the order book.
      </p>

      <BottomNav
        preNavLink="/orderbook"
        prevNavText="Orderbook system"
        nextNavLink="/liquidity-pool"
        nextNavText="Liquidity Pool"
      />

    </div>
  );
};

export default HybridDex;