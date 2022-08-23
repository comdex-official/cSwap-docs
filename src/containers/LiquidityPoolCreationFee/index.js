import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const LiquidityPoolCreationFee = () => {
  return (
    <div>
      <h2>Liquidity Pool Creation fee</h2>
      <p>
        Liquidity pool creation fees are charged when users create liquidity pools of an asset pairs that don't already exist on the DEX. The fee is charged in CMDX and set to be at 2000 CMDX at genesis. The liquidity pool creation fee can be modified through governance.
      </p>

      <BottomNav
        preNavLink="swap-fees"
        prevNavText="Swap Fees"
        nextNavLink="withdrawal-fees"
        nextNavText="Withdrawal Fees"
      />

    </div>
  );
};

export default LiquidityPoolCreationFee;