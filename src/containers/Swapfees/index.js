import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Swapfees = () => {
  return (
    <div>
      <h2>Swap Fees</h2>
      <p>
        A swap fee is a fee the trader pays to make a swap in a liquidity pool. This fee is charged in the form of a small percentage of the asset the user is swapping in the pool. Initially, this swap fee is set at 0.3%, but it can be changed through governance in the future. Out of the 0.3% fee, 0.15% is distributed to the liquidity providers in the proportion of their share in the pool, and the remaining 0.15% is used to buy and burn CMDX tokens.
      </p>

      <BottomNav
        preNavLink="transaction-fees"
        prevNavText="Transaction Fees"
        nextNavLink="paircreation-fees"
        nextNavText="Pair Creation fee"
      />

    </div>
  );
};

export default Swapfees;