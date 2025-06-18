import React from "react";
import { Typography, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import AnimatedCard from "../components/AnimatedCard";

const { Title } = Typography;

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <AnimatedCard
        className="welcome-card"
        bordered
        animationType="fadeUp"
        delay={0}
      >
        <Title level={3} className="welcome-title">
          Welcome to Undercover!
        </Title>
        <Typography.Paragraph className="welcome-text">
          The perfect place to play classic social deduction games like Spy,
          Mafia, and Undercover with friends!
        </Typography.Paragraph>
      </AnimatedCard>

      <AnimatedCard
        className="welcome-card"
        bordered
        animationType="fadeUp"
        delay={1}
      >
        <Space direction="vertical" size="large">
          <Button
            type="primary"
            size="large"
            className="primary-button"
            onClick={() => navigate("/games")}
          >
            Get Started
          </Button>
          <Button
            size="large"
            className="secondary-button"
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
        </Space>
      </AnimatedCard>
    </>
  );
};

export default Home;
