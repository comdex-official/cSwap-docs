import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const ImpermanentLoss = () => {
  return (
    <div>
      <h2>Impermanent Loss</h2>
      <p>
        Providing liquidity to pools in AMMs comes with the risk of impermanent loss.
      </p>
      <p>
        Impermanent loss is realized when an asset pair's price ratio in a liquidity pool changes. The ratio of assets in the pool readjusts to equilibrium to maintain the constant product of the assets in the pool. The extent of the risk of impermanent loss is proportional to the volatility of assets in the pool. The potential loss from such changes is deemed "impermanent" as the assets may still revert to their original state. However, users who withdraw liquidity from pools realize the impermanent loss, making it permanent. 
      </p>

      <BottomNav
        preNavLink="/farming-rewards"
        prevNavText="Farming Rewards"
        nextNavLink="/mechanism"
        nextNavText="Mechanism"
      />

    </div>
  );
};

export default ImpermanentLoss;