import { displayBackpack, displayHealth, displayTileProps } from './functions/displayStats'
import { placeHero, updateHeroLocation } from './functions/heroMovement'
import { Hero } from './models/hero'
import { Tile } from './models/tile'
import { World } from './models/world'
import './style.scss'

//find world container
const worldElement = document.getElementById("world")

//hero icon url
let heroIconUrl = "./src/assets/images/flower.png" //change url when freepik works again

//there must be better way to do this
let world = new World([])
let hero = new Hero(heroIconUrl, ["rope", "apple"])

//flower urls
const flower = "./src/assets/images/flower.png"
const tree = "./src/assets/images/tree.png"
const bush = "./src/assets/images/bush.png"

//Available surfaces and plants
const surfaces = ["desert", "grass", "rocks", "water"]
const plants = [tree, flower, bush]
const objects = ["stick", "key", "knife", "hat", "", "", "", "", ""]

//create world
const createWorld = () => {

  let tile1 = new Tile(1, "", "", [])
  let tile2 = new Tile(2, "", "", [])
  let tile3 = new Tile(3, "", "", []) 
  let tile4 = new Tile(4, "", "", [])
  let tile5 = new Tile(5, "", "", [])
  let tile6 = new Tile(6, "", "", [])
  let tile7 = new Tile(7, "", "", [])
  let tile8 = new Tile(8, "", "", [])
  let tile9 = new Tile(9, "", "", [])

  const tiles = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9]

  //Give tiles random surface and plant //make it push to array instead of replacing
  for (let i = 0; i < tiles.length; i++){
    let randomX = Math.floor(Math.random() * 4);
    let randomY = Math.floor(Math.random() * 3);
    let randomZ = Math.floor(Math.random() * 9);
    tiles[i].surface = surfaces[randomX];
    tiles[i].plant = plants[randomY];
    tiles[i].objects.push(objects[randomZ]);
  }

  world = new World([[tile1, tile2, tile3], [tile4, tile5, tile6], [tile7, tile8, tile9]])
  hero.location = world.land[0][0]
  resetTiles();
  console.log(world)
}

//render world with tiles
const resetTiles = () => {
  worldElement.innerHTML = "";

  world.land.forEach(row => {
  row.forEach((tile => {
    const square = document.createElement("div")
    square.classList.add("square")
    square.classList.add(tile.surface)
    square.id = tile.id

    const flowerImg = document.createElement("img")
    flowerImg.src = tile.plant
    flowerImg.width = "30"
    flowerImg.height = "30"
    square.appendChild(flowerImg)
    worldElement.appendChild(square)
  }))
});
}

/**
 * 
 * @param {*} container container element that shows tile properties
 * @param {*} tile tile object the hero stands on
 * adjust to accustom several objects on tile and to let the user choose
 * which object to trade
 */
export const tradeObjects = (container, tile) => {
  const div = document.createElement("div");
  div.innerHTML = "Want to trade objects?"
  const button = document.createElement("button")
  button.innerHTML = "Trade"
  button.addEventListener("click", () => {
    const tileObject = tile.objects
    const heroObject = hero.bag[0]

    tile.objects = heroObject
    hero.bag.splice(0,1)
    hero.bag.push(tileObject)
    displayBackpack(hero)
    displayTileProps(hero)
  });
  container.appendChild(div)
  container.appendChild(button)
}

const upKey = document.getElementById("up-key")
const rightKey = document.getElementById("right-key")
const downKey = document.getElementById("down-key")
const leftKey = document.getElementById("left-key")
const keys = [upKey, rightKey, downKey, leftKey]

/**
 * add eventlisteners to movement keys and update heros location on screen
 * if more columns are added, buttons data-movement attr must be updated
 */
keys.forEach(key => {
  key.addEventListener("click", (e) => {
    const movement = parseInt(key.dataset.movement)
    let newTileId = hero.location.id + movement;
    if(newTileId < 1 || newTileId > 9) {
      return null;
    }
    resetTiles();
    updateHeroLocation(newTileId, world, hero)
    placeHero(hero)
    displayTileProps(hero);
  })
})

createWorld();
placeHero(hero);
displayBackpack(hero);
displayHealth(hero)
displayTileProps(hero);
