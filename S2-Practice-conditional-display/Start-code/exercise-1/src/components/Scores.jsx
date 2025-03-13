
import Statistic from "./Statistic";
export default function Scores({courseName,scores})
{
    return ( 
        <>
        <div class="scores">    
        <h1>{courseName}</h1>
        <table>
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((score) => (
                <tr>
                    <td>{score.firstName}</td>
                    <td>{score.lastName}</td>
                    <td className={score.score < 50 ? "warning" : ""}>
                        {score.score}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        <Statistic scores={scores.map((s) => s.score)} />
        </div>
        </>
    );

}