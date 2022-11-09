import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import TradeSwapImg1 from "../../assets/images/howtouse-1.png";
import TradeSwapImg2 from "../../assets/images/howtouse-2.png";
import TradeSwapImg3 from "../../assets/images/howtouse-3.png";
import TradeSwapImg4 from "../../assets/images/howtouse-4.png";
import TradeSwapImg5 from "../../assets/images/howtouse-5.png";

const TradeSwap = () => {
  return (
    <div>
      <h2>Using cSwap</h2>
      <p>
        cSwap is an IBC-enabled hybrid dex built on the Comdex chain. cSwap uses AMM liquidity pools which bring cross-chain markets and limit orders to DeFi. Through this mechanism, cSwap will be a go-to platform for traders and arbitrageurs, enabling them to implement sophisticated trading strategies.
      </p>

      <h4 className="mb-0">To start using cSwap, you will need to:</h4>
      <p>Connect Keplr wallet by clicking on the Keplr chrome extension and enter your password. If you don’t have Keplr wallet, you can install it by <button className="link-tag" onClick={() => window.open("https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en", "_blank")}>clicking here.</button></p>

      <h3>Steps to trade/swap:</h3>

      <p>1. Go to <button className="link-tag" onClick={() => window.open("http://www.cswap.one", "_blank")}>www.cswap.one</button> </p>
      <img src={TradeSwapImg1} alt="trade/swap" />
      <p>2. Click on "Connect".</p>
      <p>3. Connect Kepler wallet, after successful connection you can start to use cSwap.</p>
      <p>4. Click on "Trade".</p>
      <p>5. Choose the token you want to swap from by clicking on the "From" option.</p>
      <img className="max-width-700" src={TradeSwapImg2} alt="trade/swap" />
      <p>6. Once you have selected the token you want to swap from, select the token you want to swap it to.</p>
      <img className="max-width-700" src={TradeSwapImg3} alt="trade/swap" />
      <p>7. Type in the amount of tokens to swap.</p>
      <img className="max-width-480" src={TradeSwapImg4} alt="trade/swap" />
      <ul>
        <li>Remember to always leave some $CMDX in your wallet for gas when swapping  tokens.</li>
        <li>Make sure Slippage is not too high.</li>
      </ul>
      <p>8. Click "Swap". <br />
        Review trade parameters and click on “swap”. Keplr wallet will show a pop-up asking for the approval of the transaction.
      </p>
      <img className="max-width-480" src={TradeSwapImg5} alt="trade/swap" />

      <BottomNav
        preNavLink="faq"
        prevNavText="FAQs"
        nextNavLink="submit-limit-order"
        nextNavText="How to Submit a Limit Order"
      />

    </div>
  );
};

export default TradeSwap;