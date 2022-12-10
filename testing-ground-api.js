//Crude mockup of simple game analysis for two different games
// Try mapping the data next
const url = "https://sheetdb.io/api/v1/9e9dhxa6q7bp7";

function fetchData(url) {
  return fetch(url).then((res) => res.json());
}
fetchData(url).then((data) => {
  console.log(compareTeams(data));
});

async function showTeamData() {
  let response = await fetch(url);
  let data = await response.json();
  console.log( data);

  let teamData = document.getElementById('teamData');
  // teamData.innerHTML = data[0].team_name;
  // for (const property in data) {
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    // each team is an object that you can use a for in loop to loop through
    let teams = data[i];
    console.log(teams);
    for (const property in teams){
      teamData.innerHTML += `<div> ${property}: ${teams[property]} </div><br>`;
    }
    // teamData.innerHTML += `<div> ${property}: ${data[property].team_name} </div>`
    // for (let j = 0; j < data[i].length; j++) {
    //   // teamData.innerHTML += `<div> ${property}: ${data[property]} </div>`
    //   console.log("length");
    //   console.log(data[i].length);
    //   console.log(data[i]);
    // }
  }
}

showTeamData();

class Team1 {
  constructor(
    name,
    nrnk,
    cfrk,
    ppg,
    oppg,
    rbs,
    trnovs,
    optrnovs,
    tppg,
    optppg,
    twopp,
    ftp,
    tpp,
    defrt,
    offsvrt,
    alla,
    scheddif,
    lastmtchp,
    hmct,
    daysoff,
    inj,
    etest
  ) {
    (this.name = name),
      (this.natrank = nrnk),
      (this.confrank = cfrk),
      (this.pointPerG = ppg),
      (this.oponPpg = oppg),
      (this.rebounds = rbs),
      (this.turnovers = trnovs),
      (this.opTurnovers = optrnovs),
      (this.tresPg = tppg),
      (this.oppthrees = optppg),
      (this.twoptpct = twopp),
      (this.freethpct = ftp),
      (this.threeptpct = tpp),
      (this.defensivert = defrt),
      (this.offensivert = offsvrt),
      (this.allamercs = alla),
      (this.schedDifficulty = scheddif),
      (this.lastmatchup = lastmtchp),
      (this.homecourt = hmct),
      (this.daysoff = daysoff),
      (this.injuries = inj),
      (this.eyetest = etest);
  }
}
class Team2 {
  constructor(
    name,
    nrnk,
    cfrk,
    ppg,
    oppg,
    rbs,
    trnovs,
    optrnovs,
    tppg,
    optppg,
    twopp,
    ftp,
    tpp,
    defrt,
    offsvrt,
    alla,
    scheddif,
    lastmtchp,
    hmct,
    daysoff,
    inj,
    etest
  ) {
    (this.name = name),
      (this.natrank = nrnk),
      (this.confrank = cfrk),
      (this.pointPerG = ppg),
      (this.oponPpg = oppg),
      (this.rebounds = rbs),
      (this.turnovers = trnovs),
      (this.opTurnovers = optrnovs),
      (this.tresPg = tppg),
      (this.oppthrees = optppg),
      (this.twoptpct = twopp),
      (this.freethpct = ftp),
      (this.threeptpct = tpp),
      (this.defensivert = defrt),
      (this.offensivert = offsvrt),
      (this.allamercs = alla),
      (this.schedDifficulty = scheddif),
      (this.lastmatchup = lastmtchp),
      (this.homecourt = hmct),
      (this.daysoff = daysoff),
      (this.injuries = inj),
      (this.eyetest = etest);
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
arizona.nat_rank,
arizona.conf_rank,
arizona.ppg_avg,
arizona.op_ppg_avg,
arizona.rbs,
arizona.trnovs,
arizona.optrnovs,
arizona.tppg,
arizona.op_tppg,
arizona.twopt_pct,
arizona.ft_pct,
arizona.tp_pct,
arizona.def_rating,
arizona.offsv_rating,
arizona.all_americans,
arizona.sched_dfclty,
arizona.last_matchup,
arizona.home_court_adv,
arizona.days_off,
arizona.injuries,
arizona.eye_test
  );
  //Team 2
  let T2 = new Team2(
gonzaga.team_name,
gonzaga.nat_rank,
gonzaga.conf_rank,
gonzaga.ppg_avg,
gonzaga.op_ppg_avg,
gonzaga.rbs,
gonzaga.trnovs,
gonzaga.optrnovs,
gonzaga.tppg,
gonzaga.op_tppg,
gonzaga.twopt_pct,
gonzaga.ft_pct,
gonzaga.tp_pct,
gonzaga.def_rating,
gonzaga.offsv_rating,
gonzaga.all_americans,
gonzaga.sched_dfclty,
gonzaga.last_matchup,
gonzaga.home_court_adv,
gonzaga.days_off,
gonzaga.injuries,
gonzaga.eye_test
  );


  //////////////////////////////////////////////////////////////////////

