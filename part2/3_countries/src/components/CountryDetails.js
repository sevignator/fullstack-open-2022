export function CountryDetails({country}) {
    return (
        <>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <p><b>languages:</b></p>
            <ul>
                {Object.values(country.languages).map(language => {
                    return <li key={language}>{language}</li>;
                })}
            </ul>
            <img src={country.flags.png} alt={`flag of ${country.name.common}`} height="150px" />
        </>
    );
}
