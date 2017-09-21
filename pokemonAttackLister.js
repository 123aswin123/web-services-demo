var httpRequester = require('sync-request');
var response = httpRequester('GET', 'https://pokeapi.co/api/v2/pokemon/1/');
var responseBody = JSON.parse(response.getBody());
var arrayOfMoves = responseBody.moves;
console.log(arrayOfMoves);

for (var i = 0; i < arrayOfMoves.length; i++) {
  var moveNames = arrayOfMoves[i].move.name;
  console.log(moveNames);
}
