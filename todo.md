skapa class för world, miljö, hero, villain

world: innehåller ett rutnät av miljöer. en lista med listor (y axeln är index 0-..., x axeln blir i varje lista index 0-...)

miljö: blir en hard coded ruta, har properties som underlag, 

hero: liv, styrka, "ryggsäck"

villain: ...

UI: dela upp sidan i tre containers, left middle right.
middle är spelplanen.
left är additional info, right är ryggsäck, liv etc

under key-container lägg till html för knappar som uppdateras, typ "vill du ta upp objektet?"

clean up main.js by separating functions based on what they affect (worldbuilding, stats displaying, hero movement)

