import React from "react";
import { List } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import "./index.less";
import { SvgIcon } from "../../components/common";

const data = [
  {
    icon: <SvgIcon name='intro-icon' viewbox='0 0 33.007 36.341' /> ,
    title: 'Introduction',
    description: 'cSwap is a decentralized, IBC-enabled exchange built on the Comdex chain.',
    url: '/Introduction',
  },
  {
    icon: <SvgIcon name='protocol-icon' viewbox='0 0 36 31.5' /> ,
    title: 'Mechanism',
    description: 'cSwap has been built to provide its users with a platform that is safe',
    url: '/mechanism',
  },
  {
    icon: <SvgIcon name='faq-icon' viewbox='0 0 30 28.451' /> ,
    title: 'FAQs',
    description: 'cSwap aspires to be among the top money markets.',
    url: '/faq',
  },
  {
    icon: <SvgIcon name='voting' viewbox='0 0 30 22.222' /> ,
    title: 'Voting',
    description: 'In the cSwap dex, CMDX will be the governance token.',
    url: '/voting',
  }
];

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <h2 className="mb-0">cSwap Documentation</h2>
      <h4>cSwap is a decentralized, IBC-enabled exchange built on the Comdex chain.</h4>
      <h2 className="mb-0 mt-4">Explore cSwap</h2>
        <List
          className="home-list"
          grid={{ 
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 2,
            xxl: 2,
           }}
          dataSource={data}
          renderItem={item => (
            <List.Item onClick={() => { history.push(`${item.url}`) }}>
              <List.Item.Meta
                avatar={item.icon}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
        <div className="bottom-cards">
          <Link to={{ pathname: "https://twitter.com/cSwap_Finance" }} target="_blank">
            <div className="card-items">
              <div className="arrow-link"><SvgIcon name='arrow-topright' viewbox='0 0 22.056 22.504' /></div>
              <SvgIcon name='swap-icon' viewbox='0 0 38.048 41' />
              <h4>cSwap app</h4>
              <p>link to redirect <br /> traffic to app</p>
            </div>
          </Link>
          <Link to={{ pathname: "https://discord.gg/ypUb5Gyh7Z" }} target="_blank">
            <div className="card-items">
              <div className="arrow-link"><SvgIcon name='arrow-topright' viewbox='0 0 22.056 22.504' /></div>
              <SvgIcon name='discord' viewbox='0 0 29.539 22.155' />
              <h4>Discord</h4>
              <p>chat with community <br /> on discord</p>
            </div>
          </Link>
          <Link to={{ pathname: "/" }}>
            <div className="card-items">
              <div className="arrow-link"><SvgIcon name='arrow-topright' viewbox='0 0 22.056 22.504' /></div>
              <SvgIcon name='help-icon' viewbox='0 0 27 31.5' />
              <h4> Found an issue?</h4>
              <p>improve this page by adding <br /> suggestion on Github</p>
            </div>
          </Link>
        </div>
    </div>
  );
};

export default Home;
