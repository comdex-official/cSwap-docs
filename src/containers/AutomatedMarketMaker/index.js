import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../../components/common";
import "./index.less";

const AutomatedMarketMaker = () => {
  return (
    <div>
      <h2>AMM (Automated Market Maker)</h2>
      <p>
        The liquidity pool of a pair of assets acts as an AMM, which then makes the orders in the orderbook of the assets match automatically through the CPM (Constant Product Model)
      </p>
      <p>
        AMMs enable automated market-making through the use of the <Link to={{ pathname: "https://medium.com/bollinger-investment-group/constant-function-market-makers-defis-zero-to-one-innovation-968f77022159"}} traget="_blank">CPM (Constant Product Model)</Link>, operating on the formula below:
      </p>

      <p className="text-center p-2">
        <i>x y=k</i>
      </p>

      <p>
        Where “x” and “y” represent the number of tokens, X and Y in a pool, one of the tokens in the pair serves as a base token while the other serves as the quote token. The quote coin defines the value of the base coin. 
      </p>

      <p>
        Let us consider an example of a coin pair consisting of two tokens, ATOM and CMDX. The base token, CMDX, is an asset whose worth is determined based on the current market value of 1 ATOM. If the ratio of ATOM liquidity in the pool to the CMDX liquidity in the pool stands at 1:5, the pricing of the two assets is 1 ATOM = 5 CMDX. Therefore, users can swap 1 ATOM on the pool for 5 CMDX. Once the swap is completed, the ratio of the quantity of the two assets in the pool changes to maintain the same constant product “k” by changing the price of the assets. 
      </p>

      <BottomNav
        preNavLink="/liquidity-pools"
        prevNavText="Liquidity Pools"
        nextNavLink="/liquidity-farming"
        nextNavText="Liquidity Farming"
      />

    </div>
  );
};

export default AutomatedMarketMaker;