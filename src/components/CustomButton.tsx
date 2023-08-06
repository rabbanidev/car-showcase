"use client";

import { ICustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  styles,
  type,
  onClickHandler,
}: ICustomButtonProps) => {
  return (
    <button
      type={type || "button"}
      className={`custom-btn ${styles}`}
      onClick={onClickHandler}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
