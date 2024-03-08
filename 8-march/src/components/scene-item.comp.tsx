import React, { useState } from "react";
import Character from "./character.comp";
import { styled } from "@mui/material";

import TextBox from "./text-box.comp";

type Props = {
  background: string;
  character: string;
  name: string;
  phrases: string[];
  color: {
    boxColor: string;
    textColor: string;
    tintColor: string;
    darkerTint: string;
  };
};

const StyledDiv = styled("div")({
  width: "90%",
  height: "100%",
  borderRadius: "10px",
  boxShadow: "0 0 0.75rem black",
  position: "relative",
  display: "flex",
  justifyContent: "center",
});

export default function SceneItem({
  background,
  character,
  color,
  name,
  phrases,
}: Props) {
  const [textVisible, setTextVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    if (textVisible) {
      if (index == phrases.length - 1) {
        setTextVisible(false);
      } else {
        setTextVisible(false);
        setIndex(index + 1);
        setTextVisible(true);
      }
    } else {
      setIndex(0);
      setTextVisible(true);
    }
  };

  return (
    <StyledDiv
      style={{ backgroundImage: `url(${background})` }}
      onClick={handleClick}
    >
      <Character character={character} />
      <TextBox
        isVisible={textVisible}
        text={phrases[index]}
        {...color}
        name={name}
      />
    </StyledDiv>
  );
}
