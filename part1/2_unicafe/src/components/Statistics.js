import { StatisticLine } from "./StatisticLine";

export function Statistics({stats}) {
    const {good, neutral, bad} = stats;
    const total = good + neutral + bad;
    const average = (good + (bad * -1)) / total || 0;
    const positivePercentage = `${(good / total * 100 || 0)} %`;

    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={total} />
                <StatisticLine text="average" value={average} />
                <StatisticLine text="positive" value={positivePercentage} />
            </tbody>
        </table>
    );
}
