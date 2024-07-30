const TeamConfig = ({
  playersPerTeam,
  onSetPlayersPerTeam,
  onGenerateTeams,
}) => {
  return (
    <div>
      <input
        type="number"
        placeholder="Jogadores por Time"
        value={playersPerTeam}
        onChange={(e) => onSetPlayersPerTeam(e.target.value)}
        required
      />
      <button onClick={onGenerateTeams}>Gerar Times</button>
    </div>
  );
};

export default TeamConfig;
