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
        preNavLink="add-liquidity"
        prevNavText="How to Add Liquidity"
        nextNavLink="developer-docs"
        nextNavText="Developer Docs"
      />

    </div>
  );
};

export default Governance;