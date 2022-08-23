import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Introduction = () => {
  return (
    <div>
      <h2>Introduction</h2>
      <p>
        The advent of cryptocurrencies has given birth to a wide range of digital assets that users can hold and exchange. A large part of the adoption for cryptocurrencies has been driven by centralised exchange platforms that allow users to access and trade crypto assets through traditional fiat-based on-ramps, while maintaining custody on behalf of its users. As the industry evolves however, users will become aware of the benefits of taking custody of their own assets, while still maintaining the ability to swap and exchange between assets. Centralised exchanges today are taking custody of users’ assets on their behalf, while also maintaining crucial user-data through KYC to comply with regulatory requirements. However, one of the key tenets of cryptocurrencies is the sovereignty of users to own and custody assets securely and digitally. Thus arises the need for solutions that offer users the ability to swap or exchange digital assets, decentrally, with trustless custody of assets.
      </p>
      <p>
        Decentralised exchanges (DEX) are offering users exactly that while driving the adoption of crypto globally. DEXes operate with automated market makers (AMMs) that algorithmically incentivize market participants to provide liquidity to and earn from various asset markets. AMM-based exchanges have been largely successful due to their ability to fulfil the needs of users to exchange assets while handsomely rewarding liquidity providers. However, AMM-based DEXes often run on complex mechanisms that are hard for a majority of users to grasp, in-order to fully understand the risks of using AMMs. In the nature of their design, AMMs are also largely dependent on the depth of liquidity in asset pools to ensure minimal slippage in exchange. 
      </p>
      <p>
        Meanwhile, most centralised exchanges operate on orberooks, where market makers play a crucial role in ensuring liquidity is maintained across markets of various assets. Order Book-based exchanges operate on the ability for buyers and sellers of assets to place buy and sell orders at predefined prices which are then executed by market makers. Such a method of trading is often far more intuitive for retail traders and investors to grasp and operate.  
      </p>
      <p>
        cSwap is a decentralized, IBC-enabled exchange built on the Comdex chain. It combines the mechanism of the AMM-based liquidity pools with an orderbook-based system, allowing users to place market and limit orders while earning a yield on liquidity pools. cSwap will become a one-stop exchange that will provide its users with a seamless experience of trading IBC assets as well as other cross-chain assets.
      </p>

      <BottomNav
        preNavLink="/introduction"
        prevNavText="Introduction"
        nextNavLink="/cswap-dex"
        nextNavText="What is cSwap DEX?"
      />

    </div>
  );
};

export default Introduction;