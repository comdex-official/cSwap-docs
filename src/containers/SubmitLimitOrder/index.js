import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import SubmitLImitImg1 from '../../assets/images/SubmitLimit-1.png';
import SubmitLImitImg2 from '../../assets/images/SubmitLimit-2.png';
import SubmitLImitImg3 from '../../assets/images/SubmitLimit-3.png';
import SubmitLImitImg4 from '../../assets/images/SubmitLimit-4.png';

const SubmitLimitOrder = () => {
  return (
    <div>
      <h2>How to Submit a Limit Order</h2>
      <p>
        <b>NOTE: Limit orders currently have a tolerance range out of which the orders would not be executed.</b>
      </p>

      <p>In the “Trade” tab, turn on the toggle for “Limit Order”.</p>
      <img src={SubmitLImitImg1} alt="" />

      <p>
        <b>Example 1: To place limit buy order for 5 $CMDX per $CMST(as per current pool price)</b>
      </p>

      <ol type="1">
        <li>
          Select “CMST” under “Sell”.
        </li>
        <li>Select “CMDX” under “And Get”.</li>
        <li>Enter the amount of $CMST you wish to swap out, the current pool price will be displayed. You can enter the limit amount.</li>
        <li>Enter “Sell” 1 $CMST at 0.20 $CMST/$CMDX ratio to get 5 $CMDX per $CMST.
          <img src={SubmitLImitImg2} alt="" />
        </li>
      </ol>

      <p>Click “Swap”. You can now see your order in the“Active trades”.</p>

      <p><b>Example 2: To place “Limit sell” order for $CMDX to $CMST for 10% higher than current market price.</b></p>
      <ol type="1">
        <li>Select “CMDX” under “Sell”.</li>
        <li>Select “CMST” under “And get”.</li>
        <li>Enter the amount of CMDX you wish to swap out.</li>
        <li>For this example, since we want to sell CMDX at 10% higher than current pool price, we will enter price +10% higher than pool price.
            <img src={SubmitLImitImg3} alt="" />
        </li>
        <li>Click “Swap”. You can now see your order in the “Active orders” tab of Orders section.
          <p>Note: Users can change the expiry time of the trade by clicking on the “Settings” button.</p>
          <img src={SubmitLImitImg4} alt="" />
        </li>
      </ol>

      <BottomNav
        preNavLink="trade-swap"
        prevNavText="Using cSwap"
        nextNavLink="cancel-limit-order"
        nextNavText="How to Cancel a Limit Order"
      />

    </div>
  );
};

export default SubmitLimitOrder;