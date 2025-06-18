import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider, theme, Layout, Typography } from "antd";
import AppLayout from "./components/Layout";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Undercover from "./pages/Undercover";
import Spy from "./pages/Spy";
import Mafia from "./pages/Mafia";
import About from "./pages/About";
import "./App.css";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#722ed1", // Purple primary color
          colorInfo: "#722ed1",
          colorSuccess: "#52c41a",
          colorWarning: "#faad14",
          colorError: "#f5222d",
          colorBgBase: "#0a0a0a", // Very dark background
          colorBgContainer: "#1a1a1a", // Dark container background
          colorBgElevated: "#262626", // Elevated surfaces
          colorBorder: "#434343", // Dark borders
          colorText: "#a6a6a6", // White text
          colorTextSecondary: "#a6a6a6", // Light gray secondary text
          borderRadius: 8,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        },
        components: {
          Layout: {
            headerBg: "#1a1a1a",
            bodyBg: "#0a0a0a",
            headerColor: "#722ed1",
          },
          Typography: {
            titleMarginTop: 0,
            titleMarginBottom: 0,
            colorTextHeading: "#722ed1", // Purple for headings
            colorText: "#a6a6a6", // Light gray for regular text
          },
          Card: {
            colorBgContainer: "#1a1a1a",
            colorBorder: "#434343",
          },
          Button: {
            primaryColor: "#a6a6a6",
            colorPrimary: "#722ed1",
            colorPrimaryHover: "#9254de",
            colorPrimaryActive: "#531dab",
          },
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="games" element={<Games />} />
            <Route path="undercover" element={<Undercover />} />
            <Route path="spy" element={<Spy />} />
            <Route path="mafia" element={<Mafia />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
