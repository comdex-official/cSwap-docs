import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Mechanism = () => {
  return (
    <div>
      <h2>Mechanism</h2>
      <p>
        cSwap has been built to provide its users with a platform that is safe, fast, and user-friendly. Also, it has been designed in such a way that it gives freedom to its users as well as, at the same time, safeguards the system from any misuse of the functions that the platform provides. 
      </p>

      <BottomNav
        preNavLink="/introduction"
        prevNavText="Introduction"
        nextNavLink="/orderbook"
        nextNavText="Orderbook system"
      />

    </div>
  );
};

export default Mechanism;