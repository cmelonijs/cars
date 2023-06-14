"use client";

import Image from 'next/image';
import { MouseEventHandler } from 'react';

type CustomButtonProps = {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    buttonType?: "button" | "submit" | "reset";
}

const CustomButton = ({title, containerStyles, handleClick, buttonType}: CustomButtonProps) => {
    return (
        <button onClick={handleClick} disabled={false} type={buttonType} className={`custom-btn ${containerStyles}`}>
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton;