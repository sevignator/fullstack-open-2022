import { CapitalWeather } from "./CapitalWeather";
import { CountryDetails } from "./CountryDetails";

export function CountryView({country}) {
    return (
        <>
            <CountryDetails country={country} />
            <CapitalWeather country={country} />
        </>
    );
}
