// place hero or villain icon on their respective starting square on startup
// and then there new squares on movement
export const placePerson = (person) => {
  const square = document.getElementById(person.location.id);
  let icon = document.createElement("img");
  icon.src = person.icon;
  icon.height = "30";
  icon.width = "30";
  square.appendChild(icon);
};

//update hero and villain objects location property based on new tile id
export const updatePersonLocation = (newId, world, person) => {
  let newTile;
  world.land.forEach((row) => {
    row.forEach((tile) => {
      if (tile.id == newId) {
        newTile = tile;
      }
    });
  });
  person.location = newTile;
};

/**
 * generate random villain movement based on key buttons
 * @returns a random number to represent a villain key click
 */
export const moveVillain = () => {
  const movement = [1, -1, 3, -3];
  const randomNum = Math.floor(Math.random() * 4);
  const villainMovement = movement[randomNum];
  return villainMovement;
};
