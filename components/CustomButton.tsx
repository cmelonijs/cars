"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  buttonType?: "button" | "submit" | "reset";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
};

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  buttonType,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      onClick={handleClick}
      disabled={false}
      type={buttonType}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <Image src={rightIcon} width={20} height={20} alt="right-arrow" />
      )}
    </button>
  );
};

export default CustomButton;
