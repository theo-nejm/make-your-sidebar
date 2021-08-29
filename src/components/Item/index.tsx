import { createElement } from "react";
import { ItemContainer } from "./style";

function Item({ data, isOpen }: ItemProps) {
  function handleClick() {
    // goes to url
  }

  return (
    <ItemContainer onClick={handleClick} open={isOpen}>
      {createElement(data.icon, { className: "icon" })}
      <p>{data.title}</p>
    </ItemContainer>
  );
}

export default Item;
