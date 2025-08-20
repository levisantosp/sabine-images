import type { Player } from "./getPlayers.ts"

export default function(player: Player) {
  return (player.aim + player.HS + player.movement + player.aggression + player.ACS + player.gamesense) / 6
}