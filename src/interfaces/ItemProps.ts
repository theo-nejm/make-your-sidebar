import { ReactNode } from "react";

export interface ItemProps {
  icon: ReactNode;
  title: string;
  url: string;
  isOpen?: boolean;
}
