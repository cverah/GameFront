/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "./colors";
import Hansip from "../assets/fonts/Hansip.ttf";
import SCRUBLAND from "../assets/fonts/SCRUBLAND.ttf";
import background from "../assets/background.jpg";
import { fonts } from "./typography";

export const global = css`
  /* * {
    border: 1px solid green;
  } */

  @font-face {
    font-family: "Hansip";
    src: url(${Hansip});
    text-transform: uppercase;
  }

  @font-face {
    font-family: "SCRUBLAND";
    src: url(${SCRUBLAND});
    text-transform: uppercase;
  }

  body {
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: ${fonts.primary};
    color: ${colors.gray.dark};
    background-image: url(${background});
    background-size: 100% 100%;
    color: white;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`;
