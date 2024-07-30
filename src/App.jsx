import { useState } from "react";
import { shuffleAndDistribute } from "./components/utils";
import PlayerInput from "./components/PlayerImput";
import TeamConfig from "./components/TeamConfig";
import TeamDisplay from "./components/TeamDisplay";
import AnimatedLetters from "./AnimatedLetters";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [playersPerTeam, setPlayersPerTeam] = useState(0);
  const [teams, setTeams] = useState([]);

  const handleSetPlayers = (playerList) => {
    const players = playerList.split("\n").map((line) => {
      const [_, name, score] = line
        .trim()
        .match(/^\d+\s+(.+?)\s+([\d,]+)$/)
        .map((part, index) => (index === 2 ? part.replace(",", ".") : part));
      return { name, score: parseFloat(score) };
    });
    setPlayers(players);
  };

  const handleSetPlayersPerTeam = (number) => {
    setPlayersPerTeam(parseInt(number));
  };

  const handleGenerateTeams = () => {
    const shuffledTeams = shuffleAndDistribute(players, playersPerTeam);
    setTeams(shuffledTeams);
  };

  return (
    <div>
      <h1>Sorteio das Lendas</h1>
      <AnimatedLetters
        text="Sorteio das Lendas"
        fontSize="2rem"
        color="blue"
        fontFamily="Arial, sans-serif"
        
      />
      <PlayerInput onSetPlayers={handleSetPlayers} />
      <TeamConfig
        playersPerTeam={playersPerTeam}
        onSetPlayersPerTeam={handleSetPlayersPerTeam}
        onGenerateTeams={handleGenerateTeams}
      />
      <TeamDisplay teams={teams} />
    </div>
  );
};

export default App;
