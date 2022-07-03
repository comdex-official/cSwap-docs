import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const FarmingRewards = () => {
  return (
    <div>
      <h2>Farming Rewards</h2>
      <p>
        cSwap liquidity incentive or rewarding system works in a way that is typically different from most AMM liquidity incentivization mechanisms. Here, the concept remains the same, but it has been designed in such a way that it is efficient and sustainable in the long run and, at the same time, prevents the system from any possible exploit that may hamper the system.
      </p>

      <h3>Rewarding System</h3>
      <p>
        Now that we have understood what child and master pools are, let us discuss how the liquidity providers will earn rewards on their deposited assets.
      </p>

      <p>
        We know the master pool will have internal and external incentives, whereas the child pool has no internal incentives in the initial stage. The liquidity providers can earn external incentives by providing liquidity in the master pool. Now, to be eligible for internal rewards, users must deposit an equal amount of assets in the child pool. Adopting this method will give users an option to earn extra rewards by depositing in the child pools. For example, If a user deposits $1000 worth of assets into the master pool (CMDX-CMST), then he will be eligible to receive external rewards only. Now, if the user wants to earn extra rewards in the form of internal rewards, he must deposit an equal amount ($1000) worth of assets in a child pool or different child pools collectively.
      </p>

      <p>
        This is one of a kind concept built to keep the platform sustainable and provide flexibility to the users at the same time. Now, if a user wants to withdraw his assets from the pool, then he can withdraw the amount at any point in time, but a withdrawal fee would be charged for the same. It makes sense to keep a withdrawal fee as there is no lock-in period in the liquidity pool. This would discourage the users from frequently withdrawing assets from the liquidity pool.
      </p>

      <p>
        Now, let us try to understand the rewarding system in detail through different case scenarios and how much a user will earn in each case. Assume that the external reward APR is 100% and the internal reward APR is 150%. Let us see the different cases.
      </p>

      <p>
        <b>
          Case - 1: When the user deposits $1000 worth of assets only in the master pool.
        </b>
      </p>

      <p>
        When a user deposits $1000 worth of assets only in the master pool, then he will be eligible for only the external rewards, i.e., 100% APR.
      </p>

      <p>
        Reward = $1000 x 100% APR
      </p>

      <p>
        <b>Case - 2: When the user deposits $1000 worth of assets into the master pool and the child pool.</b>
      </p>

      <p>
        In this case, the user has deposited an equal amount in both the master pool as well as child pool; therefore, the user will be eligible to receive both external and internal rewards. 
      </p>

      <p>
        Reward = {"($1000 x 100% APR) + ($1000 x 150% APR)"}.
      </p>

      <p>
        <b>Case - 3: When the user deposits $1000 worth of assets into the master pool and $500 worth of assets in the child pool.</b>
      </p>

      <p>
        In this case, the user has deposited only $500 in the child pool, which is less than the amount deposited in the master pool. Hence, as per the mechanism, the user will be eligible to receive 100% APR on $1000 and 150% APR on $500 only. 
      </p>

      <p>Reward = {"($1000 x 100% APR) + ($500 x 150% APR)"}</p>

      <p><b>Case - 4: When the user deposits $500 worth of assets into the master pool and $1000 worth of assets in the child pool.</b></p>

      <p>
        Now, in this case, the user has deposited more amount in the child pool than in the master pool, so the user will be entitled to receive internal rewards, i.e., 150% APR, only on the $500 worth of assets in the child pool along with external rewards of 100% APR on $500.
      </p>

      <p>Reward = {"($500 x 100% APR) + ( $500 x 150% APR)"}</p>

      <p>
        <b>Case - 5: When the user deposits $1000 worth of assets only in the child pool.</b>
      </p>

      <p>
        In this case, the user will not be entitled to receive any rewards on the child pools initially, as there will be no internal or external rewards on these child pools. However, these can be incentivized through external incentives by any third party in the future.
      </p>

      <p>Reward = $1000 x 0% APR</p>

      <p>
        <b>Case - 6: When the user deposits $1000 worth of assets in the master pool and $1000 worth of assets in different child pools.</b>
      </p>

      <p>
        This is a unique case so let us understand it with an example. Suppose there are two child pools of pair ATOM-OSMO and CMDX-ATOM. Now, the user has deposited $500 worth of assets in each pool and $1000 worth of assets in the master pool. Here, the total worth of assets deposited in the child pool is $1000 ($500 + $500), which equals the worth of assets deposited in the master pool. So, in this case, the user will be entitled to receive both external reward APR and internal reward APR.
      </p>

      <p>Reward = {"($1000 x 100% APR) + (1000 x 150% APR)"}</p>

      <h3>Farming Status: Queued and Staked</h3>
      <p>
        A user must have relevant pair of coins in order to deposit in the pool to provide liquidity. Users can either IBC transfer assets on the dex by connecting their wallets or swap the existing assets with the relevant tokens.
      </p>

      <ul>
        <li>Once the user has the relevant pair of coins, he can deposit the same in the corresponding pool.</li>
        <li>After depositing the coins, the user will get corresponding pool tokens which then need to be farmed to earn farming rewards.</li>
        <li>After farming the pool tokens, the pool status is shown as Queued, which gets changed to the status of Staked automatically once the next epoch starts.</li>
        <li>Once the status is changed to Staked, rewards start accumulating on the same but to receive the reward; an entire epoch needs to pass.</li>
        <li>If the user unfarm the pool tokens, whether it's in Queued or Staked status, the pool tokens are instantly given to the user. </li>
        <li>When the user unfarms the pool tokens, the user is not entitled to receive the accumulated rewards of the current epoch. </li>
        <li>The rewards for each epoch are automatically sent to the user’s wallet, and therefore, there is no manual claiming process for claiming the accumulated rewards.</li>
      </ul>

      <h3>External incentives</h3>
      <p>
        cSwap is a platform that allows the community and third parties to add incentives to gauges. This allows any individual or organization to deposit tokens into a gauge or gauges that will be distributed to the pools. <br />
        For example, suppose there is a pool of ATOM-CMDX incentivized by CMDX rewards. Now, any individual or organization can provide additional incentives to this gauge or create a new incentive for any other gauge. 
      </p>

      <p>
        Apart from this, they can create an incentivization system in which the rewards are distributed over a period of time. For example, the XYZ foundation comes up with 90,000 XYZ tokens that they want to be distributed over three months; then, in this case, 1000 XYZ tokens will be distributed per day over the next 90 days.
      </p>


      <BottomNav
        preNavLink="/liquidity-pool"
        prevNavText="Liquidity Pool"
        nextNavLink="/voting"
        nextNavText="Voting"
      />

    </div>
  );
};

export default FarmingRewards;