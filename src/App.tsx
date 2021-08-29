import "./styles.css";
import Sidebar from "./components/Sidebar";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { SidebarItem } from "./interfaces/Sidebar";
import { useState } from "react";

const sidebarItems: SidebarItem[] = [
  {
    icon: BiHomeAlt,
    title: "Home",
    url: "/"
  },
  {
    icon: AiOutlineCalendar,
    title: "Calendar",
    url: "/"
  },
  {
    icon: BiHomeAlt,
    title: "Home",
    url: "/"
  },
  {
    icon: AiOutlineCalendar,
    title: "Calendar",
    url: "/"
  },
  {
    icon: BiHomeAlt,
    title: "Home",
    url: "/"
  },
  {
    icon: AiOutlineCalendar,
    title: "Calendar",
    url: "/"
  }
];

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Sidebar items={sidebarItems} />
    </div>
  );
}
