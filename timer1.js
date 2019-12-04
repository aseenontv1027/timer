const args = process.argv;
let times = args.slice(2);

if (times !== []) {
  for (let time of times) {
    if (isNaN(time) === false && time >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }
  }
}