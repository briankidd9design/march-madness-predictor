//POSS = FGA - ORB + TO + (0.475*FTA)

//Crude mockup of simple game analysis for two different games
// Map this data to the DOM
const url = "https://sheetdb.io/api/v1/9e9dhxa6q7bp7";

function fetchData(url) {
  return fetch(url).then((res) => res.json());
}
fetchData(url).then((data) => {
  console.log(compareTeams(data));
});

class Team1 {
  constructor(name, fga, orb, fta, trnovs, offsRating, defRating) {
    (this.name = name),
      (this.fieldGoalAttemps = fga),
      (this.offensiveRebounds = orb),
      (this.freethrowAttempts = fta);
      (this.turnovers = trnovs);
      (this.offensiveRating = offsRating);
      (this.defensiveRating = defRating);
    
  }
}
class Team2 {
    constructor(name, fga, orb, fta, trnovs, offsRating, defRating) {
      (this.name = name),
        (this.fieldGoalAttemps = fga),
        (this.offensiveRebounds = orb),
        (this.freethrowAttempts = fta);
        (this.turnovers = trnovs);
        (this.offensiveRating = offsRating);
        (this.defensiveRating = defRating);
       
    }
  }

//the FUNCTION
function compareTeams(data) {
  //Teams
  let kansas = data[0];
  let texas = data[1];
  let arizona = data[2];
  let arizona_state = data[3];
  let wisconsin = data[4];
  let michigan_state = data[5];
  let uconn = data[6];
  let xavier = data[7];
  let ohio_state = data[8];
  let michigan = data[9];
  let washington = data[10];
  let ucla = data[11];
  let rutgers = data[12];
  let purdue = data[13];
  let baylor = data[14];
  let kentucky = data[15];
  let illinois = data[16];
  let gonzaga = data[17];
  let saint_marys = data[18];
  let usc = data[19];
  let duke = data[20];
  let north_carolina = data[21];
  let iowa = data[22];
  let colorado_state = data[23];
  let murray_state = data[24];
  let houston = data[25];
  let arkansas = data[26];
  let texas_tech = data[27];
  let providence = data[28];
  let tennessee = data[29];
  let villanova = data[30];
  let auburn = data[31];
  let cal_state_fullerton = data[32];
  let norfolk_state = data[33]
  let tcu = data[34];
  let seton_hall = data[35];
  let marquette = data[36];
  let san_diego_state = data[37];
  let memphis = data[38];
  let san_francisco = data[39];
  let uab = data[40];
  let south_dakota_state = data[41];
  let chattanooga = data[42]
  let new_mexico_state = data[43];
  let vermont = data[44];
  let alabama = data[45];
  let lsu = data[46];
  let virginia_tech = data[47];
  let indiana = data[48];
  let loyola_chicago = data[49];
  let montana_state = data[50];
  let longwood = data[51];
  let st_peters = data[52];
  let akron = data[53];
  let boise_state = data[54];
  let miami = data[55];
  let creighton = data[56];
  let davidson = data[57];
  let iowa_state = data[58];
  let colgate = data[59];
  let delaware = data[60];
  let georgia_state=data[61];
  let jacksonville_state = data[62];
  let wyoming = data[63];
  //Team 1
  let T1 = new Team1(
arizona.team_name,
arizona.fga,
arizona.orbs,
arizona.fta,
arizona.trnovs,
arizona.offsv_rating,
arizona.def_rating
  );
  //Team 2
  let T2 = new Team2(
gonzaga.team_name,
gonzaga.fga,
gonzaga.orbs,
gonzaga.fta,
gonzaga.trnovs,
gonzaga.offsv_rating,
gonzaga.def_rating
  );
//THE FORMULA
//POSS = FGA - ORBS + TO + (0.475*FTA)
let poss = Number(parseFloat(T1.fieldGoalAttemps) - parseFloat(T1.offensiveRebounds) + (parseFloat(T1.turnovers) + parseFloat(.475 * parseFloat(T1.freethrowAttempts))));
console.log (`${T1.name}'s number of posessions per game is ${poss}`);

let poss2 = Number(parseFloat(T2.fieldGoalAttemps) - parseFloat(T2.offensiveRebounds) + (parseFloat(T2.turnovers) + parseFloat(.475 * parseFloat(T2.freethrowAttempts))));
console.log (`${T2.name}'s number of posessions per game is is ${poss2}`);

//Team 1 total points (This is correct)
let ptsPerOneHundred = (parseFloat(T1.offensiveRating - 100) - (100 - parseFloat(T2.defensiveRating))) +100;
// console.log(ptsPerOneHundred);
let totalPoints = (parseFloat(ptsPerOneHundred/100) * parseFloat(poss));
console.log(`${T1.name} will score ${totalPoints}`);

//Team 2 total points
let ptsPerOneHundred2 = (parseFloat(T2.offensiveRating - 100) - (100 - parseFloat(T1.defensiveRating))) +100;
// console.log(`ptsPerOneHundred2 ${ptsPerOneHundred2}`);
let totalPoints2 = (parseFloat(ptsPerOneHundred2/100) * parseFloat(poss2));
console.log(`${T2.name} will score ${totalPoints2}`);


// console.log(parseFloat(T1.offensiveRebounds))
  //////////////////////////////////////////////////////////////////////

  //   return `countTeam1, ${washington.team_name} is ${countTeam1} countTeam2, ${ucla.team_name} is ${countTeam2}  The differential is ${differential}`;
  //possessions
}
