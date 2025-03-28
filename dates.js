let today = new Date();
console.log(today);

// console.log("Today's day is " + String(today.getDay()));
// console.log("Today's day is " + daysOfWeek[today.getDay()]);

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


// function formattedDate(date) {
//   return formattedMonth(date) + ' ' + formattedDay(date);
// }

// function formattedMonth(date) {
//   return months[date.getMonth()]
// }

// function formattedDay(date) {
//   return dateSuffix(date.getDate()); 
// }

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function dateSuffix(date) {
  let formattedDay = String(date);
  if (date >= 21) {
    date = Math.floor(date % 10);
  }
  
  switch (date) {
    case 1:
    return formattedDay + "st";
    case 2:
      return formattedDay + "nd";
    case 3:
      return formattedDay + "rd";
    default:
      return formattedDay + "th";
  }
}

formattedDate(today);

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

formattedDate(tomorrow);

let nextweek = new Date(today.getTime());
console.log(today);
console.log(nextweek);

nextweek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextweek.toDateString());

function formatTime(date) {
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());

  if (String(hours).length === 1) {
    hours = '0' + hours;
  }
  if (String(minutes).length === 1) {
    minutes = '0' + minutes;
  }

  console.log(`${hours}:${minutes}`);
}

formatTime(today);