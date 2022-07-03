import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const LiquidityPool = () => {
  return (
    <div>
      <h2>Liquidity Pool</h2>
      <p>
        A user can create a liquidity pool of pair of coins that is unique and only in the ratio of 50:50 by paying a pool creation fee and providing liquidity in the same. Initially, the creation fee will be 200 CMDX, but this can be changed through governance. Also, there will be several other on-chain pools where users can deposit their assets and earn incentives on the same. 
      </p>

      <p>
        Users will be charged a pair creation fee to create a pair of assets that do not exist yet on the dex. This pair of assets will be unique, and only a single pair can exist on the dex. The liquidity pool of this pair will also be unique, and only one liquidity pool of such pair can exist on the dex. Creating an existing liquidity pool is not allowed; hence, the user will not be able to create the same.
      </p>

      <p>
        Now, let us discuss the liquidity pools that we have on the dex. We have categorized these liquidity pools into two categories which will play an essential role in how users will earn a yield on their deposited assets. We have named them “Child Pool” and “Master Pool.”
      </p>

      <h3>Master Pool</h3>
      <p>
        Master pool is a unique concept created by the team which is entirely new in the ecosystem. Initially, this liquidity pool will be in the pair of CMST-CMDX, but there are no restrictions on creating other existing pools as a master pool. <br />
        For example, let us say there is a child pool of ATOM-CMDX. If any individual or organization wants to incentivize this pool and wants to make this pool a master pool, then there is no restriction in doing so.
      </p>

      <p>
        This master pool concept will be used in the reward distribution system as this pool will consist of internal and external incentives. Now, let us head to the next section to understand how the rewards distribution system will work.
      </p>

      <h3>Child Pool</h3>
      <p>
        <i>Child pools</i> are the standard AMM liquidity pools where users provide liquidity by depositing pair of assets and earning rewards on the same. Initially, there will be no APR on these pools, but these can be incentivized through external rewards. Though there are no internal incentives, this is where the concept of a master pool comes into play through which users can earn a higher return through internal as well as external rewards.
      </p>

      <BottomNav
        preNavLink="/hybrid-dex"
        prevNavText="Hybrid Dex"
        nextNavLink="/farming-rewards"
        nextNavText="Farming Rewards"
      />

    </div>
  );
};

export default LiquidityPool;