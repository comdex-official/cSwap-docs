import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import GovernImg from 'ch'

const Governance = () => {
  return (
    <div>
      <h2>Governance</h2>

      <p>Actively participate in key decision making of the protocol.</p>

      <BottomNav
        preNavLink="mechanism"
        prevNavText="Mechanism"
        nextNavLink="transaction-fees"
        nextNavText="Transaction Fees"
      />

    </div>
  );
};

export default Governance;