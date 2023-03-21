import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Mechanism = () => {
  return (
    <div>
      <h2>Mechanism</h2>
      <p>
        For any asset to be traded on cSwap, it must first be whitelisted onto cSwap through the Asset module on the Comdex chain. Users may propose to whitelist assets via governance proposals. Once passed, the assets are whitelisted to enable creation of trading pairs with whitelisted assets.
      </p>
      <p>
        Trading pairs of assets must also pass through governance proposals to be whitelisted. Users may propose whitelisting of asset pairs by creating a proposal with a token deposit, that is returned if the proposal passes. Alternatively, users can also whitelist asset pairs by directly paying a pair creation amount to the protocol permissionless. Every asset pair on the protocol must contain a base asset and a quote asset. This implies that the same two assets may have two different pairing, each with a different base/quote asset.
      </p>
      <p>
        Trading between assets is only achievable once a trading pair of two whitelisted assets exists on the protocol. Once whitelisted, users can also create a liquidity pool for a trading pair. Trading between the assets can also be facilitated without the creation of a liquidity pool, however such orders are fully treated as limit orders.
      </p>

      <BottomNav
        preNavLink="/impermanent-loss"
        prevNavText="Impermanent Loss"
        nextNavLink="/ranged-pools"
        nextNavText="Ranged Pools"
      />

    </div>
  );
};

export default Mechanism;