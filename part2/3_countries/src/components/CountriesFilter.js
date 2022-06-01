export function CountriesFilter({pattern, setPattern}) {
    function handleChange(event) {
        setPattern(event.target.value);
    }

    return (
        <>
            <label htmlFor="search">find countries</label>
            <input
                type="text"
                name="search"
                value={pattern}
                onChange={handleChange}
            />
        </>
    );
}
