/*Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

*/

let s = "12:00:00AM";

function timeConversion(s) {
  // Write your code here
  const regAM = new RegExp(/AM/);
  const regPM = new RegExp(/PM/);

  if (regAM.test(s)) {
    const time = s.split(":");
    if (time[0] === "12") {
      return "00:" + time[1] + ":" + time[2].slice(0, 2);
    } else {
      return time[0] + ":" + time[1] + ":" + time[2].slice(0, 2);
    }
  } else if (regPM.test(s)) {
    const time = s.split(":");
    if (time[0] === "12") {
      return "12:" + time[1] + ":" + time[2].slice(0, 2);
    } else {
      return parseInt(time[0]) + 12 + ":" + time[1] + ":" + time[2].slice(0, 2);
    }
  }
}
