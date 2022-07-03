import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Introduction = () => {
  return (
    <div>
      <h2>Introduction</h2>
      <p>
        cSwap is a decentralized, IBC-enabled exchange built on the Comdex chain. It combines the mechanism of the AMM liquidity pool with the orderbook system, allowing users to place market and limit orders and market orders along with earning a yield on liquidity pools. This dex will provide users with an experience similar to the traditional centralized exchange. cSwap will become a one-stop exchange that will provide its users with a seamless experience of trading cosmos-based assets as well as other cross-chain assets.
      </p>

      <BottomNav
        preNavLink="/introduction"
        prevNavText="Introduction"
        nextNavLink="/mechanism"
        nextNavText="Mechanism"
      />

    </div>
  );
};

export default Introduction;