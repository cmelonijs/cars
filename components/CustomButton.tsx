"use client";

import Image from 'next/image';
import { MouseEventHandler } from 'react';

type CustomButtonProps = {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps) => {
    return (
        <button onClick={handleClick} disabled={false} type={"button"} className={`custom-btn ${containerStyles}`}>
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton;