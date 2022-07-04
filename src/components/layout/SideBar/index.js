import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SvgIcon } from "../../common";
import { Menu } from "antd";
import "./index.less";
import Scrollbar from "react-scrollbars-custom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SideBar = () => {
  const location = useLocation();
  return (
    <div className="sidebar-inner">
      <div className="sidebar-menu">
        <Scrollbar style={{ height: 'calc(100vh - 105px)' }}>
          <Menu mode="inline">
            <Menu.Item key="m1" icon={<SvgIcon name="intro-icon" viewbox="0 0 33.007 36.341" />}>
              <NavLink
                to="/introduction"
                className={location.pathname === "/introduction" ? "selected" : ""}
              >
                Introduction
              </NavLink>
            </Menu.Item>
            <Menu.SubMenu key="m2" title="cSwap Dex" icon={<SvgIcon name="protocol-icon" viewbox="0 0 36 31.5" />}>
              <Menu.SubMenu key="m2-1" title="Mechanism" icon={<SvgIcon name="protocol-icon" viewbox="0 0 36 31.5" />}>
                <Menu.Item key="m2-1-1" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                  <NavLink
                    to="/mechanism"
                    className={location.pathname === "/mechanism" ? "selected" : ""}
                  >
                    Mechanism
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="m2-1-2" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                  <NavLink
                    to="/orderbook"
                    className={location.pathname === "/orderbook" ? "selected" : ""}
                  >
                    Orderbook
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="m2-1-3" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                  <NavLink
                    to="/hybrid-dex"
                    className={location.pathname === "/hybrid-dex" ? "selected" : ""}
                  >
                    Hybrid Dex
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="m2-1-4" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                  <NavLink
                    to="/liquidity-pool"
                    className={location.pathname === "/liquidity-pool" ? "selected" : ""}
                  >
                    Liquidity Pool
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="m2-1-5" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                  <NavLink
                    to="/farming-rewards"
                    className={location.pathname === "/farming-rewards" ? "selected" : ""}
                  >
                    Farming Rewards
                  </NavLink>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu key="m3" title="Governance" icon={<SvgIcon name="governance-icon" viewbox="0 0 32.076 28.288" />}>
              <Menu.Item key="m3-1-1" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/voting"
                  className={location.pathname === "/voting" ? "selected" : ""}
                >
                  Voting
                </NavLink>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="m4" title="Fees" icon={<SvgIcon name="riskframework-icon" viewbox="0 0 30 28.451" />}>
              <Menu.Item key="m4-1" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/transaction-fees"
                  className={location.pathname === "/transaction-fees" ? "selected" : ""}
                >
                  Transaction fees
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m4-2" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/swap-fees"
                  className={location.pathname === "/swap-fees" ? "selected" : ""}
                >
                  Swap fees
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m4-3" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/paircreation-fees"
                  className={location.pathname === "/paircreation-fees" ? "selected" : ""}
                >
                  Pair Creation Fee
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m4-4" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/liquiditypool-creation-fee"
                  className={location.pathname === "/liquiditypool-creation-fee" ? "selected" : ""}
                >
                  Liquidity Pool Creation Fee
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m4-5" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/withdrawal-fees"
                  className={location.pathname === "/withdrawal-fees" ? "selected" : ""}
                >
                  Withdrawal Fees
                </NavLink>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="m5" icon={<SvgIcon name="faq-icon" viewbox="0 0 33.846 33.846" />}>
              <NavLink
                to="/faq"
                className={location.pathname === "/faq" ? "selected" : ""}
              >
                FAQs
              </NavLink>
            </Menu.Item>
          </Menu>
          <div className="social-footer">
            <Link to={{ pathname: "https://twitter.com/cSwap_Finance" }} target="_blank">
              <SvgIcon name="twitter" viewbox="0 0 25.617 20.825" />
            </Link>
            <Link to={{ pathname: "https://t.me/cSwap_finance" }} target="_blank">
              <SvgIcon name="telegram" viewbox="0 0 24.635 20.66" />
            </Link>
            <Link to={{ pathname: "/" }}>
              <SvgIcon name="discord" viewbox="0 0 29.539 22.155" />
            </Link>
          </div>
        </Scrollbar>
      </div>
    </div>
  );
};

export default SideBar;