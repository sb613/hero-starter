/* 

  The only function that is required in this file is the "move" function

  You MUST export the move function, in order for your code to run
  So, at the bottom of this code, keep the line that says:

  module.exports = move;

  The "move" function must return "North", "South", "East", "West", or "Stay"
  (Anything else will be interpreted by the game as "Stay")
  
  The "move" function should accept two arguments that the website will be passing in: 
    - a "gameData" object which holds all information about the current state
      of the battle

    - a "helpers" object, which contains useful helper functions
      - check out the helpers.js file to see what is available to you

    (the details of these objects can be found on javascriptbattle.com/rules)

  This file contains four example heroes that you can use as is, adapt, or
  take ideas from and implement your own version. Simply uncomment your desired
  hero and see what happens in tomorrow's battle!

  Such is the power of Javascript!!!

*/


/*
// Aggressor
var move = function(gameData, helpers) {
  // Here, we ask if your hero's health is below 30
  if (gameData.activeHero().health <= 30){
    // If it is, head towards the nearest health well
    return helpers.findNearestHealthWell(gameData);
  } else {
    // Otherwise, go attack someone...anyone.
    return helpers.findNearestEnemy(gameData);
  }
};
*/
/*
// Health Nut
var move = function(gameData, helpers) {
  // Here, we ask if your hero's health is below 75
  if (gameData.activeHero().health <= 75){
    // If it is, head towards the nearest health well
    return helpers.findNearestHealthWell(gameData);
  } else {
    // Otherwise, go mine some diamonds!!!
    return helpers.findNearestDiamondMine(gameData);
  }
};
*/
// Balanced
/*
=======
//TL;DR: If you are new, just uncomment the 'move' function that you think sounds like fun!
//       (and comment out all the other move functions)


// // The "Northerner"
// var move = function(gameData, helpers) {
//   var myHero = gameData.activeHero;
//   return 'North';
// };

// // The "Blind Man"
// var move = function(gameData, helpers) {
//   var myHero = gameData.activeHero;
//   var choices = ['North', 'South', 'East', 'West'];
//   return choices[Math.floor(Math.random()*4)];
// };

// // The "Unwise Assassin"
// var move = function(gameData, helpers) {
//   var myHero = gameData.activeHero;
//   if (myHero.health < 30) {
//     return helpers.findNearestHealthWell(gameData);
//   } else {
//     return helpers.findNearestEnemy(gameData);
//   }
// };

// // The "Careful Assassin"
// var move = function(gameData, helpers) {
//   var myHero = gameData.activeHero;
//   if (myHero.health < 50) {
//     return helpers.findNearestHealthWell(gameData);
//   } else {
//     return helpers.findNearestWeakerEnemy(gameData);
//   }
// };

// // The "Safe Diamond Miner"
>>>>>>> 49dc9fa90f0a9aed484e3c310388234f157b6fad
var move = function(gameData, helpers) {
  var myHero = gameData.activeHero;

  //Get stats on the nearest health well
  var healthWellStats = helpers.findNearestObjectDirectionAndDistance(gameData.board, myHero, function(boardTile) {
    if (boardTile.type === 'HealthWell') {
      return true;
    }
  });

  var distanceToHealthWell = healthWellStats.distance;
  var directionToHealthWell = HealthWell.direction;

  if (myHero.health < 40) {
    //Heal no matter what if low health
    return directionToHealthWell;
  } else if (myHero.health < 100 && distanceToHealthWell === 1) {
    //Heal if you aren't full health and are close to a health well already
    return directionToHealthWell;
  } else {
    //If healthy, go capture a diamond mine!
    return helpers.findNearestNonTeamDiamondMine(gameData);
  }
};
*/

// The "Selfish Diamond Miner" (captures teammates' diamond mines)
var move = function(gameData, helpers) {
  var myHero = gameData.activeHero;

  //Get stats on the nearest health well
  var healthWellStats = helpers.findNearestObjectDirectionAndDistance(gameData.board, myHero, function(boardTile) {
    if (boardTile.type === 'HealthWell') {
      return true;
    }
  });

  var distanceToHealthWell = healthWellStats.distance;
  var directionToHealthWell = HealthWell.direction;

  if (myHero.health < 40) {
    //Heal no matter what if low health
    return directionToHealthWell;
  } else if (myHero.health < 100 && distanceToHealthWell === 1) {
    //Heal if you aren't full health and are close to a health well already
    return directionToHealthWell;
  } else {
    //If healthy, go capture a diamond mine!
    return helpers.findNearestUnownedDiamondMine(gameData);
  }
};

// // The "Coward"
// var move = function(gameData, helpers) {
//   return helpers.findNearestHealthWell(gameData);
// }


// Export the move function here
module.exports = move;
