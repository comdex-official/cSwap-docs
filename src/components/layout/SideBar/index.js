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
            <Menu.SubMenu key="m2" title="What is cSwap DEX?" icon={<SvgIcon name="protocol-icon" viewbox="0 0 36 31.5" />}>
              <Menu.Item key="m2-1" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/cswap-dex"
                  className={location.pathname === "/cswap-dex" ? "selected" : ""}
                >
                  What is cSwap DEX?
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m2-2" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/orderbook"
                  className={location.pathname === "/orderbook" ? "selected" : ""}
                >
                  Orderbook
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m2-3" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/liquidity-pools"
                  className={location.pathname === "/liquidity-pools" ? "selected" : ""}
                >
                  Liquidity Pools
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m2-4" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/amm"
                  className={location.pathname === "/amm" ? "selected" : ""}
                >
                  AMM (Automated Market Maker)
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m2-5" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/liquidity-farming"
                  className={location.pathname === "/liquidity-farming" ? "selected" : ""}
                >
                  Liquidity Farming
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m2-5" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/hybrid-dex"
                  className={location.pathname === "/hybrid-dex" ? "selected" : ""}
                >
                  Hybrid Dex
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m2-6" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/farming-rewards"
                  className={location.pathname === "/farming-rewards" ? "selected" : ""}
                >
                  Farming Rewards
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m2-7" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/impermanent-loss"
                  className={location.pathname === "/impermanent-loss" ? "selected" : ""}
                >
                  Impermanent Loss
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m2-8" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/mechanism"
                  className={location.pathname === "/mechanism" ? "selected" : ""}
                >
                  Mechanism
                </NavLink>
              </Menu.Item>
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
            <Menu.Item key="m4" icon={<SvgIcon name="riskframework-icon" viewbox="0 0 30 28.451" />}>
              <NavLink
                to="/fees"
                className={location.pathname === "/fees" ? "selected" : ""}
              >
                Fees
              </NavLink>
            </Menu.Item>
            <Menu.Item key="m5" icon={<SvgIcon name="faq-icon" viewbox="0 0 33.846 33.846" />}>
              <NavLink
                to="/faq"
                className={location.pathname === "/faq" ? "selected" : ""}
              >
                FAQs
              </NavLink>
            </Menu.Item>
            <Menu.SubMenu key="m6" title="How to use cSwap" icon={<SvgIcon name="governance-icon" viewbox="0 0 32.076 28.288" />}>
              <Menu.Item key="m6-1-1" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/trade-swap"
                  className={location.pathname === "/trade-swap" ? "selected" : ""}
                >
                  Steps to trade/swap
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m6-1-1" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/submit-limit-order"
                  className={location.pathname === "/submit-limit-order" ? "selected" : ""}
                >
                  How to Submit a Limit Order
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m6-1-1" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/cancel-limit-order"
                  className={location.pathname === "/cancel-limit-order" ? "selected" : ""}
                >
                  How to Cancel a Limit Order
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m6-1-1" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/add-liquidity"
                  className={location.pathname === "/add-liquidity" ? "selected" : ""}
                >
                  How to Add Liquidity
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m6-1-1" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/governance"
                  className={location.pathname === "/governance" ? "selected" : ""}
                >
                  Governance
                </NavLink>
              </Menu.Item>
            </Menu.SubMenu>
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
