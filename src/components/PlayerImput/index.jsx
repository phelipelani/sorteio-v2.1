import { useState } from "react";

// eslint-disable-next-line react/prop-types
const PlayerInput = ({ onSetPlayers }) => {
  const [playerList, setPlayerList] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSetPlayers(playerList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="10"
        cols="30"
        placeholder="Digite a lista de jogadores"
        value={playerList}
        onChange={(e) => setPlayerList(e.target.value)}
        required
      />
      <button type="submit">Adicionar Jogadores</button>
    </form>
  );
};

export default PlayerInput;
