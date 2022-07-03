import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const PairCreationFee = () => {
  return (
    <div>
      <h2>Pair Creation fee</h2>
      <p>
        An asset pair creation fee is a fee that is charged by the users when they create a new unique asset pair. This means the user can create a pair A-B consisting of coins A and B. The user can also create a pair B-A which is different from pair A-B. This asset pair creation fee can be changed through governance if required.
      </p>

      <BottomNav
        preNavLink="swap-fees"
        prevNavText="Swap Fees"
        nextNavLink="liquiditypool-creation-fee"
        nextNavText="Liquidity Pool Creation fee"
      />

    </div>
  );
};

export default PairCreationFee;