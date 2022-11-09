let second = 0;
let millisecond = 0;
let time = `${second}: ${millisecond}`;

function timer() {
  time = `${second}: ${millisecond}`;
  if (millisecond >= 999) {
    millisecond = 0;
    second++;
  } else {
    millisecond++;
  }
}

export default timer;
