import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Faq = () => {
  return (
    <div>
      <h2>FAQs</h2>

      <h3>1. How to interact with cSwap?</h3>
      <p className="pl-4">In order to interact with cSwap, connect your keplr wallet (or any cosmos ecosystem compatible wallet) to the platform and deposit the assets you want on the dex. Once the assets are deposited, you can trade/swap with the desired token or LP your assets in the liquidity pools to earn rewards on the same.</p>

      <h3>2. How does cSwap differ from other dexes?</h3>
      <p className="pl-3">cSwap is a hybrid dex which is a combination of AMM and orderbook mechanism. It allows users to place limit as well as market orders. Also, cSwap is IBC enabled which allows the users to trade cross-chain or multi-chain assets seamlessly on the dex. cSwap also provides users with a unique LP reward system that has not been seen on any other platform. cSwap has been built with the aim of providing users with a platform that is sustainable and reliable in the long term. Also, cSwap may play an important role in providing liquidity to comdex dapps as well as to the entire cosmos ecosystem. </p>

      <h3>3. What type of assets can be traded on the dex?</h3>
      <p className="pl-3">Any cosmos-based assets can be traded on cSwap. Also, since cSwap is IBC enabled, it allows users to trade multi-chain or cross-chain assets as well. </p>

      <h3>4. How to put a limit order?</h3>
      <p className="pl-3">A user can put a limit order by enabling the “Limit Order” option on the “Trade” page of the dex. After enabling the option, the user can select the crypto he wants to sell from the dropdown and enter the price at which he wants to sell. After this, the user has to select the crypto he wants to get in exchange for the crypto he is selling and then execute the order. The order details can be seen in the “Active Orders” section on the same page.</p>

      <h3>5. How to provide liquidity in liquidity pools?</h3>
      <p className="pl-3">cSwap provides users with a unique concept of the master pool and child pool. Users can deposit their assets in these liquidity pools in the ratio of 50:50. and earn LP rewards as per the mechanism mentioned in the Rewarding System section.</p>

      <h3>6. How to claim LP rewards?</h3>
      <p className="pl-3">The rewards earned by users on their farmed assets will be deposited in their wallets directly. There is no manual process of claiming the rewards separately. The rewards will be distributed at every epoch.</p>

      <h3>7. What will be the reward token?</h3>
      <p className="pl-3">Initially, the reward token will be CMDX. Users will get their rewards in the form of CMDX token. This reward token can be changed in the future if required.Incentives in the form of external rewards can also be added to to any pools</p>

      <h3>8. Where can I see my assets on the dex?</h3>
      <p className="pl-3">All the assets that are IBC transferred on the dex can be seen in the “Assets” tab. You can either deposit or withdraw your IBC-enabled assets. If you want to see your invested assets then you can see the same in the “Asset” section under the “My Home” tab.</p>

      <h3>9. How can I vote on the proposals?</h3>
      <p className="pl-3">To vote on governance proposals, you must be a staker of CMDX tokens. First, go to the "Governance" section and select the relevant proposal. Read through the proposal and ensure you have a full understanding of what is being proposed. If you would like to discuss it, then you can click on “Forum” which will redirect you to the governance forum page. Once you feel that you have understood the proposal, you can click on the “Vote Now” button on the right-hand side. Now, you can select the vote you would like to cast and confirm your vote.</p>

      <h3>10. What are the risks associated with using cSwap?</h3>
      <p className="pl-3">cSwap has been built keeping in mind the possible risks involved in any dex but no platform can be completely risk-free. The risks that might hamper the platform are smart contract risk (risk of a bug in the platform code) and market risks such as extreme volatility. Though the code will be audited, it does not guarantees the safety of the platform. Extreme volatility and low liquidity such as in the case of an abrupt crash in the price of an asset could trigger the massive removal of liquidity from a pool, causing major levels of slippage.</p>

      <h3>11. How to switch the direction of the swap? </h3>
      <p className="pl-3">You can do that by clicking on the arrow between "From" and "To".</p>

      <h3>12. How Can I Launch a Pool:</h3>
      <p className="pl-3">The "Create pool" option on the farm page is used to deploy all new cSwap pools without requiring any permissions. This implies that anyone can set up a pool, but the tokens in the pool must be whitelisted.</p>

      <h3>13. Adding liquidity to an existing pool:</h3>
      <p className="pl-3">You must provide tokens to the liquidity pool in a 1:1 value ratio. This means that if you are adding to a CMDX-ATOM pool and want to give 1000 CMDX worth of liquidity, you must first convert approximately 1000 CMDX to an equal value of ATOM tokens using the Swap.</p>

      <h3>14. Adding liquidity to a new pool:</h3>
      <p className="pl-3">If the pool for which you want to provide liquidity does not already exist, you can create it under the farm section by clicking "Create pool." Simply provide the tokens and add the parameters for the pool. You, as the first liquidity provider, determine the initial exchange ratio (price).</p>

      <BottomNav
        preNavLink="developer-docs"
        prevNavText="Developer Docs"
      />

    </div>
  );
};

export default Faq;