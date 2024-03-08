import { Button, Backdrop, CircularProgress, styled } from "@mui/material";
import React, { useState } from "react";
import background from "assets/background-stats.png";

type Props = {};

const SyledDiv = styled("div")({
  margin: "15px",
  display: "flex",
  justifyContent: "center",
});

const StatsMain = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  width: "60%",
  height: "60%",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5px",
  borderRadius: "10px",
});

const StatItem = styled("div")({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "#C2A47E",
  fontWeight: "600",
  width: "80%",
  display: "flex",
  justifyContent: "center",
  textShadow: "0 0 15px #fff",
  padding: "5px",
  borderLeft: "3px solid #C2A47E",
  borderRight: "3px solid #C2A47E",
  borderRadius: "7px",

  "$::before": {
    content: '""',
    width: "40px",
    height: "40px",
    backgroundColor: "yellow",
  },

  "$::after": {
    content: '""',
    width: "40px",
    height: "40px",
    backgroundColor: "yellow",
  },
});

const stats = [
  "Красоточность",
  "Ум",
  "Рукодельность",
  "Доброта",
  "Кондитерность",
  "Общительность",
  "Бусячность",
];

export default function Stats({}: Props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <SyledDiv>
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{ padding: "20px", backgroundColor: "#C2A47E", color: "#fff" }}
      >
        Показать свои статы
      </Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <StatsMain>
          {stats.map((stat, index) => (
            <StatItem key={index}>99 {stat}</StatItem>
          ))}
        </StatsMain>
      </Backdrop>
    </SyledDiv>
  );
}
