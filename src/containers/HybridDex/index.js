import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const HybridDex = () => {
  return (
    <div>
      <h2>Hybrid Dex</h2>
      <p>
        cSwap allows users to swap assets through pairs in liquidity pools while maintaining greater control on price in a capital efficient manner. Users can provide liquidity to pools for tradeable asset pairs. The AMM of the pool then determines the prices of the assets in the pool based on changes in liquidity from trades. Every swap order placed by users is ultimately captured as a limit order with varying parameters. 
      </p>
      <p>
        Users opting to place limit orders themselves may do so by defining the quantity, price and duration of their orders. Once placed, the order remains active until it is either fully fulfilled, partially fulfilled or it expires. The limit order is designed to ensure that users’ orders are fulfilled without deviating from the current pool prices observed.
      </p>
      <p>
        Users option to swap without limit orders can do so by simply defining the quantity of asset they wish to swap. Once the order is placed, the protocol automatically places a corresponding limit order at the back end, with a duration of 1 block for the current pool price, and with a predefined maximum slippage tolerance (10% at genesis, can be modified through governance). Users may opt for a lower slippage tolerance for their trades through CLI. The order is then placed as a limit order with a duration of 1 block. In cases where orders are partially fulfilled, the amount of unsold assets is returned to the user.
      </p>
      <p>
        The AMM mechanism allows users to swap assets through liquidity pool pairs of assets. cSwap will provide users with the functionality of an order book system where users can place limit or market orders while also allowing users to purchase or sell an asset at the best possible price rather than at a set exchange rate offered by the system. This AMM and order book system combination makes cSwap a hybrid dex. Hybrid dex has a matching engine that matches any buy/sell orders on the order book. This is done by calculating groups of limit orders and matching them with other orders in the order book.
      </p>

      <BottomNav
        preNavLink="/amm"
        prevNavText="AMM (Automated Market Maker)"
        nextNavLink="/liquidity-farming"
        nextNavText="Liquidity Farming"
      />

    </div>
  );
};

export default HybridDex;