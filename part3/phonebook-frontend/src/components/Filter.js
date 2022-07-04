import { InputField } from './InputField'

export function Filter({ pattern, setPattern }) {
  return (
    <InputField
      name="filter"
      label="filter shown with"
      state={pattern}
      setState={setPattern}
    />
  )
}
