import React, { useState } from "react";
import SvgSprite from "./utils/SvgSpriteLoader";
import { Layout, Button } from "antd";
import SideBar from "./components/layout/SideBar";
import NavigationBar from "./components/layout/NavigationBar";
import { useMediaQuery } from "react-responsive";

//Svg Sprite
import svgFile from "./assets/images/svg/svg-sprite.svg";

import "./App.less";
import { SvgIcon } from "./components/common";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Introduction from "./containers/Introduction";
import Faq from "./containers/Faq";
import Home from "./containers/Home";
import Mechanism from "./containers/Mechanism";
import Orderbook from "./containers/Orderbook";
import HybridDex from "./containers/HybridDex";
import LiquidityPool from "./containers/LiquidityPool";
import FarmingRewards from "./containers/FarmingRewards";
import Voting from "./containers/Voting";
import WhatcSwap from "./containers/WhatcSwap";
import AutomatedMarketMaker from "./containers/AutomatedMarketMaker";
import ImpermanentLoss from "./containers/ImpermanentLoss";
import LiquidityFarming from "./containers/LiquidityFarming";
import Fees from "./containers/Fees";
import TradeSwap from "./containers/TradeSwap";
import SubmitLimitOrder from "./containers/SubmitLimitOrder";
import HowCancelLimitOrder from "./containers/HowCancelLimitOrder";
import HowAddLiquidity from "./containers/HowAddLiquidity";
import Governance from "./containers/Governance";
import DeveloperDocs from "./containers/DeveloperDocs";

const { Header, Content, Sider, Footer } = Layout;

const App = () => {
	const [collapsed, setCollapsed] = React.useState(false);
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const [isOpen, setIsOpen] = useState(!!isMobile);
	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
		setIsOpen(!isOpen);
	};
	return (
		<>
			<SvgSprite url={svgFile} />
			<Router>
				<Layout>
					<Header className="header">
						<div className="header-inner">
							<Button
								className="menu-link"
								type="link"
								onClick={toggleCollapsed}
								style={{ marginBottom: 16 }}
							>
								{collapsed ? (
									<SvgIcon
										name="chevron-right"
										viewbox="0 0 5.333 9.333"
									/>
								) : (
									<SvgIcon
										name="chevron-left"
										viewbox="0 0 5.333 9.333"
									/>
								)}
							</Button>
							<NavigationBar />
						</div>
					</Header>
					<Layout className="main-content">
						<>
							<Sider
								width={290}
								collapsible
								breakpoint="lg"
								className="cSwap-sider"
								collapsed={isOpen}
								trigger={null}
							>
								<SideBar />
							</Sider>
							<Content className="right-content-wrapper">
								<Switch>
									<Route exact path="/" component={Home} />
									<Route exact path="/introduction" component={Introduction} />
									<Route exact path="/cswap-dex" component={WhatcSwap} />
									<Route exact path="/mechanism" component={Mechanism} />
									<Route exact path="/amm" component={AutomatedMarketMaker} />
									<Route exact path="/orderbook" component={Orderbook} />
									<Route exact path="/liquidity-farming" component={LiquidityFarming} />
									<Route exact path="/hybrid-dex" component={HybridDex} />
									<Route exact path="/liquidity-pools" component={LiquidityPool} />
									<Route exact path="/farming-rewards" component={FarmingRewards} />
									<Route exact path="/impermanent-loss" component={ImpermanentLoss} />
									<Route exact path="/voting" component={Voting} />
									<Route exact path="/fees" component={Fees} />
									<Route exact path="/trade-swap" component={TradeSwap} />
									<Route exact path="/submit-limit-order" component={SubmitLimitOrder} />
									<Route exact path="/cancel-limit-order" component={HowCancelLimitOrder} />
									<Route exact path="/add-liquidity" component={HowAddLiquidity} />
									<Route exact path="/governance" component={Governance} />
									<Route path="/faq" component={Faq} />
									<Route path="/developer-docs" component={DeveloperDocs} />
								</Switch>
								<Footer className="main-footer">
									© 2021 cSwap All rights reserved.
								</Footer>
							</Content>
						</>
					</Layout>
				</Layout>
			</Router>
		</>
	);
};

export default App;
