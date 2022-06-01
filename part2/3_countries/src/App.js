import { useState, useEffect } from "react";
import axios from "axios";

import { CountriesFilter } from "./components/CountriesFilter";
import { CountriesList } from "./components/CountriesList";

export function App() {
    const [countries, setCountries] = useState([]);
    const [pattern, setPattern] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then(response => {
                setCountries(response.data);
            });
    }, []);

    return (
        <>
            <CountriesFilter
                pattern={pattern}
                setPattern={setPattern}
            />
            <CountriesList
                countries={countries}
                pattern={pattern}
            />
        </>
    );
}
