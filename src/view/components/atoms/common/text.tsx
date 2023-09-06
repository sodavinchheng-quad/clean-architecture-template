import React from "react";

interface Props {
  text: string;
}

export const Text: React.FC<Props> = (props) => {
  const { text } = props;

  return <p>{text}</p>;
};
