import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const LiquidityPool = () => {
  return (
    <div>
      <h2>Liquidity Pools</h2>
      <p>
        Liquidity pools are collections of tokens that can be traded or withdrawn at prices determined by the platform code specifications. Token holders can add liquidity to liquidity pools to earn trading fees and incentives. Users can deposit the pair of assets into the pool for trading between two assets to become liquidity providers. 
      </p>

      <p>
        Liquidity Providers earn Pool Tokens (LP tokens) as a receipt of the liquidity contribution to the pool. These tokens represent the proportion of the overall liquidity in a pool contributed by a user. In a case where users deposit ATOM and CMDX into an ATOM-CMDX pool, they receive ATOM-CMDX Pool tokens.
      </p>

      <p>
        Users can create liquidity pools of a pair of assets by paying a pool creation fee and providing liquidity in the pool. At Genesis, the pool creation fee will be 2000 CMDX; however, on-chain governance can modify the fee. Liquidity pools on cSwap are categorised into the following, based on the role they play for the yield liquidity providers earn:  
      </p>

      <h3>a{")"} Child Pool</h3>
      <p>
        <i>Child pools</i> are the standard AMM liquidity pools where users provide liquidity by depositing a pair of assets and earning rewards. These can be incentivized through external rewards. Though there are no internal incentives, this is where the concept of a master pool comes into play through which users can earn a higher return through internal as well as external rewards.
      </p>

      <h3>b{")"} Master Pool</h3>
      <p>
        Master pool is a unique concept created by the team which is entirely new in the ecosystem. Initially, this liquidity pool will be for the CMST-CMDX pair. This master pool will be used in the reward distribution system as this pool will consist of internal and external incentives. Now, let us head to the next section to understand how the rewards distribution system will work.
      </p>

      <p>
        The liquidity pool of a pair of assets acts as an AMM, which then makes the orders in the orderbook of the assets match automatically through the CPM (Constant Product Model)
      </p>


      <BottomNav
        preNavLink="/orderbook"
        prevNavText="Orderbook"
        nextNavLink="/amm"
        nextNavText="AMM (Automated Market Maker)"
      />

    </div>
  );
};

export default LiquidityPool;