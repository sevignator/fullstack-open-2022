import { CountryView } from "./CountryView";
import { CountryItem } from "./CountryItem";

export function CountriesList({countries, pattern}) {
    function getCountriesList() {
        const filteredCountries = countries
            .filter(country => {
                const regex = new RegExp(pattern, "i");
                return regex.test(country.name.common);
            });

        if (filteredCountries.length > 10) {
            return <p>Too many matches, specify another filter</p>;
        }

        if (filteredCountries.length === 1) {
            const country = filteredCountries[0];
            return <CountryView country={country} />;
        }

        return filteredCountries.map(country => (
            <CountryItem key={country.cca3} country={country} />
        ));
    }

    return (
        <div>
            {getCountriesList()}
        </div>
    );
}
