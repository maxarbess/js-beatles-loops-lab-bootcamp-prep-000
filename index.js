function theBeatlesPlay(musicians,instruments)  {
  var beatlesPlayers = [];
  for (var i=0; i < musicians.length; i++)  {
    beatlesPlayers.push(musicians[i] + " plays " 
    + instruments[i])
  }
  return beatlesPlayers
}
function johnLennonFacts(array) {
const facts = [];
  var i = 0;
  while (i < array.length)  {
    facts.push(array[i] + "!!!");
    i++;
  }
  return facts
}