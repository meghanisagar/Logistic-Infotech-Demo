import { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Player, playerScoreList } from "../../assets/datasource";
import {
  Avatar,
  Container,
  PlayerList,
  PlayerItem,
  PlayerName,
  Points,
  RankBadge,
} from "../../styled-components/index";

export default function ScoreCard() {
  const [parent] = useAutoAnimate();
  const [players, setPlayers] = useState<Player[]>(playerScoreList);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedPlayers = players.map((player) => ({
        ...player,
        points: player.score + Math.floor(Math.random() * 500),
      }));
      setPlayers([...updatedPlayers].sort((a, b) => b.points - a.points));
    }, 750);

    return () => clearInterval(interval);
  }, [players]);

  return (
    <Container>
      <h1 className="text-lg font-semibold">Leaderboard</h1>
      <PlayerList ref={parent}>
        {players.map((player, index) => (
          <PlayerItem key={player.userID} index={index}>
            <PlayerName>
              <RankBadge>{index + 1}</RankBadge>
              <Avatar>{player.avatar}</Avatar>
              <span>{player.displayName}</span>
            </PlayerName>
            <Points>{player.score} points</Points>
          </PlayerItem>
        ))}
      </PlayerList>
    </Container>
  );
}
