export const shuffleAndDistribute = (players, playersPerTeam) => {
    const shuffledPlayers = [...players];
  
    // Fisher-Yates Shuffle
    for (let i = shuffledPlayers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPlayers[i], shuffledPlayers[j]] = [shuffledPlayers[j], shuffledPlayers[i]];
    }
  
    const teams = [];
    for (let i = 0; i < shuffledPlayers.length; i += playersPerTeam) {
      teams.push(shuffledPlayers.slice(i, i + playersPerTeam));
    }
  
    return teams;
  };