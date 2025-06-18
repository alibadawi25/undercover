import { Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const Games = () => {
  return (
    <div className="main-content">
      <Title level={2}>Games </Title>
      <Text>
        Welcome to the games page! Here you can find various games to play.
      </Text>
      <Text>Choose a game to start playing with your friends!</Text>
    </div>
  );
};

export default Games;
