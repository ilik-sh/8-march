import "./App.css";
import SceneList from "components/scene-list.comp";
import { Typography, styled } from "@mui/material";
import cat from "assets/cat.jpg";
import Stats from "components/stats.comp";

const StyledTypography = styled(Typography)({
  backgroundColor: "#C2A47E",
  color: "#fff",

  padding: "10px",
});

const StyledImage = styled("img")({
  width: "100%",
  marginBottom: "20px",
});

function App() {
  return (
    <>
      <StyledTypography variant="h4">
        Екатерина, поздравляем с 8 марта!
      </StyledTypography>
      <StyledImage src={cat}></StyledImage>
      <SceneList />
      <Stats />
    </>
  );
}

export default App;
