import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const WithdrawalFees = () => {
  return (
    <div>
      <h2>Withdrawal Fees</h2>
      <p>
        A withdrawal fee is charged upon withdrawal of  farmed assets from a liquidity pool. The withdrawal fee is charged as a percentage of the value of the farmed assets withdrawn and deducted at the time of withdrawal. The withdrawal fee can be modified through governance.
      </p>

      <BottomNav
        preNavLink="liquiditypool-creation-fee"
        prevNavText="Liquidity Pool Creation fee"
        nextNavLink="Faq"
        nextNavText="FAQs"
      />

    </div>
  );
};

export default WithdrawalFees;