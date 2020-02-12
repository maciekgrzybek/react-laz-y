import React from 'react';
import ReactLazy from '../build/index.es';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export default {
  title: 'Basic example',
  component: ReactLazy
};

export const Basic = () => {
  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < 9; i++) {
      cards.push(
        <ReactLazy key={i}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <Icon type="setting" key="setting" />,
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </ReactLazy>
      );
    }
    return cards;
  };
  return (
    <div>
      <div style={{ height: '300vh' }}></div>
      <header>{renderCards()}</header>
    </div>
  );
};
