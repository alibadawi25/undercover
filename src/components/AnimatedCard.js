import React from "react";
import { Card } from "antd";
import useScrollAnimation from "../hooks/useScrollAnimation";

const AnimatedCard = ({
  children,
  className = "",
  animationType = "fadeUp",
  delay = 0,
  ...props
}) => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.05,
    rootMargin: "0px 0px 0px 0px",
  });

  const getAnimationClass = () => {
    switch (animationType) {
      case "fadeUp":
        return "card-hidden";
      case "slideLeft":
        return "slide-in-left";
      case "slideRight":
        return "slide-in-right";
      case "fadeScale":
        return "fade-scale";
      default:
        return "card-hidden";
    }
  };

  const getDelayClass = () => {
    if (delay === 1) return "card-delay-1";
    if (delay === 2) return "card-delay-2";
    if (delay === 3) return "card-delay-3";
    return "";
  };

  const animationClass = getAnimationClass();
  const delayClass = getDelayClass();
  const visibilityClass = isVisible ? "card-visible" : "";
  return (
    <Card
      ref={ref}
      className={`${className} ${animationClass} ${visibilityClass} ${delayClass}`.trim()}
      {...props}
    >
      {children}
    </Card>
  );
};

export default AnimatedCard;
