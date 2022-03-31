const currentTime = moment().format('HH:mm A | YYYY-MM-DD');
console.log(currentTime);
$("#currentDay").append("<p>" + currentTime + "</p>");