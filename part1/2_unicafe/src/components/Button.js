export function Button({type, clickHandler}) {
    return <button onClick={clickHandler(type)}>{type}</button>;
}
