import { useState } from "react";

import { Button } from "./components/Button";
import { Statistics } from "./components/Statistics";

export function App() {
    const [stats, setStats] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const feedbackWasGiven = stats.good || stats.neutral || stats.bad;

    function handleFeedback(type) {
        return () => {
            setStats(prevState => ({
                ...prevState,
                [type]: prevState[type] + 1
            }));
        };
    }

    return (
        <div>
            <h2>give feedback</h2>
            <Button type="good" clickHandler={handleFeedback} />
            <Button type="neutral" clickHandler={handleFeedback} />
            <Button type="bad" clickHandler={handleFeedback} />

            <h2>statistics</h2>
            {feedbackWasGiven
                ? <Statistics stats={stats} />
                : <p>No feedback given</p>
            }
        </div>
    );
}
