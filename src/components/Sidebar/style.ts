import styled, { css } from "styled-components";
import { ContainerProps } from "../../interfaces/ContainerProps";

function getSide(side?: "left" | "right") {
  if (side) {
    return side === "left" ? 0 : "calc(100vw - 6rem)";
  } else {
    return 0;
  }
}

export const Container = styled.div<ContainerProps>`
  ${({ open, side, bgColor, color, fontFamily }) => css`
    width: ${open ? "12.5rem" : "4.5rem"};
    height: 100vh;
    border-radius: 0.25rem;
    background: ${bgColor || "#fff"};
    position: absolute;
    left: ${getSide(side)};
    color: ${color || "#151515"};
    top: 0;
    font-family: ${fontFamily || "sans-serif"};
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 1rem;

    overflow: hidden;

    transition: 0.15s;

    & > svg {
      margin-left: 0.5rem;
      font-size: 24px;
      margin-bottom: 1rem;
      cursor: pointer;
      border-radius: 0.5rem;
    }

    & .hamb-menu:hover {
    }
  `}
`;
