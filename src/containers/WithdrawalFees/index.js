import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const WithdrawalFees = () => {
  return (
    <div>
      <h2>Withdrawal Fees</h2>
      <p>
        A withdrawal fee is a fee that is charged by the users when they withdraw their farmed assets from the liquidity pool, which includes both the master pool and child pools. A small percentage of the farmed assets will be deducted each time a user withdraws from the pool. This withdrawal fee can be changed through governance in the future.
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