import { useState } from "react";

export function App() {
    const anecdotes = [
        "If it hurts, do it more often",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients"
    ];

    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

    const mostVotedIndex = getMostVotedIndex();

    function getMostVotedIndex() {
        const highestScore = Math.max(...points);
        return points.indexOf(highestScore);
    }

    function increaseVoteCount() {
        setPoints(prevState => {
            const copy = [...prevState];
            copy[selected]++;
            return copy;
        });
    }

    function setRandomAnecdote() {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    }

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{anecdotes[selected]}</p>
            <p>has {points[selected]} votes</p>
            <button onClick={increaseVoteCount}>vote</button>
            <button onClick={setRandomAnecdote}>next anecdote</button>

            <h2>Anecdote with the most vote</h2>
            <p>{anecdotes[mostVotedIndex]}</p>
            <p>has {points[mostVotedIndex]} votes</p>
        </div>
    );
}
