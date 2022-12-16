import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import FarmingRewards1 from '../../assets/images/Farming-Rewards1.png';

const FarmingRewards = () => {
  return (
    <div>
      <h2>Farming Rewards</h2>

      <p>
        cSwap’s liquidity incentive or rewarding system is designed differently from the typical liquidity mining reward programs adopted by most AMM-based Dexes. cSwap’s liquidity farming rewards are designed for long-term efficiency and sustainability. It makes sure rewards are distributed to the users who provide maximum value to the protocol and disincentives mercenary capital.
      </p>

      <p>
        The incentives are directly proportional to the liquidity provided in the master pool.<br />
        For example: Let’s say the incentive token is $CMDX, so a user must provide liquidity in the $ATOM/$CMDX pool which is the master pool to maximize their rewards on other protocol-wide pools. 
      </p>

      <h3>a) Rewards System</h3>

      <p>
        The liquidity providers can earn external incentives by providing liquidity in the master pool. The master pool will have internal and external incentives, whereas the child pool has no internal incentives in the initial stage. To be eligible for internal rewards, users must provide as much liquidity in the child pool as they have in the master pool. Users can therefore earn extra rewards by depositing assets in the child pools. This means users depositing assets into the master pool can receive just external rewards. To earn additional internal rewards, they must deposit (cumulatively) an equal value of assets in one or multiple child pools.
      </p>
      
      <p className="mb-0">On cSwap, rewards are distributed through two distribution mechanisms: </p>
      <ul className="list-unstyled">
        <li>i) Master Pool - Child Pool Rewards System</li>
        <li>ii) Traditional/External Rewards System</li>
      </ul>

      <p>
        Both these rewards are created by utilising the rewards module on chain. Any pool on cSwap can be a Master pool or a Child pool at the same time, depending on the rewards created for the pool. There can exist multiple master pools.
      </p>

      <p>Let's consider the following example: </p>
      <ul className="list-unstyled">
        <li>1. CMDX - ATOM, pool_id = 1</li>
        <li>2. CMDX - OSMO, pool_id = 2</li>
      </ul>

      <p className="mb-0">The rewards created for these pools are as follows: </p>
      <ul className="list-unstyled">
        <li>reward1 = {`{pool_id = 1, is_master_pool = true, child_pool_ids = [2], resulting_APR = 80%}`}</li>
        <li>reward2 = {`{pool_id = 1, is_master_pool = false, resulting_APR = 120%}`}</li>
        <li>reward3 = {`{pool_id = 2, is_master_pool = false, resulting_APR = 250%}`}</li>
      </ul>

      <img src={FarmingRewards1} alt="The rewards" />

      <p><b>NOTE:</b> A Master pool can have multiple Child pools. In the cases outlined below, “liquidity value of child pool” refers to the summation of liquidity in all associated Child pools. </p>

      <p>
        <b>Case - 1: User deposits $1000 worth of assets only in the master pool.</b>
      </p>
      <p>When a user deposits $1000 worth of assets in just the master pool, they are eligible for only the Rewards2, i.e., 120% APR.</p>
      <p><i>Reward</i> = $1000 * 120%  <i>APR</i></p>

      <p><b>Case - 2: User deposits $1000 worth of assets each into the master pool and a child pool.</b></p>

      <p>
        Since the user has deposited an equal amount in both the master pool as well as the child pool; the user is eligible to receive rewards both pools - Reward1, Reward2, & Reward3  <br />
        <i>Reward = [($1000 * 80%  APR) + ($1000 * 120% APR) + ($1000 * 250% APR)]</i>
      </p>

      <p>
        <b>Case - 3: User deposits $1000 worth of assets into the master pool and $500 worth of assets into a child pool.</b>
      </p>

      <p>In this case, the user has deposited only $500 in a child pool, which is less than the amount deposited in the master pool. Hence, as per the mechanism, the user will be eligible to receive the following: </p>

      <p>
        Reward1 - min-liquidity(masterpool, childpool) i.e min-liquidity(1000$, 500$) <br />
        Reward2 - 1000$ <br />
        Reward3 - 500$
      </p>

      <p><i>Reward = [($500 * 80%  APR) +($1000 * 120%  APR) + ($500 * 250% APR)]</i></p>

      <p>
        <b>Case - 4: User deposits $500 worth of assets into the master pool and $1000 worth of assets in a child pool.</b>
      </p>
      <p>
        In this case, the user has deposited a higher amount in child pools than in the master pool.  The user will be entitled to receive the rewards as mentioned below -
      </p>
      <p>
        Reward1 - min-liquidity(masterpool, childpool) - min-liquidity(500$, 1000$) <br />
        Reward2 - 500$ <br />
        Reward3 - 1000$
      </p>
      <p><i>Reward = [($500 * 80%  APR) +($500 * 120%  APR) + ($1000 * 250% APR)]</i></p>

      <p><b>Case - 5: User deposits $1000 worth of assets in the child pools only.</b></p>

      <p>In this case, the user will not be entitled to receive any rewards available on the master pool i.e Reward1 and Reward2. But, is eligible for the Reward3</p>

      <p><i>Reward = ($1000 * 250%  APR)</i></p>

      <h3>b) Farming Status: Queued and Staked</h3>

      <ul>
        <li>Users can deposit their assets into corresponding asset pools.</li>
        <li>After depositing the assets, users receive corresponding LP tokens. These LP tokens can be farmed to earn farming rewards.</li>
        <li>Farmed LP tokens remain queued until the start of the next epoch when they become Staked. </li>
        <li>Staked LP tokens earn rewards at every epoch.</li>
        <li>Users who unfarm their LP tokens receive pools tokens instantly regardless of whether they are Queued or Staked</li>
        <li>Unfarmed pool tokens are not entitled to rewards for the epoch in which they are unfarmed.</li>
        <li>The rewards for each epoch are automatically sent to the user’s wallet.</li>
      </ul>

      <h3>c) External incentives</h3>

      <p>cSwap allows the community and third parties to add incentives to a pool or pools that will be distributed to the pools. <br />
        For example, in an ATOM-CMDX pool, incentivized by CMDX rewards, any individual or organization can provide additional incentives to this pool or create a new incentive for any other pool. 
      </p>

      <p>
        Apart from this, they can create an incentivization system in which the rewards are distributed over a defined period of time. For example, the XYZ foundation allocates 90,000 XYZ tokens to be distributed over three months; in this case, 1000 XYZ tokens will be distributed per day over the next 90 days.
      </p>

      <p>
        These incentivization can be added via rewards module (Please refer technical documentation for the same)
      </p>

      <BottomNav
        preNavLink="/liquidity-farming"
        prevNavText="Liquidity Farming"
        nextNavLink="/impermanent-loss"
        nextNavText="Impermanent Loss"
      />

    </div>
  );
};

export default FarmingRewards;