import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import LiquidityFarming1 from '../../assets/images/Liquidity-Farming1.png';

const LiquidityFarming = () => {
  return (
    <div>
      <h2>Liquidity Farming</h2>
      <p>
        Liquidity/yield farming is the use of Decentralized Finance (DeFi) technology to generate interest on your token holdings. Increase the capital efficiency of your assets by utilizing idle tokens resting in your wallet. Earning additional rewards like Trading Fees or Tokens can be profitable through liquidity farming.
      </p>

      <p>
        The contributor can earn swapping fees from the pairs they've provided by adding liquidity. The farm part allows you to provide liquidity while also collecting fees. To supply the necessary liquidity for transactions, users would need to be incentivized to participate as liquidity providers and stake their digital asset pairings (e.g CMDX/CMST) in decentralized market making pools. These liquidity providers, who support cSwap adoption, are compensated for opportunity costs by receiving rewards in accordance with each user's relative contribution to the pool. 
      </p>

      <p>
        Users can receive liquidity mining incentives in the form of $CMDX tokens in addition to swap fees. The concept of Master pool and child pool is unique to cSwap platform, here is the detailed research and thought process behind the concept:
      </p>

      <button className="link-tag" onClick={() => window.open("https://forum.comdex.one/t/the-incentivization-plan-for-our-upcoming-dex/287", "_blank")}>https://forum.comdex.one/t/the-incentivization-plan-for-our-upcoming-dex/287 </button>

      <h3 className="mt-3">Incentive Matrix for cSwap:</h3>

      <img src={LiquidityFarming1} alt="Incentive Matrix for cSwap" />

      <BottomNav
        preNavLink="/amm"
        prevNavText="AMM (Automated Market Maker)"
        nextNavLink="/farming-rewards"
        nextNavText="Farming Rewards"
      />

    </div>
  );
};

export default LiquidityFarming;