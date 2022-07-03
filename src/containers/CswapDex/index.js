import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const cSwapDex = () => {
  return (
    <div>
      <h2>What is cSwap DEX?</h2>
      <p>
        cSwap is an IBC-enabled hybrid dex built on the Comdex protocol. cSwap uses AMM liquidity pools with an orderbook UI which brings cross-chain market and limit orders to Defi. Through this mechanism, cSwap will be a go-to platform for traders and arbitrageurs, enabling them to implement sophisticated trading strategies.  
      </p>

      <p>
        cSwap will allow users to create equal-weighted liquidity pools with minimal fees. Also, there will be no bonding period for liquidity pools which means that users can withdraw their deposits at any point in time. This is done for the safety of the liquidity provider’s assets from any potential crashes in the future. cSwap will maximize the capital efficiency and provide liquidity to the comdex ecosystem by bringing different bridged assets to the platform. 
      </p>

      <BottomNav
        preNavLink="/"
        nextNavLink="Faq"
        prevNavText="Home"
        nextNavText="FAQs"
      />

    </div>
  );
};

export default cSwapDex;