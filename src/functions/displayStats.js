import { tradeObjects } from "../main";

/**
 * Displays tiles surface and plant on screen
 * Adjust to accustom several plants and objects
 */
export const displayTileProps = (hero) => {
  const tile = hero.location
  const container = document.getElementById("tile-info-container")
  container.innerHTML = "";
  const heading = document.createElement("h3")
  heading.innerHTML = "Tile info"

  const plant = document.createElement("div")
  plant.innerHTML = "Plant: " + `<img width="20" height="20" src="${tile.plant}">`

  const surface = document.createElement("div")
  surface.innerHTML = "Surface: " + tile.surface

  container.appendChild(heading)
  container.appendChild(surface)
  container.appendChild(plant)

  // this condition needs to be done better, might brake after trades
  if(tile.objects[0] !== ""){
    const object = document.createElement("div")
    object.innerHTML = "Object: " + tile.objects
    container.appendChild(object)
  }

  tradeObjects(container, tile)
}

/**
 * display life and strength stats on screen
 */
export const displayHealth = (hero) => {
  const container = document.getElementById("health")
  let life = document.createElement("div")
  let strength = document.createElement("div")
  life.innerHTML = "Life: " + hero.life
  strength.innerHTML = "Strength: " + hero.strength

  container.appendChild(life)
  container.appendChild(strength)
}


/**
 * loop through the bag and display on screen
 */
export const displayBackpack = (hero) => {
  const container = document.getElementById("backpack")
  container.innerHTML = "";
  const heading = document.createElement("h3")
  heading.innerHTML = "Backpack"
  container.appendChild(heading)

  hero.bag.forEach(item => {
    const div = document.createElement("div")
    div.innerHTML = item;
    container.appendChild(div)
  });
}