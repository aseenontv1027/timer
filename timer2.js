const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (isNaN(key) === false && key >= 1 && key <= 9) {
    console.log("setting timer for " + key + " seconds...");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
});