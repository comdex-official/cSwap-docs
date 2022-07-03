import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Transactionfees = () => {
  return (
    <div>
      <h2>Transaction Fees</h2>
      <p>
        Every user must pay a transaction fee to initiate a transaction on a chain. In cSwap, the transaction fee is charged in CMDX, which is then distributed as a reward to CMDX stakers. 
      </p>

      <BottomNav
        preNavLink="voting"
        prevNavText="Voting"
        nextNavLink="swap-fees"
        nextNavText="Swap Fees"
      />

    </div>
  );
};

export default Transactionfees;