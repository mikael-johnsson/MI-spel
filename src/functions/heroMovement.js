// place hero name on first square on startup
export const placePerson = (person) => {
  const square = document.getElementById(person.location.id);
  let icon = document.createElement("img");
  icon.src = person.icon;
  icon.height = "30";
  icon.width = "30";
  square.appendChild(icon);
};

//update hero objects location property based on new tile id
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

export const moveVillain = () => {
  const movement = [1, -1, 3, -3, 0];
  const randomNum = Math.floor(Math.random() * 5);
  const villainMovement = movement[randomNum];
  console.log("this is villain movement: ", villainMovement);
  return villainMovement;
};
