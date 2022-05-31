import { InputField } from "./InputField";

export function FilterSection({pattern, setPattern}) {
    return (
        <InputField
            name="filter"
            label="filter shown with"
            state={pattern}
            setState={setPattern}
        />
    );
}
