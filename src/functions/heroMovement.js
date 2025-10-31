import { displayBackpack } from "./displayStats";

// place hero name on first square on startup
export const placeHero = (hero) => {
  const square = document.getElementById(hero.location.id)
  let icon = document.createElement("img")
  icon.src = hero.icon;
  icon.height = "30"
  icon.width = "30"
  square.appendChild(icon);
}

//update hero objects location property based on new tile id
export const updateHeroLocation = (newId, world, hero) => {
  let newTile;
  world.land.forEach(row => {
    row.forEach(tile => {
      if(tile.id == newId) {
        newTile = tile;
      }
    })
  })
  hero.location = newTile
}