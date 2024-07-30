const TeamDisplay = ({ teams }) => {
    return (
      <div>
        {teams.map((team, index) => {
          const totalScore = team.reduce((sum, player) => sum + player.score, 0);
          return (
            <div key={index}>
              <h2>Time {index + 1} - Pontuação Total: {totalScore.toFixed(2)}</h2>
              <ul>
                {team.map((player, idx) => (
                  <li key={idx}>{player.name} - {player.score}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default TeamDisplay;
