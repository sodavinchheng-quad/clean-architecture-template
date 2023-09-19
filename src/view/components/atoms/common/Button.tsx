import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = (props) => {
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
};
