import React from "react";

export interface ButtonProps {
  className: string;
}

/* @ts-expect-error */
export const Button: React.FC<ButtonProps> = (props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return <Button className="my-class"></Button>;
};
