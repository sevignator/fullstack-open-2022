import { useState } from "react";

import { CountryView } from "./CountryView";

export function CountryItem({country}) {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpanded() {
        setIsExpanded(prevState => !prevState);
    }

    return (
        <div>
            <span>{country.name.common}</span>
            <button onClick={toggleExpanded}>{isExpanded ? "show" : "hide"}</button>
            {isExpanded && <CountryView country={country} />}
        </div>
    );
}
