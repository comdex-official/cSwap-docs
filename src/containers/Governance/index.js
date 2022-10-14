import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import GovernImg from '../../assets/images/govern.png'

const Governance = () => {
  return (
    <div>
      <h2>Governance</h2>

      <p>Actively participate in key decision making of the protocol.</p>

      <img src={GovernImg} alt="govern" />

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