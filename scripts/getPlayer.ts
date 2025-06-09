import getPlayers from "./getPlayers.js"

export default async function(playerID: number) {
  return (await getPlayers()).find(p => p.id === playerID)
}