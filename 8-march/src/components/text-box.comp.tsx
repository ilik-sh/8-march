import { styled } from "@mui/material";
import React from "react";

type Props = {
  isVisible: boolean;
  text: string;
  name: string;
  boxColor: string;
  textColor: string;
  tintColor: string;
  darkerTint: string;
};

const StyledDiv = styled("div")({
  width: "90%",
  height: "15%",
  position: "absolute",
  bottom: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  borderRadius: "5px",
  transition: "opacity 0.2s ease-in, visibility 0.2s ease-in",
});

const NameTag = styled("div")({
  position: "absolute",
  left: "10px",
  top: "-20px",
  padding: "5px",
});

export default function TextBox({
  isVisible,
  text,
  name,
  boxColor,
  textColor,
  tintColor,
  darkerTint,
}: Props) {
  return (
    <StyledDiv
      style={
        isVisible
          ? {
              opacity: "1",
              visibility: "visible",
              backgroundColor: boxColor,
              color: textColor,
              border: `2px solid ${tintColor}`,
            }
          : {
              opacity: "0",
              visibility: "hidden",
            }
      }
    >
      <NameTag
        style={{
          backgroundColor: darkerTint,
          color: textColor,
          border: `2px solid ${tintColor}`,
        }}
      >
        {name}
      </NameTag>
      {text}
    </StyledDiv>
  );
}
