import { Typography, Space, List } from "antd";
import React from "react";
import AnimatedCard from "../components/AnimatedCard";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="main-content">
      <AnimatedCard
        className="welcome-card"
        animationType="slideRight"
        delay={0}
      >
        <Title level={3} className="welcome-title">
          About Undercover
        </Title>
        <br />
        <Paragraph className="welcome-text">
          Undercover is your digital companion for real-life social deduction
          games. We don't replace the fun of in-person gaming – we enhance it by
          providing the tools you need to play classic party games like Spy,
          Mafia, and Undercover with your friends and family.
        </Paragraph>
      </AnimatedCard>{" "}
      <AnimatedCard
        className="welcome-card"
        animationType="slideLeft"
        delay={1}
      >
        <Title level={3} className="welcome-title">
          🎯 What We Provide
        </Title>
        <List
          dataSource={[
            {
              title: "🎭 Role Distribution",
              description:
                "Secretly assign roles to players without anyone knowing who got what",
            },
            {
              title: "⏱️ Game Timers",
              description:
                "Built-in timers for discussion rounds, voting phases, and game segments",
            },
            {
              title: "📋 Game Rules & Setup",
              description:
                "Clear instructions and setup guides for each game variant",
            },
            {
              title: "👥 Player Management",
              description:
                "Easy tools to manage player lists, voting, and game state",
            },
            {
              title: "🔧 Customization",
              description:
                "Adjust game settings, roles, and timers to fit your group",
            },
          ]}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<span style={{ color: "#722ed1" }}>{item.title}</span>}
                description={
                  <span style={{ color: "#a6a6a6" }}>{item.description}</span>
                }
              />
            </List.Item>
          )}
        />
      </AnimatedCard>{" "}
      <AnimatedCard
        className="welcome-card"
        animationType="slideRight"
        delay={2}
      >
        <Title level={3} className="welcome-title">
          🎲 Perfect for Group Games
        </Title>
        <br />
        <Paragraph className="welcome-text">
          Whether you're hosting a party, having a family gathering, or just
          hanging out with friends, Undercover makes it easy to jump into
          classic social deduction games. No need for physical cards,
          complicated setups, or someone to moderate – our digital tools handle
          the logistics while you focus on the fun, deception, and social
          interaction that makes these games amazing.
        </Paragraph>

        <Paragraph className="welcome-text">
          <strong style={{ color: "#722ed1" }}>
            Just gather your group, grab your phones, and start playing!
          </strong>
        </Paragraph>
      </AnimatedCard>
      <AnimatedCard
        className="welcome-card"
        animationType="slideLeft"
        delay={3}
      >
        {" "}
        <Title level={3} className="welcome-title">
          🌟 Why Choose Undercover?
        </Title>
        <List
          dataSource={[
            {
              title: "🚀 Quick Setup",
              description: "Get games started in under a minute",
            },
            {
              title: "📱 Mobile Friendly",
              description: "Works perfectly on phones and tablets",
            },
            {
              title: "🎮 Multiple Games",
              description: "Support for Spy, Mafia, Undercover, and more",
            },
            {
              title: "👑 Fair Play",
              description: "Randomized roles and unbiased game management",
            },
            {
              title: "🎉 Enhanced Fun",
              description: "Focus on the social experience, not the setup",
            },
          ]}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<span style={{ color: "#722ed1" }}>{item.title}</span>}
                description={
                  <span style={{ color: "#a6a6a6" }}>{item.description}</span>
                }
              />
            </List.Item>
          )}
        />
      </AnimatedCard>
    </div>
  );
};

export default About;
