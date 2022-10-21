import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import AddLiquidityimg1 from '../../assets/images/add-liquidity-1.png';
import AddLiquidityimg2 from '../../assets/images/add-liquidity-2.png';
import AddLiquidityimg3 from '../../assets/images/add-liquidity-3.png';
import AddLiquidityimg4 from '../../assets/images/add-liquidity-4.png';
import AddLiquidityimg5 from '../../assets/images/add-liquidity-5.png';
import AddLiquidityimg6 from '../../assets/images/add-liquidity-6.png';
import AddLiquidityimg7 from '../../assets/images/add-liquidity-7.png';

const HowAddLiquidity = () => {
  return (
    <div>
      <h2>How to Add Liquidity</h2>
      <p>
        By adding liquidity, you are putting an equal USD value of two tokens to make LP tokens. Here's how to do it: 
      </p>

      <p><b>Steps:</b></p>
      <ol type="1">
        <li>Connect your  keplr wallet, make sure that it is on the Comdex chain.</li>
        <li>Go to ‘Farm’ section.
          <img className="mt-2" src={AddLiquidityimg1} alt="" />
        </li>
        <li>Next, Select the pool you want to add liquidity.</li>
        <li>Under the deposit tab, users can see the selected pool starts under “Pool detail”, and also view their liquidity details under “Your details” tab.
          <img className="mt-2" src={AddLiquidityimg2} alt="" />
        </li>
        <li>Next, enter the amount you'd like, you can also click on "Max" to max out. The other token amount will automatically adjust to the same value in USD.
          <img className="mt-2" src={AddLiquidityimg3} alt="" />
        </li>
        <li> Click the “Add Liquidity” button and approve the Keplr transaction.
        </li>
        <li>You can review your added pool liquidity in the “Your details” section under “My liquidity” tab.
          <img className="mt-2" src={AddLiquidityimg4} alt="" />
        </li>
        <li>After this step click the “Farm” button, select the % of liquidity you want to farm, you can review your pool tokens and the USD denominated amount.</li>
        <li>Select the ‘Farm’ button after confirming the amount you want to add.</li>
        <li>Approve Keplr transaction.
          <img className="mt-2" src={AddLiquidityimg5} alt="" />
        </li>
        <li>After successful transaction you can see your farming amount under the “Farmed LP amount”, in the “Your details” section.
          <img className="mt-2" src={AddLiquidityimg6} alt="" />
        </li>
        <li>You can review your Farmed balance in the “Portfolio” section under the “Farm” tab and also view your total balance across all pools in the “Farm balance” section.Users can also edit their pool positions by clicking on the “Manage” tab.
          <img className="mt-2" src={AddLiquidityimg7} alt="" />
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

export default HowAddLiquidity;