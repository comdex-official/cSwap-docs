import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const LiquidityPoolCreationFee = () => {
  return (
    <div>
      <h2>Liquidity Pool Creation fee</h2>
      <p>
        A liquidity pool creation fee is a fee that is charged by the users when they create a liquidity pool of two asset pairs which is unique and does not exist on the dex yet. This fee is charged in the CMDX token, which is the native token of Comdex. Initially, this pool creation will be 200 CMDX, but it can be changed through governance in the future.
      </p>

      <BottomNav
        preNavLink="paircreation-fees"
        prevNavText="Pair Creation fee"
        nextNavLink="withdrawal-fees"
        nextNavText="Withdrawal Fees"
      />

    </div>
  );
};

export default LiquidityPoolCreationFee;