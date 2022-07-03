import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Voting = () => {
  return (
    <div>
      <h2>Voting</h2>
      <p>
        In the cSwap dex, CMDX will be the governance token, the holders or stakers of which will be eligible for voting on the various on-chain proposals. CMDX holders can vote on various proposals such as dex upgrades, setting various fees, and incentivization strategies for various liquidity pools.
      </p>

      <BottomNav
        preNavLink="farming-rewards"
        prevNavText="Farming Rewards"
        nextNavLink="transaction-fees"
        nextNavText="Transaction Fees"
      />

    </div>
  );
};

export default Voting;