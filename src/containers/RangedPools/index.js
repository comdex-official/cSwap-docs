import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import RangedPoolImg from '../../assets/images/ranged-pool.jpg';
import RangedPoolImg2 from '../../assets/images/ranged-pool2.png';
import RangedPoolImg3 from '../../assets/images/ranged-pool3.png';
import RangedPoolImg4 from '../../assets/images/ranged-pool4.png';

const RangedPools = () => {
  return (
    <div>
      <h2>Ranged Pools</h2>

      <p>
        The x*y = k model is inefficient for trading assets of a similar value, such as assets in a CMST/USDC or ATOM/stATOM pool. The pool size required to achieve reasonable slippage between similar-denominated assets is unfeasible. cSwap's ranged Pools allow users to trade tokens with less slippage, especially tokens with similar denominations, such as stable and LSD pools. Ranged Pools work by using a concentrated range between two price points. This enables liquidity providers to allocate their capital within a custom price range rather than uniformly along the entire price curve from 0 to infinity. In contrast to a basic pool that provides liquidity in all price ranges, ranged Pools concentrate liquidity within a specific price range. This means a user can buy or sell a coin only within that price range.
      </p>

      <h3>Example:</h3>
      <p>
        For example, a liquidity provider can provide liquidity for a CMST/USDC pair within a specific price range, say $0.98-$1.02. This enables traders to obtain deeper liquidity for the token pair at the specific price range, and the liquidity provider earns more fees with their concentrated capital. Similarly, a liquidity provider can provide liquidity for an ATOM/stATOM pair at a specific price range, say $10.00-$11.5, resulting in more efficient use of capital and a more tailored trading experience for users.
      </p>

      <h3>Benefits of Ranged Pools:</h3>
      <p>Ranged Pools offer several benefits over traditional AMMs: </p>
      <ul>
        <li>Less Slippage: Using a predefined range within a specific range of prices, ranged pools offer less slippage for trades.</li>
        <li>Amplified Liquidity: By providing liquidity within a finite range of the current price, the network can supply the same liquidity within the range as the basic pool with infinite range amplification of liquidity provided for trade within the designated price range.</li>
        <li>Fair Prices: Ranged Pools use a fair pricing mechanism that ensures users get a fair price for their trades.</li>
        <li>More Liquidity: Ranged Pools can attract more liquidity by offering a better trading experience with less slippage.</li>
      </ul>

      <h3>Amplification factor:</h3>
      <p>
        The amplification factor (“A”) determines a pool’s tolerance for the imbalance between the assets within it. A higher value means that trades will incur slippage sooner as the assets within the pool become imbalanced and single-sided. In cSwap, the liquidity amplification factor is a measure of how much more liquidity a ranged pool can provide in a specific price range compared to a basic pool with the same amount of capital. The smaller the price range, the higher the amplification factor. Increased A would result in a leverage position for the pool to achieve extremely low slippage by creating huge liquidity depth near the price range. For instance, a ranged pool with a price range of [0.95, 1.05] will have a higher amplification factor than a range with a price range of [0.9, 1.1]. This is because the liquidity in the former is concentrated in a smaller price range, leading to more efficient trading with less slippage. The appropriate value for A depends upon the type of coin being used within the pool. Modifying the amplification factor for a pool after deployment is impossible.
      </p>

      <p>
        For a ranged pool with P min as Minumum Price, P max as Maximum Price, and P as the Current price, the amplification factor (A) can be calculated as:
      </p>

      <img src={RangedPoolImg} alt={RangedPoolImg} />

      <h3>Out-of-range scenario:</h3>
      <p>
        In a ranged pool, when the price goes beyond the specified range, only one type of coin remains in the pool. For example, if the price falls below the lower range limit of 0.98 in a pool with a range of 0.98-1.02, only X coins will be left in the pool. This implies that the pool will sell Y coins and buy X coins at prices above 0.98. Similarly, if the price rises above the upper range limit of 1.02, only Y coins will be left in the pool. In an out-of-range scenario, users can easily deposit or withdraw a single type of coin to or from the pool.
      </p>

      <h3>Example:</h3>
      <p>
        Suppose a pool has 10,000 CMST and 10,000 USDC into the pool. The liquidity would then be concentrated within the price range of 0.95 to 1.05 with an A factor of x40.47 and the current price at 1.00.
      </p>

      <img src={RangedPoolImg2} alt={RangedPoolImg2} />

      <p>
        If the price of CMST drops below 0.95, the pool will only have CMST left. In this case, users can withdraw their CMST tokens but will not be able to withdraw any USDC until the price of CMST rises back above 0.95.
      </p>

      <img src={RangedPoolImg3} alt={RangedPoolImg3} />
      <img src={RangedPoolImg4} alt={RangedPoolImg4} />

      <p>
        Similarly, if the price of CMST rises above 1.05, the pool will only have USDC left. In this scenario, users can withdraw their USDC tokens but will not be able to withdraw any CMST until the price falls back below 1.05.
      </p>

      <BottomNav
        preNavLink="/mechanism"
        prevNavText="Mechanism"
        nextNavLink="/voting"
        nextNavText="Voting"
      />

    </div>
  );
};

export default RangedPools;