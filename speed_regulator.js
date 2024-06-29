const prompt = require("prompt-sync")();
speed = prompt("speed: ");

function speed_detector() {
  let demerit_points_per_unit = 5;
  let speed_limit = 70;

  if (speed < speed_limit) {
    console.log("Ok");
  } else {
    const demerit_points = Math.floor(
      (speed - speed_limit) / demerit_points_per_unit
    );
    console.log(`Points = ${demerit_points}`);
    if (demerit_points > 11) {
      console.log("License suspended");
    }
  }
}
speed_detector();
