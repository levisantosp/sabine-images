import sharp from "sharp"
import path from "node:path"
import { calcPlayerOvr, getPlayers } from "players"

const started = Date.now()
console.log("generating cards...")
for(const player of getPlayers()) {
  if(!player) throw new Error("Invalid player")
  const base = sharp(`assets/cards/${player.id}.png`)
  let collection: string
  if(player.collection.toLowerCase().startsWith("masters")) {
    collection = "masters"
  }
  else if(player.collection.toLowerCase().startsWith("champions")) {
    collection = "champions"
  }
  else collection = player.collection.toLowerCase()
  const overlays: sharp.OverlayOptions[] = [
    {
      input: `assets/roles/${collection}/${player.role}.png`,
      left: player.role === "initiator" ? 20 : 0,
      top: 0
    },
    {
      input: `assets/countries/${player.country}.png`,
      top: 214,
      left: 135
    },
    {
      input: await sharp(`assets/teams/${player.team}.png`).resize(100, 100).toBuffer(),
      top: 360,
      left: 120
    },
    {
      input: `assets/stats/${collection}/aim.png`,
      top: 120,
      left: -65
    },
    {
      input: `assets/stats/${collection}/hs.png`,
      top: 190,
      left: -65
    },
    {
      input: `assets/stats/${collection}/movement.png`,
      top: 260,
      left: -65
    },
    {
      input: `assets/stats/${collection}/aggression.png`,
      top: 120,
      left: 65
    },
    {
      input: `assets/stats/${collection}/acs.png`,
      top: 190,
      left: 65
    },
    {
      input: `assets/stats/${collection}/gamesense.png`,
      top: 260,
      left: 65
    }
  ]
  const ovr = parseInt(calcPlayerOvr(player).toString()).toString()
  let left = -215
  if(ovr.length === 3) {
    left = -240
  }
  for(const i in ovr.split("")) {
    left += 40
    const n = ovr[i]
    const input = path.resolve(`assets/numbers/${collection}/ovr/${n}.png`)
    overlays.push({
      input,
      top: -280,
      left
    })
  }
  const aim = parseInt(player.aim.toString()).toString()
  const hs = parseInt(player.HS.toString()).toString()
  const mov = parseInt(player.movement.toString()).toString()
  const agg = parseInt(player.aggression.toString()).toString()
  const acs = parseInt(player.ACS.toString()).toString()
  const gms = parseInt(player.gamesense.toString()).toString()
  if(aim.length === 3) {
    left = -230
  }
  else {
    left = -210
  }
  for(const i in aim.split("")) {
    left += 30
    const n = aim[i]
    const input = path.resolve(`assets/numbers/${collection}/stats/${n}.png`)
    overlays.push({
      input,
      top: 120,
      left
    })
  }
  for(const i in hs.split("")) {
    const n = hs[i]
    const input = path.resolve(`assets/numbers/${collection}/stats/${n}.png`)
    overlays.push({
      input,
      top: 190,
      left: i === "0" ? -180 : -150
    })
  }
  for(const i in mov.split("")) {
    const n = mov[i]
    const input = path.resolve(`assets/numbers/${collection}/stats/${n}.png`)
    overlays.push({
      input,
      top: 260,
      left: i === "0" ? -180 : -150
    })
  }
  left = 120
  if(agg.length === 3) {
    left = 105
  }
  for(const i in agg.split("")) {
    left += 30
    const n = agg[i]
    const input = path.resolve(`assets/numbers/${collection}/stats/${n}.png`)
    overlays.push({
      input,
      top: 120,
      left
    })
  }
  left = 120
  if(agg.length === 3) {
    left = 105
  }
  for(const i in acs.split("")) {
    left += 30
    const n = acs[i]
    const input = path.resolve(`assets/numbers/${collection}/stats/${n}.png`)
    overlays.push({
      input,
      top: 190,
      left
    })
  }
  if(gms.length === 3) {
    left = 105
  }
  else {
    left = 120
  }
  for(const i in gms.split("")) {
    left += 30
    const n = gms[i]
    const input = path.resolve(`assets/numbers/${collection}/stats/${n}.png`)
    overlays.push({
      input,
      top: 260,
      left
    })
  }
  base.composite(overlays).toFile(`output/${player.id}.png`)
}
console.log(`cards generated in ${((Date.now() - started) / 1000).toFixed(1)}s`)