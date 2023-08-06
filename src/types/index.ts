import { MouseEventHandler } from "react";

export type IRootLayoutProps = { children: React.ReactNode };

export type ICustomButtonProps = {
  title: string;
  styles?: string;
  type?: "button" | "submit" | "reset";
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
};
