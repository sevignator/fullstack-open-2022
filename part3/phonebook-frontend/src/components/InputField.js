export function InputField({ name, label, state, setState }) {
  function handleChange(event) {
    setState(event.target.value)
  }

  return (
    <div>
      <label htmlFor={name}>{label ?? name}: </label>
      <input
        type="text"
        name={name}
        value={state}
        onChange={handleChange}
      />
    </div>
  )
}
