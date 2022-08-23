import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import FarmingRewards1 from '../../assets/images/Farming-Rewards1.png';

const FarmingRewards = () => {
  return (
    <div>
      <h2>Farming Rewards</h2>
      <p>
        cSwap’s liquidity incentive or rewarding system is designed differently from the typical liquidity mining reward programs adopted by most AMM-based Dexes. cSwap’s liquidity farming rewards are designed for long-term efficiency and sustainability.
      </p>

      <h3>a) Rewarding System</h3>
      <p>
        Now that we have understood what child and master pools are let us discuss how the liquidity providers will earn rewards on their deposited assets.
      </p>

      <p>
        The liquidity providers can earn external incentives by providing liquidity in the master pool. The master pool will have internal and external incentives, whereas the child pool has no internal incentives in the initial stage. To be eligible for internal rewards, users must provide as much liquidity in the child pool as they have in the master pool. Users can therefore earn extra rewards by depositing assets in the child pools. This means users depositing assets into the master pool can receive just external rewards. To earn additional internal rewards, they must deposit (cumulatively) an equal value of assets in one or multiple child pools.
      </p>

      <p>
        Liquidity providers may withdraw their assets from pools at any point in time by paying withdrawal fees. The withdrawal fee is designed to substitute the presence of bonding periods on liquidity in pools, which discourages users from frequently withdrawing assets from liquidity pools. 
      </p>

      <p>
        Let's see an example of how the rewards system would work in different scenarios. Assuming an external reward APR of 100% and the internal reward APR of 150%-
      </p>

      <p>
        cSwap’s liquidity incentive or rewarding system is designed differently from the typical liquidity mining reward programs adopted by most AMM-based Dexes. cSwap’s liquidity farming rewards are designed for long-term efficiency and sustainability.
      </p>

      <p>
        On cSwap, rewards can be distributed through two mechanisms: 
        <ol type="i">
          <li>
             Master Pool - Child Pool Rewards System
          </li>
          <li>
            Traditional Rewards System
          </li>
        </ol>
      </p>

      <p>
        Both these rewards are created by utilising the rewards module on chain. Any pool on cSwap can be a Master pool or a Child pool at the same time, depending on the rewards created for the pool. 
      </p>

      <p>
        Let's consider the following example: 
      </p>

      <p>
        Assuming there exist two pools-
        <ol type="1">
          <li>1.CMDX - ATOM, pool_id = 1</li>
          <li>2.CMDX - OSMO, pool_id = 2</li>
        </ol>
      </p>
      
      <p>
        The rewards created for these pools are as follows: <br />
        reward1 = {"{pool_id = 1, is_master_pool = true, child_pool_ids = [2], resulting_APR = 80%}"} <br />
        reward2 = {"{pool_id = 1, is_master_pool = false, resulting_APR = 120%}"} <br />
        reward3 = {"{pool_id = 2, is_master_pool = false, resulting_APR = 250%}"}
      </p>

      <img src={FarmingRewards1} />

      <p>
        <b>NOTE:</b> A Mater pool can have multiple Child pools. In the cases outlined below, “liquidity value of child pool” refers to the summation of liquidity in all associated Child pools. 
      </p>

      <p>
        <b>
          Case - 1: User deposits $1000 worth of assets only in the master pool.
        </b>
      </p>

      <p>
        When a user deposits $1000 worth of assets in just the master pool, they are eligible for only the Rewards2, i.e., 120% APR. <br />
        Reward = $1000  120%  <i>APR</i>
      </p>

      <p>
        <b>Case - 2: User deposits $1000 worth of assets each into the master pool and a child pool.</b>
      </p>

      <p>
        Since the user has deposited an equal amount in both the master pool as well as the child pool; the user is eligible to receive rewards both pools - Reward1, Reward2, & Reward3 <br />
        <i>Reward</i> = [($1000  80%  APR) + ($1000  120% APR) + ($1000  250% APR)].
      </p>

      <p>
        <b>Case - 3: User deposits $1000 worth of assets into the master pool and $500 worth of assets into a child pool.</b>
      </p>

      <p>
        In this case, the user has deposited only $500 in a child pool, which is less than the amount deposited in the master pool. Hence, as per the mechanism, the user will be eligible to receive the following: 
      </p>

      <p>
        Reward1 - min-liquidity(masterpool, childpool) i.e min-liquidity(1000$, 500$) <br />
        Reward2 - 1000$ <br />
        Reward3 - 500$
      </p>

      <p>Reward = [($500  80%  APR) +($1000  120%  APR) + ($500  250% APR)]</p>

      <p><b>Case - 4: User deposits $500 worth of assets into the master pool and $1000 worth of assets in a child pool.</b></p>

      <p>
        In this case, the user has deposited a higher amount in child pools than in the master pool.  The user will be entitled to receive the rewards as mentioned below -
      </p>

      <p>
        Reward1 - min-liquidity(masterpool, childpool) - min-liquidity(500$, 1000$) <br />
        Reward2 - 500$ <br />
        Reward3 - 1000$  
      </p>

      <p>Reward = [($500  80%  APR) +($500  120%  APR) + ($1000  250% APR)]</p>

      <p>
        <b>Case - 5: User deposits $1000 worth of assets in the child pools only.</b>
      </p>

      <p>
        In this case, the user will not be entitled to receive any rewards available on the master pool i.e Reward1 and Reward2. But, is eligible for the Reward3 <br />
        Reward = ($1000  250%  APR)
      </p>

      <h3>b) Farming Status: Queued and Staked</h3>
      <ul>
        <li>Users can deposit their assets into corresponding asset pools.</li>
        <li>After depositing the assets, users receive corresponding LP tokens. These LP tokens can be farmed to earn farming rewards.</li>
        <li>Farmed LP tokens remain Queued until the start of the next epoch when they become Staked. </li>
        <li>Staked LP tokens earn rewards at every epoch.</li>
        <li>Users who unfarm their LP tokens receive pools tokens instantly regardless of whether they are Queued or Staked</li>
        <li>Unfarmed pool tokens are not entitled to rewards for the epoch in which they are unfarmed.</li>
        <li>The rewards for each epoch are automatically sent to the user’s wallet.</li>
      </ul>

      <h3>External incentives</h3>
      <p>
        cSwap allows the community and third parties to add incentives to a pool or pools that will be distributed to the pools. <br />
        For example, in an ATOM-CMDX pool, incentivized by CMDX rewards, any individual or organization can provide additional incentives to this pool or create a new incentive for any other pool. 
      </p>

      <p>Apart from this, they can create an incentivization system in which the rewards are distributed over a defined period of time. For example, the XYZ foundation allocates 90,000 XYZ tokens to be distributed over three months; in this case, 1000 XYZ tokens will be distributed per day over the next 90 days.</p>

      <p>These incentivization can be added via rewards module (Please refer technical documentation for the same)</p>

      <BottomNav
        preNavLink="/hybrid-dex"
        prevNavText="Hybrid Dex"
        nextNavLink="/impermanent-loss"
        nextNavText="Impermanent Loss"
      />

    </div>
  );
};

export default FarmingRewards;