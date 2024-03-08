import { styled } from "@mui/material";

type Props = {
  character: string;
};

const StyledImage = styled("img")({
  maxHeight: "1080px",
  maxWidth: "80%",
});

export default function Character({ character }: Props) {
  return <StyledImage src={character}></StyledImage>;
}
