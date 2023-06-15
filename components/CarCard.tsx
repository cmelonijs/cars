"use client";

import { useState } from "react";
import Image from "next/image";
import { Car } from "@/app/page";

interface Props {
    car: Car
}

const CarCard = ({car}: Props) => {
    return (
        <h2>Car</h2>
    )
}

export default CarCard