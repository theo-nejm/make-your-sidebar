import { SidebarItem, SidebarProps } from "../../interfaces/Sidebar";
import Item from "../Item";
import { Container } from "./style";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

export default function Sidebar(props: SidebarProps) {
  const { items } = props;
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function renderItems(items: SidebarItem[]) {
    return items.map((item) => {
      return <Item data={item} isOpen={isOpen} />;
    });
  }

  return (
    <Container open={isOpen}>
      <HiOutlineMenuAlt1 className="hamb-menu" onClick={toggleMenu} />
      {renderItems(items)}
    </Container>
  );
}
