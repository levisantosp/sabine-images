import sharp from "sharp"
import getPlayers, { Player } from "./getPlayers.js"
import path from "path"

const calcPlayerOvr = (player: Player) => {
  return (player.aim + player.HS + player.movement + player.aggression + player.ACS + player.gamesense) / 4.5
}

export default async function() {
  const started = Date.now()
  console.log("generating cards...")
  for(const player of await getPlayers()) {
    if(!player) throw new Error("Invalid player")
    const base = sharp(`assets/cards/${player.id}.png`)
    const overlays: sharp.OverlayOptions[] = [
      {
        input: `assets/roles/${player.role}.png`,
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
        input: "assets/stats/aim.png",
        top: 120,
        left: -65
      },
      {
        input: "assets/stats/hs.png",
        top: 190,
        left: -65
      },
      {
        input: "assets/stats/movement.png",
        top: 260,
        left: -65
      },
      {
        input: "assets/stats/aggression.png",
        top: 120,
        left: 65
      },
      {
        input: "assets/stats/acs.png",
        top: 190,
        left: 65
      },
      {
        input: "assets/stats/gamesense.png",
        top: 260,
        left: 65
      }
    ]
    const ovr = parseInt(calcPlayerOvr(player).toString()).toString()
    for(const i in ovr.split("")) {
      const n = ovr[i]
      const input = `assets/numbers/ovr/${n}.png`
      overlays.push({
        input,
        top: -280,
        left: i === "0" ? -175 : -135
      })
    }
    const aim = parseInt(player.aim.toString()).toString()
    const hs = parseInt(player.HS.toString()).toString()
    const mov = parseInt(player.movement.toString()).toString()
    const agg = parseInt(player.aggression.toString()).toString()
    const acs = parseInt(player.ACS.toString()).toString()
    const gms = parseInt(player.gamesense.toString()).toString()
    for(const i in aim.split("")) {
      const n = aim[i]
      const input = path.resolve(`assets/numbers/stats/${n}.png`)
      overlays.push({
        input,
        top: 120,
        left: i === "0" ? -180 : -150
      })
    }
    for(const i in hs.split("")) {
      const n = hs[i]
      const input = path.resolve(`assets/numbers/stats/${n}.png`)
      overlays.push({
        input,
        top: 190,
        left: i === "0" ? -180 : -150
      })
    }
    for(const i in mov.split("")) {
      const n = mov[i]
      const input = path.resolve(`assets/numbers/stats/${n}.png`)
      overlays.push({
        input,
        top: 260,
        left: i === "0" ? -180 : -150
      })
    }
    for(const i in agg.split("")) {
      const n = agg[i]
      const input = path.resolve(`assets/numbers/stats/${n}.png`)
      overlays.push({
        input,
        top: 120,
        left: i === "0" ? 150 : 180
      })
    }
    for(const i in acs.split("")) {
      const n = acs[i]
      const input = path.resolve(`assets/numbers/stats/${n}.png`)
      overlays.push({
        input,
        top: 190,
        left: i === "0" ? 150 : 180
      })
    }
    for(const i in gms.split("")) {
      const n = gms[i]
      const input = path.resolve(`assets/numbers/stats/${n}.png`)
      overlays.push({
        input,
        top: 260,
        left: i === "0" ? 150 : 180
      })
    }
    base.composite(overlays).toFile(`output/${player.id}.png`)
  }
  console.log(`cards generated in ${Date.now() - started}ms`)
}