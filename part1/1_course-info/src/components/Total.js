export function Total({parts}) {
    const total = parts.reduce((total, currentPart) => total + currentPart.exercises, 0);
    
    return <p>Number of exercises {total}</p>;
}
