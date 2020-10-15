function totalPoints(points) {
    let total = 0
    points.forEach(function (point) {
      total += point
    })
    return total
  }
  
  function sumOfSquares(nmbrs) {
    return nmbrs.reduce((el, curr, acc) => {
      if(acc == 1) {
        return (el * el) + (curr * curr);
      } else {
        return el + (curr * curr);
      }
    });
  }
  
  function activePlayerGoals(players) {
    return players.reduce((el, curr, acc) => {
      if(acc == 1) {
        if(el.active && curr.active) {
          return el.goals + curr.goals;
        } else if (el.active) {
          return el.goals;
        } else if (curr.active) {
          return curr.goals;
        }
      } else {
        if(curr.active) {
          return el + curr.goals;
        } else {
          return el;
        }
      }
    });
  }
  
  function max(numbers) {
    return numbers.reduce((el, curr, acc) => {
      if(acc == 1) {
        if(el > curr) {
          return el;
        } else {
          return curr;
        }
      } else {
        if(curr > el) {
          return curr;
        } else {
          return el;
        }
      }
    });
  }