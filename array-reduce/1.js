function totalPoints(points) {
    return points.reduce((el, curr) => {
      return el + curr;
    });
  }
  
  function buildSentence(words) {
    return words.reduce((el, curr) => {
      return el + " " + curr;
    }) + " ";
  }
  
  function totalGoalsScored(players) {
    return players.reduce((el, curr, acc) => {
      console.log(el, curr, acc);
      if(acc == 1) {
        return el.goals + curr.goals;
      } else {
        return el + curr.goals;
        
      }
    })
  }