
/**
 * Displays tiles surface and plant on screen
 * Adjust to accustom several plants and objects
 */
export const displayTileProps = (hero) => {
  const tile = hero.location;
  const container = document.getElementById("tile-info-container");
  container.innerHTML = "";
  const heading = document.createElement("h3");
  heading.innerHTML = "Tile info";

  const plant = document.createElement("div");
  plant.innerHTML =
    "Plant: " + `<img width="20" height="20" src="${tile.plant}">`;

  const surface = document.createElement("div");
  surface.innerHTML = "Surface: " + tile.surface;

  container.appendChild(heading);
  container.appendChild(surface);
  container.appendChild(plant);

  tile.objects.forEach((item) => {
    if (item !== "") {
      const row = document.createElement("div");

      const object = document.createElement("span");
      object.innerHTML = "Object: " + item;

      const pickUpButton = document.createElement("button");
      pickUpButton.innerHTML = "pick up item";

      if(hero.bag.length >= 3 ){
        pickUpButton.classList.add("disabled-button")
        pickUpButton.setAttribute("disabled", "")
      }

      pickUpButton.addEventListener("click", () => {
        pickUpItem(hero, item, tile);
      });

      row.appendChild(object);
      row.appendChild(pickUpButton);
      container.appendChild(row);
    }
  });
};

const pickUpItem = (hero, item, tile) => {
  hero.bag.push(item);

  const i = tile.objects.indexOf(item);
  tile.objects.splice(i, 1);
  displayBackpack(hero);
  displayTileProps(hero);
}

/**
 * display life and strength stats on screen
 */
export const displayHealth = (hero) => {
  const container = document.getElementById("health");
  let life = document.createElement("div");
  let strength = document.createElement("div");
  life.innerHTML = "Life: " + hero.life;
  strength.innerHTML = "Strength: " + hero.strength;

  container.appendChild(life);
  container.appendChild(strength);
};

/**
 * loop through the bag and display on screen
 */
export const displayBackpack = (hero) => {
  const container = document.getElementById("backpack");
  container.innerHTML = "";

  const heading = document.createElement("h3");
  heading.innerHTML = `Backpack: ${hero.bag.length} / 3 items`;

  container.appendChild(heading);

  hero.bag.forEach((item) => {
    const row = document.createElement("div");
    const itemDiv = document.createElement("span");
    itemDiv.innerHTML = item;

    const dropButton = document.createElement("button");
    dropButton.innerHTML = "drop item";

    dropButton.addEventListener("click", () => {
      dropItem(hero, item, );
    });

    row.appendChild(itemDiv);
    row.appendChild(dropButton);
    container.appendChild(row);
  });
};

const dropItem = (hero, item) => {
  const i = hero.bag.indexOf(item);
  hero.bag.splice(i, 1);
  
  const currTile = hero.location
  currTile.objects.push(item)

  displayTileProps(hero)      
  displayBackpack(hero);
}
