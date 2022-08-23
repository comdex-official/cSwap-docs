import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Voting = () => {
  return (
    <div>
      <h2>Voting</h2>
      <p>
        CMDX will be the governance token for the cSwap dex. Holders or stakers of CMDX will be eligible for voting on the various on-chain proposals. CMDX holders can vote on various proposals such as dex upgrades, setting various fees and parameters, and incentivization strategies for various liquidity pools.
      </p>

      <BottomNav
        preNavLink="mechanism"
        prevNavText="Mechanism"
        nextNavLink="transaction-fees"
        nextNavText="Transaction Fees"
      />

    </div>
  );
};

export default Voting;