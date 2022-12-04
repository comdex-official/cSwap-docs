import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const WhatcSwap = () => {
  return (
    <div>
      <h2>What is cSwap DEX?</h2>
      <p>
        cSwap is an IBC-enabled hybrid dex built on the Comdex chain. cSwap uses AMM liquidity pools which bring cross-chain markets and limit orders to DeFi. Through this mechanism, cSwap will be a go-to platform for traders and arbitrageurs, enabling them to implement sophisticated trading strategies.
      </p>
      <p>
        cSwap will allow users to create equal-weighted liquidity pools with minimal fees. There are no bonding periods for liquidity pools which means that users can withdraw their deposits at any point in time. This is done for the safety of the liquidity provider’s assets from any potential crashes in the future. cSwap will maximize the capital efficiency and provide liquidity to the comdex ecosystem by bringing different bridged assets to the platform. 
      </p>
      <p>
        cSwap has been built taking inspiration from the work done by the team at Crescent Hub, with tweaks in functionalities to fulfill the requirements of cSwap by adopting a hybrid model, based on order book and AMM-based exchange. 
      </p>

      <BottomNav
        preNavLink="/introduction"
        prevNavText="Introduction"
        nextNavLink="/orderbook"
        nextNavText="Orderbook"
      />

    </div>
  );
};

export default WhatcSwap;