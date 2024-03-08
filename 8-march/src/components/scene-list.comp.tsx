import { styled } from "@mui/material";
import React from "react";
import SceneItem from "./scene-item.comp";

import kps from "assets/kps.png";
import pokn from "assets/pokn.png";
import iont from "assets/iont.png";

import Alex from "assets/aleksandr.png";
import Amen from "assets/amen.png";
import Ram from "assets/Ram.webp";

type Props = {};

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
});

const characters = [
  {
    background: kps,
    character: Ram,
    name: "Рам",
    phrases: [
      "Моя махарани, я поздравляю тебя в этот чудесный день",
      "Пускай ты не всегда горда, но всегда достойно держишься в любой ситуации",
      "А та страсть, которая возникает между нами...",
      "Страшно подумать, что может случится с тем, кто захочет отобрать тебя у меня, будь он хоть Бельгийским лордом ",
      "Пускай боги всегда тебе благоволят на твоем пути, तुमसे प्यार है",
    ],
    color: {
      boxColor: "#5E1622",
      textColor: "#FCCDC5",
      tintColor: "#9F630B",
      darkerTint: "#875409",
    },
  },
  {
    background: pokn,
    character: Amen,
    name: "Амен",
    phrases: [
      "Моя непокорная неферут...",
      "Я знаю, что ты со мной всегда была честна, хоть и хитрости не занимать тебе",
      "Но когда я впервые тебя увидел, понял- моей станешь, не смотря ни какую магию которая творится вокруг",
      "Вместе нам быть суждено, أنا أُحِبُّكَ",
    ],
    color: {
      boxColor: "#2B292C",
      textColor: "#E3DAD1",
      tintColor: "#AB8A5D",
      darkerTint: "#826946",
    },
  },
  {
    background: iont,
    character: Alex,
    name: "Александр",
    phrases: [
      "Лилла каттен, поздравляю тебя с этим прздником",
      "Желаю, чтобы твоя интуиция тебя никогда не подводила, а логика всегда была безупречна",
      "И чтобы жопа нигде не застревала...",
      "Älskar dig",
    ],
    color: {
      boxColor: "#403448",
      textColor: "#D4C7DB",
      tintColor: "#504239",
      darkerTint: "#1B605D",
    },
  },
];

export default function SceneList({}: Props) {
  return (
    <StyledDiv>
      {characters.map((character, index) => (
        <SceneItem key={index} {...character} />
      ))}
    </StyledDiv>
  );
}
