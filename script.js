//create candidates
var createPolitician = function(name, partyColor)
{
  var politician = {};
  politician.name = name;
  politician.partyColor = partyColor;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.tallyUpTotalVotes = function()
  {
    this.totalVotes = 0;
  
    for (var i = 0; i < this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  
  return politician;
};

//assign names and colors for candidates
var taylor = createPolitician("Taylor Betts", [132, 17, 11]);
var isabelle = createPolitician("Isabelle Arena", [245, 141, 136]);

console.log("Taylor's color is: " + taylor.partyColor);
console.log("Isabelle's color is: " + isabelle.partyColor);

//election results for candidates
taylor.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

isabelle.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

taylor.electionResults[9] = 1;
isabelle.electionResults[9] = 28;

taylor.electionResults[4] = 17;
isabelle.electionResults[4] = 38;

taylor.electionResults[43] = 11;
isabelle.electionResults[43]= 27;

console.log(taylor.electionResults);
console.log(isabelle.electionResults);

var setStateResults = function(state)
{
  theStates[state].winner = null;
  
  if (taylor.electionResults[state] > isabelle.electionResults[state])
  {
    theStates[state].winner = taylor;
  }
  else if (taylor.electionResults[state] < isabelle.electionResults[state])
  {
    theStates[state].winner = isabelle;
  }
  
  var stateWinner = theStates[state].winner;
 
  if (stateWinner !== null)
  {
    theStates[state].rgbColor = stateWinner.partyColor;
  }
  else
  {
    theStates[state].rgbColor = [11,32,57];
  }
  
  //static country table
  var countryInfoTable = document.getElementById('countryResults');
  var row = countryInfoTable.children[0].children[0];
 
  row.children[0].innerText = taylor.name;
  row.children[1].innerText = taylor.totalVotes;
  row.children[2].innerText = isabelle.name;
  row.children[3].innerText = isabelle.totalVotes;
  row.children[5].innerText = winner;
  
  //dynamic state table
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
  candidate1Name.innerText = taylor.name;
  candidate2Name.innerText = isabelle.name;
 
  candidate1Results.innerText = taylor.electionResults[state];
  candidate2Results.innerText = isabelle.electionResults[state];
 
  if (theStates[state].winner === null)
  {
    winnersName.innerText = "DRAW";
  } 
  else {
    winnersName.innerText = theStates[state].winner.name;
  }
};

//call tallyUpVotes methods
taylor.tallyUpTotalVotes();
isabelle.tallyUpTotalVotes();

console.log(taylor.name + ' has ' + taylor.totalVotes + ' votes');
console.log(isabelle.name + ' has ' + isabelle.totalVotes + ' votes');

//winner declaration
var winner = "???";
 
if (taylor.totalVotes > isabelle.totalVotes)
{
  winner = taylor.name;
}
else if (taylor.totalVotes < isabelle.totalVotes)
{
  winner = isabelle.name;
}
else
{
  winner = "DRAW";
};
 
console.log("AND THE WINNER IS..." + winner + "!!!");