import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Faq = () => {
  return (
    <div>
      <h2>FAQs</h2>
       
       <h3>How to interact with cSwap?</h3>
       <p>
         In order to interact with cSwap, connect your keplr wallet (or any cosmos ecosystem compatible wallet) to the platform and deposit the assets you want on the dex. Once the assets are deposited, you can trade/swap with the desired token or LP your assets in the liquidity pools to earn rewards on the same.
       </p>

       <h3>How does cSwap differ from other dexes?</h3>
       <p>
          cSwap is a hybrid dex which is a combination of AMM and orderbook mechanism. It allows users to place limit as well as market orders. Also, cSwap is IBC enabled which allows the users to trade cross-chain or multi-chain assets seamlessly on the dex. cSwap also provides users with a unique LP reward system that has not been seen on any other platform. cSwap has been built with the aim of providing users with a platform that is sustainable and reliable in the long term. Also, cSwap may play an important role in providing liquidity to comdex dapps as well as to the entire cosmos ecosystem. 
       </p>

       <h3>What type of assets can be traded on the dex?</h3>
       <p>
        Any cosmos-based assets can be traded on cSwap. Also, since cSwap is IBC enabled, it allows users to trade multi-chain or cross-chain assets as well. 
       </p>

       <h3>How to put limit order?</h3>
       <p>
         A user can put a limit order by enabling the “Limit Order” option on the “Trade” page of the dex. After enabling the option, the user can select the crypto he wants to sell from the dropdown and enter the price at which he wants to sell. After this, the user has to select the crypto he wants to get in exchange for the crypto he is selling and then execute the order. The order details can be seen in the “Active Orders” section on the same page.
       </p>

       <h3>How to provide liquidity in liquidity pools?</h3>
       <p>
         cSwap provides users with a unique concept of the master pool and child pool. Users can deposit their assets in these liquidity pools in the ratio of 50:50. and earn LP rewards as per the mechanism mentioned in the Rewarding System section.
       </p>

       <h3>How to claim LP rewards?</h3>
       <p>
         The rewards earned by users on their farmed assets will be deposited in their wallets directly. There is no manual process of claiming the rewards separately. The rewards will be distributed at every epoch.
       </p>

       <h3>What will be the reward token?</h3>
       <p>
         Initially, the reward token will be CMDX. Users will get their rewards in the form of CMDX token. This reward token can be changed in the future if required.
       </p>

       <h3>Where can I see my assets on the dex?</h3>
       <p>
         All the assets that are IBC transferred on the dex can be seen in the “Assets” tab. You can either deposit or withdraw your IBC-enabled assets. If you want to see your invested assets then you can see the same in the “Asset” section under the “My Home” tab.
       </p>

       <h3>How can I vote on the proposals?</h3>
       <p>
         To vote on governance proposals, you must be a holder or staker of CMDX tokens. First, go to the "Governance" section and select the relevant proposal. Read through the proposal and ensure you have a full understanding of what is being proposed. If you would like to discuss it, then you can click on “Forum” which will redirect you to the governance forum page. Once you feel that you have understood the proposal, you can click on the “Vote Now” button on the right-hand side. Now, you can select the vote you would like to cast and confirm your vote.
       </p>

       <h3>What are the risks associated with using cSwap?</h3>
       <p>
         cSwap has been built keeping in mind the possible risks involved in any dex but no platform can be completely risk-free. The risks that might hamper the platform are smart contract risk (risk of a bug in the platform code) and market risks such as extreme volatility. Though the code will be audited, it does not guarantees the safety of the platform. Extreme volatility and low liquidity such as in the case of an abrupt crash in the price of an asset could trigger the massive removal of liquidity from a pool, causing major levels of slippage.
       </p>


      <BottomNav
        preNavLink="withdrawal-fees"
        prevNavText="Withdrawal Fees"
      />

    </div>
  );
};

export default Faq;