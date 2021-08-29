import { ReactNode } from "react";
import { ContainerProps } from "./ContainerProps";

export interface SidebarProps extends ContainerProps {
  items: SidebarItem[];
}

export interface SidebarItem {
  url: string;
  title: string;
  icon: ReactNode;
}

export interface ItemContainerProps {
  active?: boolean;
  open?: boolean;
}
