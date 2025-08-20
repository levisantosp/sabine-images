import getPlayers from "./getPlayers.ts"

export default async function(playerID: number) {
  return (await getPlayers()).find(p => p.id === playerID)
}