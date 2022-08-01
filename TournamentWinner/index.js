// There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic
// problems as fast as possible.Teams compete inaround robin,where each team faces off against all other teams.Only two teams
// compete against each other atatime,and for each competition,one team is designated the home team,while the other team is the
// away team.In each competition there's always one winner and one loser;there are no ties.Ateam receives3points if it wins and0
// points if it loses.The winner of the tournament is the team that receives the most amount of points.
// Given an array of pairs representing the teams that have competed against each other and an array containing the results of each
// competition,writeafunction that returns the winner of the tournament.The input arrays are named competitions and results,
// respectively.The competitions array has elements in the form of[homeTeam,away Team],where each team isastring of at most
// 30 characters representing the name of the team.The results array contains information about the winner of each corresponding
// competition in the competitions array.Specifically,results[i]denotes the winner of competitions[i],wherea1in the
//  results array means that the home team in the corresponding competition won andameans that the away team won.
// It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once.It's
// also guaranteed that the tournament will always have at least two teams.

function tournamentWinner(competitions, results) {
  let bestTeam = "";
  let scoreMap = {};

  for (let i = 0; i < competitions.length; i++) {
    let winningTeam = "";
    const [homeTeam, awayTeam] = competitions[i];

    if (results[i] == 1) {
      scoreMap[homeTeam] ? (scoreMap[homeTeam] += 3) : (scoreMap[homeTeam] = 3);
      winningTeam = homeTeam;
    } else if (results[i] == 0) {
      scoreMap[awayTeam] ? (scoreMap[awayTeam] += 3) : (scoreMap[awayTeam] = 3);
      winningTeam = awayTeam;
    }

    if (!scoreMap[bestTeam] || scoreMap[winningTeam] > scoreMap[bestTeam]) {
      bestTeam = winningTeam;
    }
  }

  return bestTeam;
}
