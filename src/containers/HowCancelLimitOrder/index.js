import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import CancelLimitOrderImg from '../../assets/images/cancel-imit-order-1.png';

const HowCancelLimitOrder = () => {
  return (
    <div>
      <h2>How to Cancel a Limit Order</h2>
      <ol>
        <li>Navigate to the Trade page, click on the “Limit Order” tab.</li>
        <li>Your open limit orders are displayed under the “Active orders” tab,</li>
        <li>Select the one you want to cancel under the “Status” tab.
          <img className="mt-2" src={CancelLimitOrderImg} alt="" />
          <div>Click “Cancel” and submit your transaction on Keplr.</div>
        </li>
      </ol>

      <BottomNav
        preNavLink="mechanism"
        prevNavText="Mechanism"
        nextNavLink="transaction-fees"
        nextNavText="Transaction Fees"
      />

    </div>
  );
};

export default HowCancelLimitOrder;