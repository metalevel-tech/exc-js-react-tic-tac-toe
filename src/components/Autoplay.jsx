import React from "react";
import PlayerCog from "./players/PlayerCog";
import ToggleSwitch from "./ToggleSwitch";

export default function GameAutoplay({
  autoplay,
  setAutoplay,
  players,
  setPlayers,
  xIsNext,
  setNewGame
}) {
  function handleSetAutoplay(trigger) {
    setAutoplay(trigger);
    setNewGame(true);
  }

  return (
    <div className="game-autoplay relative">
      <ToggleSwitch
        switch={(trigger) => handleSetAutoplay(trigger)}
        label={"Vs Computer"}
        default={autoplay}
      />
      {autoplay && (
        <div className="absolute scale-75 -top-5 -right-10">
          <PlayerCog />
        </div>
      )}
    </div>
  );
}
