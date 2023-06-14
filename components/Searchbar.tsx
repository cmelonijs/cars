"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const Searchbar = () => {
    const [manufacturer, setManufacturer] = useState<string>('')
    const handleSearch = () => {}

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searcbar__item">
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}  />
            </div>
            <div className="searcbar__item"></div>
        </form>
    )
}

export default Searchbar;