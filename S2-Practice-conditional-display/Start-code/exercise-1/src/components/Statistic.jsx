export default function Statistic({scores})
{
    const average = (scores.reduce((sum, s) => sum + s, 0) / scores.length).toFixed(0);
    const min = Math.min(...scores);
    const max = Math.max(...scores);
    return ( 
        <>
        <div className="statistics">
            <div>
                <p>AVERAGE</p>
                <h2>{average}</h2>
            </div>
            <div>
                <p>MIN</p>
                <h2>{min}</h2>
            </div>
            <div>
                <p>MAX</p>
                <h2>{max}</h2>
            </div>
        </div>
        </>
    );

}