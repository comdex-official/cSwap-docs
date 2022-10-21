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
        A swap of 0.3% is deducted from the swap transaction and given to liquidity providers as reward.
      </p>

      <h3>Liquidity Pool Creation fee</h3>
      <p>
        Liquidity pool creation fees are charged when users create liquidity pools of an asset pairs that don't already exist on the DEX. The fee is charged in CMDX and set to be at 2000 CMDX at genesis. The liquidity pool creation fee can be modified through governance.
      </p>

      {/* <h3>Withdrawal Fees</h3>
      <p>
        A withdrawal fee is charged upon withdrawal of  farmed assets from a liquidity pool. The withdrawal fee is charged as a percentage of the value of the farmed assets withdrawn and deducted at the time of withdrawal. The withdrawal fee can be modified through governance. 
      </p> */}

      <BottomNav
        preNavLink="voting"
        prevNavText="Voting"
        nextNavLink="faq"
        nextNavText="FAQs"
      />

    </div>
  );
};

export default Fees;