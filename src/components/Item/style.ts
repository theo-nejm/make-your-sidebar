import styled, { css } from "styled-components";
import { ItemContainerProps } from "../../interfaces/Sidebar";

export const ItemContainer = styled.div<ItemContainerProps>`
  ${({ active, open }) => css`
    font-family: "Poppins", sans-serif;
    padding: 0.5rem;
    margin-top: 0.6rem;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 0.825rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      background: #f7f6fb;
    }

    & .icon {
      font-size: 24px;
    }

    & p {
      margin-left: 16px;
      display: ${open ? "flex" : "none"};
    }
  `}
`;
