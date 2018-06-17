const formatDate = (timeInSeconds) => {
  let second = `${timeInSeconds}`;
  let minute = 0;
  let hour = 0;
  
  if (second < 60) {
    return second + 's';
  }
  else if (second < 3600) {
	minute = Math.floor(second/60);
	rest = second - 60*minute;
	if (rest === 0) {
	  return minute+'m'; 
	}
	else {
      return minute+'m '+rest+'s';
    }
  }
  else if (second >= 3600) {
    hour = Math.floor(second/3600);
    minute = Math.floor((second - 3600*hour)/60);
    rest = second - (3600*hour+ 60*minute);
    if (rest === 0 && minute === 0) {
      return hour + 'h';
    }
    else if (rest === 0) {
      return hour + 'h ' + minute+ 'm';
    }
    else if (minute === 0) {
      return hour + 'h ' + rest+ 's';
    }
    else {
      return hour + 'h ' + minute+ 'm '+ rest + 's';
    }
  }
  else {
    return '0s';
  }
}

module.exports = formatDate;