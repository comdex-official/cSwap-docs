import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Fees = () => {
  return (
    <div>
      <h2>Fees</h2>

      <h3>Transaction Fees</h3>
      <p>
        Every user must pay a transaction fee to initiate a transaction on a chain. In cSwap, the transaction fee is charged in CMDX, which is then distributed as a reward to CMDX stakers. 
      </p>
      
      <h3>Swap Fees</h3>
      <p>
        A swap of 0.3% is deducted from the swap transaction and given to liquidity farmers as reward.
      </p>

      <h3>Liquidity Pool Creation fee</h3>
      <p>
        Liquidity pool creation fees are charged when users create liquidity pools of asset pairs that don't already exist on the DEX. The fee is charged in $CMDX and set to be at 2000 $CMDX at genesis. The liquidity pool creation fee can be modified through governance.
      </p>

      <BottomNav
        preNavLink="governance"
        prevNavText="Governance"
        nextNavLink="trade-swap"
        nextNavText="Using cSwap"
      />

    </div>
  );
};

export default Fees;