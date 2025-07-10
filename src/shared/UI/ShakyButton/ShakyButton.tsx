import { Button, ButtonProps } from "antd";
import React, { useEffect, useState } from "react";

import styles from "./ShakyButton.module.scss";

type ShakyButtonProps = ButtonProps & {
  isActive?: boolean;
};

const angles = [-5, 5, -6, 6, -7, 7];

export const ShakyButton = ({
  onClick,
  isActive = true,
  children,
  className,
  ...props
}: ShakyButtonProps) => {
  const [shaking, setShaking] = useState(false);
  const [randomAngle, setRandomAngle] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * angles.length);
    setRandomAngle(angles[randomIndex]);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setShaking(true);
    setTimeout(() => setShaking(false), 400);
    if (onClick) onClick(e);
  };

  return (
    <Button
      {...props}
      onClick={handleClick}
      className={`${className ?? ""} ${shaking ? styles.shake : ""}`}
      style={{
        transform: isActive ? "none" : `rotate(${randomAngle}deg)`,
        transition: "transform 0.3s ease",
        borderColor: isActive ? "black" : "gray",
        ...props.style,
      }}
    >
      {children}
    </Button>
  );
};