  let countTeam1 = 0;
  let countTeam2 = 0;
  let catDifferential = 0;
  //National Rank
  if (parseFloat(T1.natrank) > parseFloat(T2.natrank)) {
    countTeam2++;
  } else {
    countTeam1++;
  }
  //conf Rank
  if (parseFloat(T1.confrank) > parseFloat(T2.confrank)) {
    countTeam2++;
  } else if (parseFloat(T1.confrank) == parseFloat(T2.confrank)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam1++;
  }
  //total points per game
  if (parseFloat(T1.pointPerG) > parseFloat(T2.pointPerG)) {
    countTeam1++;
  } else if (parseFloat(T1.pointPerG) == parseFloat(T2.pointPerG)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  //Category Differntial
  let PpgDiffrtl = parseFloat(T1.pointPerG) - parseFloat(T2.pointPerG);
  console.log(`The name of team one is ${T1.name}.The name of team two is ${T2.name}`);
  console.log(`${T1.name} scores ${T1.pointPerG} points per game and ${T2.name} scores ${T2.pointPerG} points per game. The Differential is ${PpgDiffrtl}`);
  
  //oponent points per game
  if (parseFloat(T1.oponPpg) > parseFloat(T2.oponPpg)) {
    countTeam2++;
  } else if (parseFloat(T1.oponPpg) == parseFloat(T2.oponPpg)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam1++;
  }
  //Category Differntial
  let OppgDiffrtl = T1.oponPpg - T2.oponPpg;
  console.log(`The name of team one is ${T1.name}.The name of team two is ${T2.name}`);
  console.log(`${T1.name} opponents score ${T1.oponPpg} points per game and ${T2.name} opponents score ${T2.oponPpg} points per game. The Differential is ${OppgDiffrtl}`);

  //team total rebounds per game
  if (parseFloat(T1.rebounds) > parseFloat(T2.rebounds)) {
    countTeam1++;
  } else if (parseFloat(T1.rebounds) == parseFloat(T2.rebounds)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  //Category Differntial
  let rbndsDiff = T1.rebounds - T2.rebounds;
  console.log(`The name of team one is ${T1.name}.The name of team two is ${T2.name}`);
  console.log(`${T1.name} get ${T1.rebounds} rebounds per game and ${T2.name} get ${T2.rebounds} rebounds per game. The Differential is ${rbndsDiff}`);

  //team turnovers per game
  if (parseFloat(T1.turnovers) > parseFloat(T2.turnovers)) {
    countTeam2++;
  } else if (parseFloat(T1.turnovers) == parseFloat(T2.turnovers)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam1++;
  }
  let turnOvsDiff = T1.turnovers - T2.turnovers;
  console.log(`The name of team one is ${T1.name}.The name of team two is ${T2.name}`);
  console.log(`${T1.name} commit ${T1.turnovers} turnovers per game and ${T2.name} commit ${T2.turnovers}  per game. The Differential is ${turnOvsDiff}`);

  //opponent Team Turnovers per game
  if (parseFloat(T1.opTurnovers) > parseFloat(T2.opTurnovers)) {
    countTeam1++;
  } else if (parseFloat(T1.opTurnovers) == parseFloat(T2.opTurnovers)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }

  let oppTurnOvsDiff = T1.opTurnovers - T2.opTurnovers;
  console.log(`The name of team one is ${T1.name}.The name of team two is ${T2.name}`);
  console.log(`${T1.name} opponents commit ${T1.opTurnovers} turnOvers per game and ${T2.name} opponents commit ${T2.opTurnovers} per game. The Differential is ${oppTurnOvsDiff}`);

  //Three pointers per game
  if (parseFloat(T1.tresPg) > parseFloat(T2.tresPg)) {
    countTeam1++;
  } else if (parseFloat(T1.tresPg) == parseFloat(T2.tresPg)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
let tppgDiff = T1.tresPg - T2.tresPg;
  console.log(`The name of team one is ${T1.name}.The name of team two is ${T2.name}`);
  console.log(`${T1.name} scores ${T1.tresPg} threes per game and ${T2.name} scores ${T2.tresPg} threes per game. The Differential is ${tppgDiff}`);

  //opponent threes per game
  if (parseFloat(T1.oppthrees) > parseFloat(T2.oppthrees)) {
    countTeam2++;
  } else if (parseFloat(T1.tresPg) == parseFloat(T2.tresPg)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam1++;
  }
  let oPtppgDiff = T1.oppthrees - T2.oppthrees;
  console.log(`The name of team one is ${T1.name}.The name of team two is ${T2.name}`);
  console.log(`${T1.name} opponents score ${T1.oppthrees} threes per game and ${T2.name} opponents score ${T2.oppthrees} threes per game. The Differential is ${oPtppgDiff}`);

  //two point percentage
  if (parseFloat(T1.twoptpct) > parseFloat(T2.twoptpct)) {
    countTeam1++;
  } else if (parseFloat(T1.twoptpct) == parseFloat(T2.twoptpct)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }

  let twoPpDiff = T1.twoptpct - T2.twoptpct;
  console.log(`The name of team one is ${T1.name}.The name of team two is ${T2.name}`);
  console.log(`${T1.name} two point percentage is ${T1.twoptpct} and ${T2.name} two point percentage is ${T2.twoptpct} percent. The Differential is ${twoPpDiff} percent`);  

  //Free Throw Percentage
  if (parseFloat(T1.freethpct) > parseFloat(T2.freethpct)) {
    countTeam1++;
  } else if (parseFloat(T1.freethpct) == parseFloat(T2.freethpct)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }

  let fTPctDiff = T1.freethpct - T2.freethpct;
  console.log(`The name of team one is ${T1.name}.The name of team two is ${T2.name}`);
  console.log(`${T1.name} free throw percentage is ${T1.freethpct} percent and ${T2.name} free throw percentage is ${T2.freethpct} percent. The Differential is ${fTPctDiff} percent`);

  //Three Point Percentage
  if (parseFloat(T1.threeptpct) > parseFloat(T2.threeptpct)) {
    countTeam1++;
  } else if (parseFloat(T1.threeptpct) == parseFloat(T2.threeptpct)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }

  let tPpctDiff = T1.threeptpct - T2.threeptpct;
  console.log(`The name of team one is ${T1.name}.The name of team two is ${T2.name}`);
  console.log(`${T1.name} three point percentage is ${T1.threeptpct} percent and ${T2.name} three pont percentage is ${T2.threeptpct} percent. The Differential is ${tPpctDiff} percent`);

  //defensive rating
  if (parseFloat(T1.defensivert) > parseFloat(T2.defensivert)) {
    countTeam2++;
  } else if (parseFloat(T1.defensivert) == parseFloat(T2.defensivert)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam1++;
  }
  let defRtgDiff = T1.defensivert - T2.defensivert;
  
  console.log(`The name of team one is ${T1.name}.The name of team two is ${T2.name}`);
  console.log(`${T1.name} defensive rating is ${T1.defensivert} and ${T2.name} defensive rating is ${T2.defensivert}. The Differential is ${defRtgDiff} points`);
  
  //offensive rating
  if (parseFloat(T1.offensivert) > parseFloat(T2.offensivert)) {
    countTeam1++;
  } else if (parseFloat(T1.offensivert) == parseFloat(T2.offensivert)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  let ofRtgDiff = T1.offensivert - T2.offensivert;
  
  console.log(`The name of team one is ${T1.name}.The name of team two is ${T2.name}`);
  console.log(`${T1.name} offensive rating is ${T1.offensivert} and ${T2.name} offensive rating is ${T2.offensivert}. The Differential is ${ofRtgDiff} points`);

  //all americans
  if (parseFloat(T1.allamercs) > parseFloat(T2.allamercs)) {
    countTeam1++;
  } else if (parseFloat(T1.allamercs) == parseFloat(T2.allamercs)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  //schedule difficulty
  if (parseFloat(T1.schedDifficulty) > parseFloat(T2.schedDifficulty)) {
    countTeam1++;
  } else if (parseFloat(T1.schedDifficulty) == parseFloat(T2.schedDifficulty)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  //Last Matchup
  if (parseFloat(T1.lastmatchup) > parseFloat(T2.lastmatchup)) {
    countTeam1++;
  } else if (parseFloat(T1.lastmatchup) == parseFloat(T2.lastmatchup)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  //home court advantage
  if (parseFloat(T1.homecourt) > parseFloat(T2.homecourt)) {
    countTeam1++;
  } else if (parseFloat(T1.homecourt) == parseFloat(T2.homecourt)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  //days off
  if (parseFloat(T1.daysoff) > parseFloat(T2.daysoff)) {
    countTeam1++;
  } else if (parseFloat(T1.daysoff) == parseFloat(T2.daysoff)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
  //Injuries
  //Injuries
  if (parseFloat(T1.injuries) > parseFloat(T2.injuries)) {
    countTeam2++;
  } else if (parseFloat(T1.injuries) == parseFloat(T2.injuries)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam1++;
  }

  //eye test
  //Eye Test
  if (parseFloat(T1.eyetest) > parseFloat(T2.eyetest)) {
    countTeam1++;
  } else if (parseFloat(T1.eyetest) == parseFloat(T2.eyetest)) {
    countTeam1 = countTeam1 + 0;
    countTeam2 = countTeam2 + 0;
  } else {
    countTeam2++;
  }
let differential = countTeam1 - countTeam2;
  //maybe add percentages for FreeThr FG and TP
  //   console.log(T1.tresPg);
  //   console.log(kansas.tppg);
  //   document.getElementById(
  //     "result"
  //   ).innerHTML = `countTeam1, ${kansas.team_name} is ${countTeam1} countTeam2, ${texas.team_name} is ${countTeam2}`;
  return `countTeam1, ${arizona.team_name} is ${countTeam1} countTeam2, ${gonzaga.team_name} is ${countTeam2}  The differential is ${differential}`;

  //Kansas v Texas 03.05.22 Kansas projected to win by 3 X
  //Duke v North Carolina 03.05.22 Duke Projected to win by 3
  //UCLA V USC 03.05.22 USC to win by 3
}
